# Kataw parser test case

## Input

`````js

// 12.2.5.1
// Always throw a Syntax Error if code matches this production.
({ a = 0 });

// 12.2.9.1
// It is a Syntax Error if the lexical token sequence matched by CoverParenthesizedExpressionAndArrowParameterList
// cannot be parsed with no tokens left over using ParenthesizedExpression as the goal symbol.
(...a);
(a, ...b);

// All Early Errors rules for ParenthesizedExpression and its derived productions also apply to
// CoveredParenthesizedExpression of CoverParenthesizedExpressionAndArrowParameterList.
(((...a)));
(((a, ...b)));

// 12.4.1
// It is an early Reference Error if IsValidSimpleAssignmentTarget of LeftHandSideExpression is false.
0++;
0--;

// 12.5.1
// It is an early Reference Error if IsValidSimpleAssignmentTarget of UnaryExpression is false.
++0;
--0;

// 12.14.1
// It is a Syntax Error if LeftHandSideExpression is either an ObjectLiteral or an ArrayLiteral and the lexical
// token sequence matched by LeftHandSideExpression cannot be parsed with no tokens left over using
// AssignmentPattern as the goal symbol.
({a: 0} = 0);
({get a(){}} = 0);
({set a(b){}} = 0);
({a(b){}} = 0);
[0] = 0;;

// It is an early Reference Error if LeftHandSideExpression is neither an ObjectLiteral nor an ArrayLiteral and
 // IsValidSimpleAssignmentTarget of LeftHandSideExpression is false.
0 = 0;;

// It is an early Reference Error if IsValidSimpleAssignmentTarget of LeftHandSideExpression is false.
({a}) = 0;;
([a]) = 0;;
({a} += 0);;
[a] *= 0;;
0 /= 0;;

// 12.14.5.1
// It is a Syntax Error if LeftHandSideExpression is either an ObjectLiteral or an ArrayLiteral and if the lexical
// token sequence matched by LeftHandSideExpression cannot be parsed with no tokens left over using
// AssignmentPattern as the goal symbol.
[...{a: 0}] = 0;;
[...[0]] = 0;;

// It is a Syntax Error if LeftHandSideExpression is neither an ObjectLiteral nor an ArrayLiteral and
// IsValidSimpleAssignmentTarget(LeftHandSideExpression) is false.
[...0] = 0;;
[...new a] = 0;;

// 13.6.4.1
// It is a Syntax Error if LeftHandSideExpression is either an ObjectLiteral or an ArrayLiteral and if the
// lexical token sequence matched by LeftHandSideExpression cannot be parsed with no tokens left over using
 // AssignmentPattern as the goal symbol.
for({a: 0} in 0);
for([0] in 0);
for({a: 0} of 0);
for([0] of 0);

// It is a Syntax Error if IsValidSimpleAssignmentTarget of LeftHandSideExpression is false.
for(0 in 0);
for(0 of 0);

// It is a Syntax Error if the LeftHandSideExpression is CoverParenthesizedExpressionAndArrowParameterList
// : ( Expression ) and Expression derives a production that would produce a Syntax Error according to these
// rules if that production is substituted for LeftHandSideExpression. This rule is recursively applied.
for(({a: 0}) in 0);
for(([0]) in 0);
for(({a: 0}) of 0);
for(([0]) of 0);
for((0) in 0);
for((0) of 0);

// 11.8.4.1
// It is a Syntax Error if the MV of HexDigits > 1114111.
\\u{110000};
\\u{FFFFFFF};

// 11.8.5.1
// It is a Syntax Error if IdentifierPart contains a Unicode escape sequence.
/./\\u0069;
/./\\u{69};

// 12.2.5.1
// It is a Syntax Error if HasDirectSuper of MethodDefinition is true.
({ a(){ super(); } });
({ a(){ {{ if(0) (( super() )); }} } });
class A extends B { constructor() { !{constructor() { super(); }}; } }
class A extends B { constructor() { !{*constructor() { super(); }}; } }
class A extends B { constructor() { !{get constructor() { super(); }}; } }
class A extends B { constructor() { !{set constructor(a) { super(); }}; } }

// 11.6.1.1
// It is a Syntax Error if SV(UnicodeEscapeSequence) is neither the UTF16Encoding (10.1.1) of a single Unicode code
// point with the Unicode property @{x201c}@ID_Start@{x201d}@ nor "$" or "_".
\\u0000;
\\u{0};
// It is a Syntax Error if SV(UnicodeEscapeSequence) is neither the UTF16Encoding (10.1.1) of a single Unicode code
// point with the Unicode property @{x201c}@ID_Continue@{x201d}@ nor "$" or "_" nor the UTF16Encoding of either <ZWNJ> or <ZWJ>.
a\\u0000;
a\\u{0};

// 11.8.4.1
// It is a Syntax Error if the MV of HexDigits > 1114111.
("\\u{110000}");
("\\u{FFFFFFF}");

// 12.14.5.1
// It is a Syntax Error if IsValidSimpleAssignmentTarget of IdentifierReference is false.
"use strict"; ({eval} = 0);
"use strict"; ({eval = 0} = 0);
"use strict"; ({arguments} = 0);
"use strict"; ({arguments = 0} = 0);

// 13.6.1
// It is a Syntax Error if IsLabelledFunction(Statement) is true for any occurrence of Statement in these rules.
if(0) label: function f(){}
if(0) labelA: labelB: function f(){}
if(0) label: function f(){} else ;
if(0) ; else label: function f(){}

// 14.2.1
// It is a Syntax Error if ArrowParameters Contains YieldExpression is true.
function* g(){ (a = yield) => 0; };
function* g(){ (a = yield b) => 0; };
function* g(){ (a = yield* b) => 0; };
function* g(){ (a = x + f(yield)) => 0; };
function* g(){ ({[yield]: a}) => 0; };
function* g(){ ({a = yield}) => 0; };
function* g(){ ([a = yield]) => 0; };

// 11.8.5.1
// It is a Syntax Error if IdentifierPart contains a Unicode escape sequence.
/./\\u0069;
/./\\u{69};

// Annex B 3.5 (13.14.1)
// It is a Syntax Error if any element of the BoundNames of CatchParameter also occurs
// in the LexicallyDeclaredNames of Block.
try {} catch(e) { let e; };
try {} catch(e) { function e(){} };

// It is a Syntax Error if any element of the BoundNames of CatchParameter also occurs
// in the VarDeclaredNames of Block,
// unless that element is only bound by a VariableStatement or the VariableDeclarationList of a for statement,
// or the ForBinding of a for-in statement.
try {} catch(e) { for(var e of 0); };

`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 205,
                                "left": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 79,
                                    "end": 81
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 768,
                                    "start": 83,
                                    "end": 85
                                },
                                "flags": 256,
                                "start": 79,
                                "end": 85
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 79,
                        "end": 85
                    },
                    "flags": 256,
                    "start": 78,
                    "end": 87
                },
                "flags": 256,
                "start": 0,
                "end": 88
            },
            "flags": 128,
            "start": 0,
            "end": 89
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 215,
                    "ellipsisToken": {
                        "kind": 524302,
                        "flags": 768,
                        "start": 314,
                        "end": 317
                    },
                    "binding": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 768,
                        "start": 317,
                        "end": 318
                    },
                    "optionalToken": null,
                    "type": null,
                    "initializer": null,
                    "flags": 258,
                    "start": 314,
                    "end": 318
                },
                "flags": 256,
                "start": 89,
                "end": 319
            },
            "flags": 128,
            "start": 89,
            "end": 320
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 768,
                            "start": 322,
                            "end": 323
                        },
                        {
                            "kind": 215,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 768,
                                "start": 324,
                                "end": 328
                            },
                            "binding": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 768,
                                "start": 328,
                                "end": 329
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 258,
                            "start": 324,
                            "end": 329
                        }
                    ],
                    "flags": 256,
                    "start": 320,
                    "end": 330
                },
                "flags": 256,
                "start": 320,
                "end": 330
            },
            "flags": 128,
            "start": 320,
            "end": 331
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 121,
                        "expression": {
                            "kind": 215,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 768,
                                "start": 520,
                                "end": 523
                            },
                            "binding": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 768,
                                "start": 523,
                                "end": 524
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 258,
                            "start": 520,
                            "end": 524
                        },
                        "flags": 256,
                        "start": 519,
                        "end": 525
                    },
                    "flags": 256,
                    "start": 518,
                    "end": 526
                },
                "flags": 256,
                "start": 331,
                "end": 527
            },
            "flags": 128,
            "start": 331,
            "end": 528
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 121,
                        "expression": {
                            "kind": 132,
                            "expressions": [
                                {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 532,
                                    "end": 533
                                },
                                {
                                    "kind": 215,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 768,
                                        "start": 534,
                                        "end": 538
                                    },
                                    "binding": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 768,
                                        "start": 538,
                                        "end": 539
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 258,
                                    "start": 534,
                                    "end": 539
                                }
                            ],
                            "flags": 256,
                            "start": 531,
                            "end": 540
                        },
                        "flags": 256,
                        "start": 531,
                        "end": 540
                    },
                    "flags": 256,
                    "start": 530,
                    "end": 541
                },
                "flags": 256,
                "start": 528,
                "end": 542
            },
            "flags": 128,
            "start": 528,
            "end": 543
        },
        {
            "kind": 120,
            "expression": {
                "kind": 127,
                "operandToken": {
                    "kind": 196635,
                    "flags": 768,
                    "start": 659,
                    "end": 661
                },
                "expression": {
                    "kind": 134299649,
                    "text": 0,
                    "rawText": "0",
                    "flags": 769,
                    "start": 543,
                    "end": 659
                },
                "flags": 256,
                "start": 543,
                "end": 661
            },
            "flags": 128,
            "start": 543,
            "end": 662
        },
        {
            "kind": 120,
            "expression": {
                "kind": 127,
                "operandToken": {
                    "kind": 196636,
                    "flags": 768,
                    "start": 664,
                    "end": 666
                },
                "expression": {
                    "kind": 134299649,
                    "text": 0,
                    "rawText": "0",
                    "flags": 769,
                    "start": 662,
                    "end": 664
                },
                "flags": 256,
                "start": 662,
                "end": 666
            },
            "flags": 128,
            "start": 662,
            "end": 667
        },
        {
            "kind": 120,
            "expression": {
                "kind": 128,
                "operandToken": {
                    "kind": 196635,
                    "flags": 768,
                    "start": 667,
                    "end": 777
                },
                "expression": {
                    "kind": 134299649,
                    "text": 0,
                    "rawText": "0",
                    "flags": 768,
                    "start": 777,
                    "end": 778
                },
                "flags": 256,
                "start": 667,
                "end": 778
            },
            "flags": 128,
            "start": 667,
            "end": 779
        },
        {
            "kind": 120,
            "expression": {
                "kind": 128,
                "operandToken": {
                    "kind": 196636,
                    "flags": 768,
                    "start": 779,
                    "end": 782
                },
                "expression": {
                    "kind": 134299649,
                    "text": 0,
                    "rawText": "0",
                    "flags": 768,
                    "start": 782,
                    "end": 783
                },
                "flags": 256,
                "start": 779,
                "end": 783
            },
            "flags": 128,
            "start": 779,
            "end": 784
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "left": {
                                        "kind": 134299649,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 768,
                                        "start": 1054,
                                        "end": 1056
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 768,
                                        "start": 1052,
                                        "end": 1053
                                    },
                                    "flags": 256,
                                    "start": 1052,
                                    "end": 1056
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 1052,
                            "end": 1056
                        },
                        "flags": 256,
                        "start": 1051,
                        "end": 1057
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 1057,
                        "end": 1059
                    },
                    "right": {
                        "kind": 134299649,
                        "text": 0,
                        "rawText": "0",
                        "flags": 768,
                        "start": 1059,
                        "end": 1061
                    },
                    "flags": 256,
                    "start": 1051,
                    "end": 1061
                },
                "flags": 256,
                "start": 784,
                "end": 1062
            },
            "flags": 128,
            "start": 784,
            "end": 1063
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 768,
                                        "start": 1069,
                                        "end": 1071
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 8448,
                                        "start": 1072,
                                        "end": 1073
                                    },
                                    "type": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "multiline": false,
                                            "flags": 256,
                                            "start": 1074,
                                            "end": 1074
                                        },
                                        "flags": 256,
                                        "start": 1073,
                                        "end": 1075
                                    },
                                    "flags": 8448,
                                    "start": 1071,
                                    "end": 1075
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 1066,
                            "end": 1075
                        },
                        "flags": 256,
                        "start": 1065,
                        "end": 1076
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 1076,
                        "end": 1078
                    },
                    "right": {
                        "kind": 134299649,
                        "text": 0,
                        "rawText": "0",
                        "flags": 768,
                        "start": 1078,
                        "end": 1080
                    },
                    "flags": 256,
                    "start": 1065,
                    "end": 1080
                },
                "flags": 256,
                "start": 1063,
                "end": 1081
            },
            "flags": 128,
            "start": 1063,
            "end": 1082
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 768,
                                        "start": 1088,
                                        "end": 1090
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [
                                            {
                                                "kind": 215,
                                                "ellipsisToken": null,
                                                "binding": {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 768,
                                                    "start": 1091,
                                                    "end": 1092
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "flags": 256,
                                                "start": 1091,
                                                "end": 1092
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 4352,
                                        "start": 1091,
                                        "end": 1093
                                    },
                                    "type": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "multiline": false,
                                            "flags": 256,
                                            "start": 1094,
                                            "end": 1094
                                        },
                                        "flags": 256,
                                        "start": 1093,
                                        "end": 1095
                                    },
                                    "flags": 4352,
                                    "start": 1090,
                                    "end": 1095
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 1085,
                            "end": 1095
                        },
                        "flags": 256,
                        "start": 1084,
                        "end": 1096
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 1096,
                        "end": 1098
                    },
                    "right": {
                        "kind": 134299649,
                        "text": 0,
                        "rawText": "0",
                        "flags": 768,
                        "start": 1098,
                        "end": 1100
                    },
                    "flags": 256,
                    "start": 1084,
                    "end": 1100
                },
                "flags": 256,
                "start": 1082,
                "end": 1101
            },
            "flags": 128,
            "start": 1082,
            "end": 1102
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 768,
                                        "start": 1105,
                                        "end": 1106
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [
                                            {
                                                "kind": 215,
                                                "ellipsisToken": null,
                                                "binding": {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 768,
                                                    "start": 1107,
                                                    "end": 1108
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "flags": 256,
                                                "start": 1107,
                                                "end": 1108
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 256,
                                        "start": 1107,
                                        "end": 1109
                                    },
                                    "type": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "multiline": false,
                                            "flags": 256,
                                            "start": 1110,
                                            "end": 1110
                                        },
                                        "flags": 256,
                                        "start": 1109,
                                        "end": 1111
                                    },
                                    "flags": 256,
                                    "start": 1106,
                                    "end": 1111
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 1105,
                            "end": 1111
                        },
                        "flags": 256,
                        "start": 1104,
                        "end": 1112
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 1112,
                        "end": 1114
                    },
                    "right": {
                        "kind": 134299649,
                        "text": 0,
                        "rawText": "0",
                        "flags": 768,
                        "start": 1114,
                        "end": 1116
                    },
                    "flags": 256,
                    "start": 1104,
                    "end": 1116
                },
                "flags": 256,
                "start": 1102,
                "end": 1117
            },
            "flags": 128,
            "start": 1102,
            "end": 1118
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 134299649,
                                "text": 0,
                                "rawText": "0",
                                "flags": 768,
                                "start": 1120,
                                "end": 1121
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 1120,
                        "end": 1121
                    },
                    "flags": 256,
                    "start": 1118,
                    "end": 1122
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 1122,
                    "end": 1124
                },
                "right": {
                    "kind": 134299649,
                    "text": 0,
                    "rawText": "0",
                    "flags": 768,
                    "start": 1124,
                    "end": 1126
                },
                "flags": 256,
                "start": 1118,
                "end": 1126
            },
            "flags": 128,
            "start": 1118,
            "end": 1127
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 1127,
            "end": 1128
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": 0,
                    "rawText": "0",
                    "flags": 769,
                    "start": 1128,
                    "end": 1313
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 1313,
                    "end": 1315
                },
                "right": {
                    "kind": 134299649,
                    "text": 0,
                    "rawText": "0",
                    "flags": 768,
                    "start": 1315,
                    "end": 1317
                },
                "flags": 256,
                "start": 1128,
                "end": 1317
            },
            "flags": 128,
            "start": 1128,
            "end": 1318
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 1318,
            "end": 1319
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 1426,
                                    "end": 1427
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 1426,
                            "end": 1427
                        },
                        "flags": 256,
                        "start": 1425,
                        "end": 1428
                    },
                    "flags": 256,
                    "start": 1319,
                    "end": 1429
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 1429,
                    "end": 1431
                },
                "right": {
                    "kind": 134299649,
                    "text": 0,
                    "rawText": "0",
                    "flags": 768,
                    "start": 1431,
                    "end": 1433
                },
                "flags": 256,
                "start": 1319,
                "end": 1433
            },
            "flags": 128,
            "start": 1319,
            "end": 1434
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 1434,
            "end": 1435
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 1438,
                                    "end": 1439
                                }
                            ],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 1438,
                            "end": 1439
                        },
                        "flags": 256,
                        "start": 1437,
                        "end": 1440
                    },
                    "flags": 256,
                    "start": 1435,
                    "end": 1441
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 1441,
                    "end": 1443
                },
                "right": {
                    "kind": 134299649,
                    "text": 0,
                    "rawText": "0",
                    "flags": 768,
                    "start": 1443,
                    "end": 1445
                },
                "flags": 256,
                "start": 1435,
                "end": 1445
            },
            "flags": 128,
            "start": 1435,
            "end": 1446
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 1446,
            "end": 1447
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 1450,
                                    "end": 1451
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 1450,
                            "end": 1451
                        },
                        "flags": 256,
                        "start": 1449,
                        "end": 1452
                    },
                    "operatorToken": {
                        "kind": 4130,
                        "flags": 768,
                        "start": 1452,
                        "end": 1455
                    },
                    "right": {
                        "kind": 134299649,
                        "text": 0,
                        "rawText": "0",
                        "flags": 768,
                        "start": 1455,
                        "end": 1457
                    },
                    "flags": 256,
                    "start": 1449,
                    "end": 1457
                },
                "flags": 256,
                "start": 1447,
                "end": 1458
            },
            "flags": 128,
            "start": 1447,
            "end": 1459
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 1459,
            "end": 1460
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 768,
                                "start": 1462,
                                "end": 1463
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 1462,
                        "end": 1463
                    },
                    "flags": 256,
                    "start": 1460,
                    "end": 1464
                },
                "operatorToken": {
                    "kind": 4132,
                    "flags": 768,
                    "start": 1464,
                    "end": 1467
                },
                "right": {
                    "kind": 134299649,
                    "text": 0,
                    "rawText": "0",
                    "flags": 768,
                    "start": 1467,
                    "end": 1469
                },
                "flags": 256,
                "start": 1460,
                "end": 1469
            },
            "flags": 128,
            "start": 1460,
            "end": 1470
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 1470,
            "end": 1471
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": 0,
                    "rawText": "0",
                    "flags": 769,
                    "start": 1471,
                    "end": 1473
                },
                "operatorToken": {
                    "kind": 4133,
                    "flags": 768,
                    "start": 1473,
                    "end": 1476
                },
                "right": {
                    "kind": 134299649,
                    "text": 0,
                    "rawText": "0",
                    "flags": 768,
                    "start": 1476,
                    "end": 1478
                },
                "flags": 256,
                "start": 1471,
                "end": 1478
            },
            "flags": 128,
            "start": 1471,
            "end": 1479
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 1479,
            "end": 1480
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 223,
                                "argument": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 0,
                                                    "rawText": "0",
                                                    "flags": 768,
                                                    "start": 1758,
                                                    "end": 1760
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 768,
                                                    "start": 1756,
                                                    "end": 1757
                                                },
                                                "flags": 256,
                                                "start": 1756,
                                                "end": 1760
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 0,
                                        "start": 1756,
                                        "end": 1760
                                    },
                                    "flags": 256,
                                    "start": 1755,
                                    "end": 1761
                                },
                                "flags": 256,
                                "start": 1752,
                                "end": 1761
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 1752,
                        "end": 1761
                    },
                    "flags": 256,
                    "start": 1480,
                    "end": 1762
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 1762,
                    "end": 1764
                },
                "right": {
                    "kind": 134299649,
                    "text": 0,
                    "rawText": "0",
                    "flags": 768,
                    "start": 1764,
                    "end": 1766
                },
                "flags": 256,
                "start": 1480,
                "end": 1766
            },
            "flags": 128,
            "start": 1480,
            "end": 1767
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 1767,
            "end": 1768
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 223,
                                "argument": {
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [
                                            {
                                                "kind": 134299649,
                                                "text": 0,
                                                "rawText": "0",
                                                "flags": 768,
                                                "start": 1774,
                                                "end": 1775
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 256,
                                        "start": 1774,
                                        "end": 1775
                                    },
                                    "flags": 256,
                                    "start": 1773,
                                    "end": 1776
                                },
                                "flags": 256,
                                "start": 1770,
                                "end": 1776
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 1770,
                        "end": 1776
                    },
                    "flags": 256,
                    "start": 1768,
                    "end": 1777
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 1777,
                    "end": 1779
                },
                "right": {
                    "kind": 134299649,
                    "text": 0,
                    "rawText": "0",
                    "flags": 768,
                    "start": 1779,
                    "end": 1781
                },
                "flags": 256,
                "start": 1768,
                "end": 1781
            },
            "flags": 128,
            "start": 1768,
            "end": 1782
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 1782,
            "end": 1783
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 223,
                                "argument": {
                                    "kind": 134299649,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 768,
                                    "start": 1958,
                                    "end": 1959
                                },
                                "flags": 256,
                                "start": 1955,
                                "end": 1959
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 1955,
                        "end": 1959
                    },
                    "flags": 256,
                    "start": 1783,
                    "end": 1960
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 1960,
                    "end": 1962
                },
                "right": {
                    "kind": 134299649,
                    "text": 0,
                    "rawText": "0",
                    "flags": 768,
                    "start": 1962,
                    "end": 1964
                },
                "flags": 256,
                "start": 1783,
                "end": 1964
            },
            "flags": 128,
            "start": 1783,
            "end": 1965
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 1965,
            "end": 1966
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 223,
                                "argument": {
                                    "kind": 210,
                                    "newKeyword": {
                                        "kind": 138477661,
                                        "flags": 768,
                                        "start": 1971,
                                        "end": 1974
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 768,
                                        "start": 1974,
                                        "end": 1976
                                    },
                                    "argumentList": null,
                                    "flags": 256,
                                    "start": 1971,
                                    "end": 1976
                                },
                                "flags": 256,
                                "start": 1968,
                                "end": 1976
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 1968,
                        "end": 1976
                    },
                    "flags": 256,
                    "start": 1966,
                    "end": 1977
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 1977,
                    "end": 1979
                },
                "right": {
                    "kind": 134299649,
                    "text": 0,
                    "rawText": "0",
                    "flags": 768,
                    "start": 1979,
                    "end": 1981
                },
                "flags": 256,
                "start": 1966,
                "end": 1981
            },
            "flags": 128,
            "start": 1966,
            "end": 1982
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 1982,
            "end": 1983
        },
        {
            "forKeyword": {
                "kind": 37757017,
                "flags": 768,
                "start": 1983,
                "end": 2257
            },
            "kind": 166,
            "initializer": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [
                        {
                            "kind": 219,
                            "left": {
                                "kind": 134299649,
                                "text": 0,
                                "rawText": "0",
                                "flags": 768,
                                "start": 2261,
                                "end": 2263
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 768,
                                "start": 2259,
                                "end": 2260
                            },
                            "flags": 256,
                            "start": 2259,
                            "end": 2263
                        }
                    ],
                    "trailingComma": false,
                    "multiline": false,
                    "flags": 0,
                    "start": 2259,
                    "end": 2263
                },
                "flags": 256,
                "start": 2258,
                "end": 2264
            },
            "expression": {
                "kind": 134299649,
                "text": 0,
                "rawText": "0",
                "flags": 768,
                "start": 2267,
                "end": 2269
            },
            "statement": {
                "kind": 168,
                "flags": 128,
                "start": 2270,
                "end": 2271
            },
            "flags": 128,
            "start": 1983,
            "end": 2271
        },
        {
            "forKeyword": {
                "kind": 37757017,
                "flags": 768,
                "start": 2271,
                "end": 2275
            },
            "kind": 166,
            "initializer": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": 0,
                            "rawText": "0",
                            "flags": 768,
                            "start": 2277,
                            "end": 2278
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 2277,
                    "end": 2278
                },
                "flags": 256,
                "start": 2276,
                "end": 2279
            },
            "expression": {
                "kind": 134299649,
                "text": 0,
                "rawText": "0",
                "flags": 768,
                "start": 2282,
                "end": 2284
            },
            "statement": {
                "kind": 168,
                "flags": 128,
                "start": 2285,
                "end": 2286
            },
            "flags": 128,
            "start": 2271,
            "end": 2286
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 768,
                "start": 2286,
                "end": 2290
            },
            "initializer": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [
                        {
                            "kind": 219,
                            "left": {
                                "kind": 134299649,
                                "text": 0,
                                "rawText": "0",
                                "flags": 768,
                                "start": 2294,
                                "end": 2296
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 768,
                                "start": 2292,
                                "end": 2293
                            },
                            "flags": 256,
                            "start": 2292,
                            "end": 2296
                        }
                    ],
                    "trailingComma": false,
                    "multiline": false,
                    "flags": 0,
                    "start": 2292,
                    "end": 2296
                },
                "flags": 256,
                "start": 2291,
                "end": 2297
            },
            "expression": {
                "kind": 134299649,
                "text": 0,
                "rawText": "0",
                "flags": 768,
                "start": 2300,
                "end": 2302
            },
            "statement": {
                "kind": 168,
                "flags": 128,
                "start": 2303,
                "end": 2304
            },
            "awaitKeyword": null,
            "flags": 128,
            "start": 2286,
            "end": 2304
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 768,
                "start": 2304,
                "end": 2308
            },
            "initializer": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": 0,
                            "rawText": "0",
                            "flags": 768,
                            "start": 2310,
                            "end": 2311
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 2310,
                    "end": 2311
                },
                "flags": 256,
                "start": 2309,
                "end": 2312
            },
            "expression": {
                "kind": 134299649,
                "text": 0,
                "rawText": "0",
                "flags": 768,
                "start": 2315,
                "end": 2317
            },
            "statement": {
                "kind": 168,
                "flags": 128,
                "start": 2318,
                "end": 2319
            },
            "awaitKeyword": null,
            "flags": 128,
            "start": 2304,
            "end": 2319
        },
        {
            "forKeyword": {
                "kind": 37757017,
                "flags": 768,
                "start": 2319,
                "end": 2417
            },
            "kind": 166,
            "initializer": {
                "kind": 134299649,
                "text": 0,
                "rawText": "0",
                "flags": 768,
                "start": 2418,
                "end": 2419
            },
            "expression": {
                "kind": 134299649,
                "text": 0,
                "rawText": "0",
                "flags": 768,
                "start": 2422,
                "end": 2424
            },
            "statement": {
                "kind": 168,
                "flags": 128,
                "start": 2425,
                "end": 2426
            },
            "flags": 128,
            "start": 2319,
            "end": 2426
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 768,
                "start": 2426,
                "end": 2430
            },
            "initializer": {
                "kind": 134299649,
                "text": 0,
                "rawText": "0",
                "flags": 768,
                "start": 2431,
                "end": 2432
            },
            "expression": {
                "kind": 134299649,
                "text": 0,
                "rawText": "0",
                "flags": 768,
                "start": 2435,
                "end": 2437
            },
            "statement": {
                "kind": 168,
                "flags": 128,
                "start": 2438,
                "end": 2439
            },
            "awaitKeyword": null,
            "flags": 128,
            "start": 2426,
            "end": 2439
        },
        {
            "forKeyword": {
                "kind": 37757017,
                "flags": 768,
                "start": 2439,
                "end": 2765
            },
            "kind": 166,
            "initializer": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "left": {
                                    "kind": 134299649,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 768,
                                    "start": 2770,
                                    "end": 2772
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 2768,
                                    "end": 2769
                                },
                                "flags": 256,
                                "start": 2768,
                                "end": 2772
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 2768,
                        "end": 2772
                    },
                    "flags": 256,
                    "start": 2767,
                    "end": 2773
                },
                "flags": 256,
                "start": 2766,
                "end": 2774
            },
            "expression": {
                "kind": 134299649,
                "text": 0,
                "rawText": "0",
                "flags": 768,
                "start": 2777,
                "end": 2779
            },
            "statement": {
                "kind": 168,
                "flags": 128,
                "start": 2780,
                "end": 2781
            },
            "flags": 128,
            "start": 2439,
            "end": 2781
        },
        {
            "forKeyword": {
                "kind": 37757017,
                "flags": 768,
                "start": 2781,
                "end": 2785
            },
            "kind": 166,
            "initializer": {
                "kind": 121,
                "expression": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 134299649,
                                "text": 0,
                                "rawText": "0",
                                "flags": 768,
                                "start": 2788,
                                "end": 2789
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 2788,
                        "end": 2789
                    },
                    "flags": 256,
                    "start": 2787,
                    "end": 2790
                },
                "flags": 256,
                "start": 2786,
                "end": 2791
            },
            "expression": {
                "kind": 134299649,
                "text": 0,
                "rawText": "0",
                "flags": 768,
                "start": 2794,
                "end": 2796
            },
            "statement": {
                "kind": 168,
                "flags": 128,
                "start": 2797,
                "end": 2798
            },
            "flags": 128,
            "start": 2781,
            "end": 2798
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 768,
                "start": 2798,
                "end": 2802
            },
            "initializer": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "left": {
                                    "kind": 134299649,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 768,
                                    "start": 2807,
                                    "end": 2809
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 2805,
                                    "end": 2806
                                },
                                "flags": 256,
                                "start": 2805,
                                "end": 2809
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 2805,
                        "end": 2809
                    },
                    "flags": 256,
                    "start": 2804,
                    "end": 2810
                },
                "flags": 256,
                "start": 2803,
                "end": 2811
            },
            "expression": {
                "kind": 134299649,
                "text": 0,
                "rawText": "0",
                "flags": 768,
                "start": 2814,
                "end": 2816
            },
            "statement": {
                "kind": 168,
                "flags": 128,
                "start": 2817,
                "end": 2818
            },
            "awaitKeyword": null,
            "flags": 128,
            "start": 2798,
            "end": 2818
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 768,
                "start": 2818,
                "end": 2822
            },
            "initializer": {
                "kind": 121,
                "expression": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 134299649,
                                "text": 0,
                                "rawText": "0",
                                "flags": 768,
                                "start": 2825,
                                "end": 2826
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 2825,
                        "end": 2826
                    },
                    "flags": 256,
                    "start": 2824,
                    "end": 2827
                },
                "flags": 256,
                "start": 2823,
                "end": 2828
            },
            "expression": {
                "kind": 134299649,
                "text": 0,
                "rawText": "0",
                "flags": 768,
                "start": 2831,
                "end": 2833
            },
            "statement": {
                "kind": 168,
                "flags": 128,
                "start": 2834,
                "end": 2835
            },
            "awaitKeyword": null,
            "flags": 128,
            "start": 2818,
            "end": 2835
        },
        {
            "forKeyword": {
                "kind": 37757017,
                "flags": 768,
                "start": 2835,
                "end": 2839
            },
            "kind": 166,
            "initializer": {
                "kind": 121,
                "expression": {
                    "kind": 134299649,
                    "text": 0,
                    "rawText": "0",
                    "flags": 768,
                    "start": 2841,
                    "end": 2842
                },
                "flags": 256,
                "start": 2840,
                "end": 2843
            },
            "expression": {
                "kind": 134299649,
                "text": 0,
                "rawText": "0",
                "flags": 768,
                "start": 2846,
                "end": 2848
            },
            "statement": {
                "kind": 168,
                "flags": 128,
                "start": 2849,
                "end": 2850
            },
            "flags": 128,
            "start": 2835,
            "end": 2850
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 768,
                "start": 2850,
                "end": 2854
            },
            "initializer": {
                "kind": 121,
                "expression": {
                    "kind": 134299649,
                    "text": 0,
                    "rawText": "0",
                    "flags": 768,
                    "start": 2856,
                    "end": 2857
                },
                "flags": 256,
                "start": 2855,
                "end": 2858
            },
            "expression": {
                "kind": 134299649,
                "text": 0,
                "rawText": "0",
                "flags": 768,
                "start": 2861,
                "end": 2863
            },
            "statement": {
                "kind": 168,
                "flags": 128,
                "start": 2864,
                "end": 2865
            },
            "awaitKeyword": null,
            "flags": 128,
            "start": 2850,
            "end": 2865
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "u",
                "rawText": "u",
                "flags": 768,
                "start": 2939,
                "end": 2940
            },
            "flags": 128,
            "start": 2939,
            "end": 2940
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": 110000,
                            "rawText": "110000",
                            "flags": 768,
                            "start": 2941,
                            "end": 2947
                        },
                        "flags": 128,
                        "start": 2941,
                        "end": 2947
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 2941,
                "end": 2947
            },
            "flags": 128,
            "start": 2940,
            "end": 2948
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 2948,
            "end": 2949
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "u",
                "rawText": "u",
                "flags": 768,
                "start": 2952,
                "end": 2953
            },
            "flags": 128,
            "start": 2952,
            "end": 2953
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "FFFFFFF",
                            "rawText": "FFFFFFF",
                            "flags": 768,
                            "start": 2954,
                            "end": 2961
                        },
                        "flags": 128,
                        "start": 2954,
                        "end": 2961
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 2954,
                "end": 2961
            },
            "flags": 128,
            "start": 2953,
            "end": 2962
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 2962,
            "end": 2963
        },
        {
            "kind": 120,
            "expression": {
                "kind": 221,
                "text": "/./",
                "flags": 768,
                "start": 2963,
                "end": 3058
            },
            "flags": 128,
            "start": 2963,
            "end": 3058
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "i",
                "rawText": "FFFFFFF",
                "flags": 768,
                "start": 3059,
                "end": 3065
            },
            "flags": 128,
            "start": 3059,
            "end": 3066
        },
        {
            "kind": 120,
            "expression": {
                "kind": 221,
                "text": "/./",
                "flags": 768,
                "start": 3066,
                "end": 3070
            },
            "flags": 128,
            "start": 3066,
            "end": 3070
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "i",
                "rawText": "FFFFFFF",
                "flags": 768,
                "start": 3071,
                "end": 3077
            },
            "flags": 128,
            "start": 3071,
            "end": 3078
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 3165,
                                    "end": 3167
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 3168,
                                    "end": 3169
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 225,
                                                        "superKeyword": {
                                                            "kind": 4259935,
                                                            "flags": 768,
                                                            "start": 3170,
                                                            "end": 3176
                                                        },
                                                        "flags": 768,
                                                        "start": 3170,
                                                        "end": 3176
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [],
                                                        "trailingComma": false,
                                                        "flags": 256,
                                                        "start": 3177,
                                                        "end": 3177
                                                    },
                                                    "flags": 256,
                                                    "start": 3170,
                                                    "end": 3178
                                                },
                                                "flags": 128,
                                                "start": 3170,
                                                "end": 3179
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 3170,
                                        "end": 3179
                                    },
                                    "flags": 256,
                                    "start": 3169,
                                    "end": 3181
                                },
                                "flags": 256,
                                "start": 3167,
                                "end": 3181
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 3165,
                        "end": 3181
                    },
                    "flags": 256,
                    "start": 3164,
                    "end": 3183
                },
                "flags": 256,
                "start": 3078,
                "end": 3184
            },
            "flags": 128,
            "start": 3078,
            "end": 3185
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 3188,
                                    "end": 3190
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 3191,
                                    "end": 3192
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 249,
                                                "block": {
                                                    "kind": 124,
                                                    "statements": [
                                                        {
                                                            "kind": 249,
                                                            "block": {
                                                                "kind": 124,
                                                                "statements": [
                                                                    {
                                                                        "kind": 164,
                                                                        "ifKeyword": {
                                                                            "kind": 37757019,
                                                                            "flags": 768,
                                                                            "start": 3196,
                                                                            "end": 3199
                                                                        },
                                                                        "expression": {
                                                                            "kind": 134299649,
                                                                            "text": 0,
                                                                            "rawText": "0",
                                                                            "flags": 768,
                                                                            "start": 3200,
                                                                            "end": 3201
                                                                        },
                                                                        "consequent": {
                                                                            "kind": 120,
                                                                            "expression": {
                                                                                "kind": 121,
                                                                                "expression": {
                                                                                    "kind": 121,
                                                                                    "expression": {
                                                                                        "kind": 131,
                                                                                        "expression": {
                                                                                            "kind": 225,
                                                                                            "superKeyword": {
                                                                                                "kind": 4259935,
                                                                                                "flags": 768,
                                                                                                "start": 3205,
                                                                                                "end": 3211
                                                                                            },
                                                                                            "flags": 768,
                                                                                            "start": 3205,
                                                                                            "end": 3211
                                                                                        },
                                                                                        "argumentList": {
                                                                                            "kind": 256,
                                                                                            "elements": [],
                                                                                            "trailingComma": false,
                                                                                            "flags": 256,
                                                                                            "start": 3212,
                                                                                            "end": 3212
                                                                                        },
                                                                                        "flags": 256,
                                                                                        "start": 3205,
                                                                                        "end": 3213
                                                                                    },
                                                                                    "flags": 256,
                                                                                    "start": 3204,
                                                                                    "end": 3215
                                                                                },
                                                                                "flags": 256,
                                                                                "start": 3202,
                                                                                "end": 3216
                                                                            },
                                                                            "flags": 128,
                                                                            "start": 3202,
                                                                            "end": 3217
                                                                        },
                                                                        "elseKeyword": null,
                                                                        "alternate": null,
                                                                        "flags": 128,
                                                                        "start": 3196,
                                                                        "end": 3217
                                                                    }
                                                                ],
                                                                "multiLine": false,
                                                                "flags": 128,
                                                                "start": 3196,
                                                                "end": 3217
                                                            },
                                                            "flags": 128,
                                                            "start": 3195,
                                                            "end": 3219
                                                        }
                                                    ],
                                                    "multiLine": false,
                                                    "flags": 128,
                                                    "start": 3195,
                                                    "end": 3219
                                                },
                                                "flags": 128,
                                                "start": 3193,
                                                "end": 3220
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 3193,
                                        "end": 3220
                                    },
                                    "flags": 256,
                                    "start": 3192,
                                    "end": 3222
                                },
                                "flags": 256,
                                "start": 3190,
                                "end": 3222
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 3188,
                        "end": 3222
                    },
                    "flags": 256,
                    "start": 3187,
                    "end": 3224
                },
                "flags": 256,
                "start": 3185,
                "end": 3225
            },
            "flags": 128,
            "start": 3185,
            "end": 3226
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 768,
                "start": 3226,
                "end": 3232
            },
            "name": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 768,
                "start": 3232,
                "end": 3234
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 279,
                "extendsToken": {
                    "kind": 4194391,
                    "flags": 768,
                    "start": 3234,
                    "end": 3242
                },
                "expression": {
                    "kind": 134299649,
                    "text": "B",
                    "rawText": "B",
                    "flags": 768,
                    "start": 3242,
                    "end": 3244
                },
                "typeParameter": null,
                "flags": 128,
                "start": 3242,
                "end": 3244
            },
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 278,
                        "declareToken": null,
                        "decorators": null,
                        "staticKeyword": null,
                        "asyncKeyword": null,
                        "setKeyword": null,
                        "getKeyword": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 134299649,
                                "text": "constructor",
                                "rawText": "constructor",
                                "flags": 768,
                                "start": 3246,
                                "end": 3258
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 3259,
                                "end": 3260
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 126,
                                                "operandToken": {
                                                    "kind": 65584,
                                                    "flags": 768,
                                                    "start": 3262,
                                                    "end": 3264
                                                },
                                                "expression": {
                                                    "kind": 220,
                                                    "propertyList": {
                                                        "kind": 218,
                                                        "properties": [
                                                            {
                                                                "kind": 209,
                                                                "name": {
                                                                    "kind": 134299649,
                                                                    "text": "constructor",
                                                                    "rawText": "constructor",
                                                                    "flags": 768,
                                                                    "start": 3265,
                                                                    "end": 3276
                                                                },
                                                                "typeParameters": null,
                                                                "formalParameters": {
                                                                    "kind": 214,
                                                                    "formalParameterList": [],
                                                                    "trailingComma": false,
                                                                    "flags": 256,
                                                                    "start": 3277,
                                                                    "end": 3278
                                                                },
                                                                "type": null,
                                                                "contents": {
                                                                    "kind": 216,
                                                                    "functionStatementList": {
                                                                        "kind": 217,
                                                                        "directives": [],
                                                                        "statements": [
                                                                            {
                                                                                "kind": 120,
                                                                                "expression": {
                                                                                    "kind": 131,
                                                                                    "expression": {
                                                                                        "kind": 225,
                                                                                        "superKeyword": {
                                                                                            "kind": 4259935,
                                                                                            "flags": 768,
                                                                                            "start": 3280,
                                                                                            "end": 3286
                                                                                        },
                                                                                        "flags": 768,
                                                                                        "start": 3280,
                                                                                        "end": 3286
                                                                                    },
                                                                                    "argumentList": {
                                                                                        "kind": 256,
                                                                                        "elements": [],
                                                                                        "trailingComma": false,
                                                                                        "flags": 256,
                                                                                        "start": 3287,
                                                                                        "end": 3287
                                                                                    },
                                                                                    "flags": 256,
                                                                                    "start": 3280,
                                                                                    "end": 3288
                                                                                },
                                                                                "flags": 128,
                                                                                "start": 3280,
                                                                                "end": 3289
                                                                            }
                                                                        ],
                                                                        "multiline": false,
                                                                        "flags": 256,
                                                                        "start": 3280,
                                                                        "end": 3289
                                                                    },
                                                                    "flags": 256,
                                                                    "start": 3278,
                                                                    "end": 3291
                                                                },
                                                                "flags": 256,
                                                                "start": 3276,
                                                                "end": 3291
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "multiline": false,
                                                        "flags": 0,
                                                        "start": 3265,
                                                        "end": 3291
                                                    },
                                                    "flags": 256,
                                                    "start": 3264,
                                                    "end": 3292
                                                },
                                                "flags": 256,
                                                "start": 3262,
                                                "end": 3292
                                            },
                                            "flags": 128,
                                            "start": 3262,
                                            "end": 3293
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 3262,
                                    "end": 3293
                                },
                                "flags": 256,
                                "start": 3260,
                                "end": 3295
                            },
                            "flags": 0,
                            "start": 3258,
                            "end": 3295
                        },
                        "flags": 256,
                        "start": 3246,
                        "end": 3295
                    }
                ],
                "flags": 256,
                "start": 3246,
                "end": 3297
            },
            "flags": 128,
            "start": 3226,
            "end": 3297
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 768,
                "start": 3297,
                "end": 3303
            },
            "name": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 768,
                "start": 3303,
                "end": 3305
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 279,
                "extendsToken": {
                    "kind": 4194391,
                    "flags": 768,
                    "start": 3305,
                    "end": 3313
                },
                "expression": {
                    "kind": 134299649,
                    "text": "B",
                    "rawText": "B",
                    "flags": 768,
                    "start": 3313,
                    "end": 3315
                },
                "typeParameter": null,
                "flags": 128,
                "start": 3313,
                "end": 3315
            },
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 278,
                        "declareToken": null,
                        "decorators": null,
                        "staticKeyword": null,
                        "asyncKeyword": null,
                        "setKeyword": null,
                        "getKeyword": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 134299649,
                                "text": "constructor",
                                "rawText": "constructor",
                                "flags": 768,
                                "start": 3317,
                                "end": 3329
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 3330,
                                "end": 3331
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 126,
                                                "operandToken": {
                                                    "kind": 65584,
                                                    "flags": 768,
                                                    "start": 3333,
                                                    "end": 3335
                                                },
                                                "expression": {
                                                    "kind": 220,
                                                    "propertyList": {
                                                        "kind": 218,
                                                        "properties": [
                                                            {
                                                                "kind": 209,
                                                                "name": {
                                                                    "kind": 134299649,
                                                                    "text": "constructor",
                                                                    "rawText": "constructor",
                                                                    "flags": 768,
                                                                    "start": 3337,
                                                                    "end": 3348
                                                                },
                                                                "typeParameters": null,
                                                                "formalParameters": {
                                                                    "kind": 214,
                                                                    "formalParameterList": [],
                                                                    "trailingComma": false,
                                                                    "flags": 1280,
                                                                    "start": 3349,
                                                                    "end": 3350
                                                                },
                                                                "type": null,
                                                                "contents": {
                                                                    "kind": 216,
                                                                    "functionStatementList": {
                                                                        "kind": 217,
                                                                        "directives": [],
                                                                        "statements": [
                                                                            {
                                                                                "kind": 120,
                                                                                "expression": {
                                                                                    "kind": 131,
                                                                                    "expression": {
                                                                                        "kind": 225,
                                                                                        "superKeyword": {
                                                                                            "kind": 4259935,
                                                                                            "flags": 768,
                                                                                            "start": 3352,
                                                                                            "end": 3358
                                                                                        },
                                                                                        "flags": 768,
                                                                                        "start": 3352,
                                                                                        "end": 3358
                                                                                    },
                                                                                    "argumentList": {
                                                                                        "kind": 256,
                                                                                        "elements": [],
                                                                                        "trailingComma": false,
                                                                                        "flags": 256,
                                                                                        "start": 3359,
                                                                                        "end": 3359
                                                                                    },
                                                                                    "flags": 256,
                                                                                    "start": 3352,
                                                                                    "end": 3360
                                                                                },
                                                                                "flags": 128,
                                                                                "start": 3352,
                                                                                "end": 3361
                                                                            }
                                                                        ],
                                                                        "multiline": false,
                                                                        "flags": 256,
                                                                        "start": 3352,
                                                                        "end": 3361
                                                                    },
                                                                    "flags": 256,
                                                                    "start": 3350,
                                                                    "end": 3363
                                                                },
                                                                "flags": 1280,
                                                                "start": 3348,
                                                                "end": 3363
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "multiline": false,
                                                        "flags": 0,
                                                        "start": 3336,
                                                        "end": 3363
                                                    },
                                                    "flags": 256,
                                                    "start": 3335,
                                                    "end": 3364
                                                },
                                                "flags": 256,
                                                "start": 3333,
                                                "end": 3364
                                            },
                                            "flags": 128,
                                            "start": 3333,
                                            "end": 3365
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 3333,
                                    "end": 3365
                                },
                                "flags": 256,
                                "start": 3331,
                                "end": 3367
                            },
                            "flags": 0,
                            "start": 3329,
                            "end": 3367
                        },
                        "flags": 256,
                        "start": 3317,
                        "end": 3367
                    }
                ],
                "flags": 256,
                "start": 3317,
                "end": 3369
            },
            "flags": 128,
            "start": 3297,
            "end": 3369
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 768,
                "start": 3369,
                "end": 3375
            },
            "name": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 768,
                "start": 3375,
                "end": 3377
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 279,
                "extendsToken": {
                    "kind": 4194391,
                    "flags": 768,
                    "start": 3377,
                    "end": 3385
                },
                "expression": {
                    "kind": 134299649,
                    "text": "B",
                    "rawText": "B",
                    "flags": 768,
                    "start": 3385,
                    "end": 3387
                },
                "typeParameter": null,
                "flags": 128,
                "start": 3385,
                "end": 3387
            },
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 278,
                        "declareToken": null,
                        "decorators": null,
                        "staticKeyword": null,
                        "asyncKeyword": null,
                        "setKeyword": null,
                        "getKeyword": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 134299649,
                                "text": "constructor",
                                "rawText": "constructor",
                                "flags": 768,
                                "start": 3389,
                                "end": 3401
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 3402,
                                "end": 3403
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 126,
                                                "operandToken": {
                                                    "kind": 65584,
                                                    "flags": 768,
                                                    "start": 3405,
                                                    "end": 3407
                                                },
                                                "expression": {
                                                    "kind": 220,
                                                    "propertyList": {
                                                        "kind": 218,
                                                        "properties": [
                                                            {
                                                                "kind": 209,
                                                                "name": {
                                                                    "kind": 134299649,
                                                                    "text": "constructor",
                                                                    "rawText": "constructor",
                                                                    "flags": 768,
                                                                    "start": 3411,
                                                                    "end": 3423
                                                                },
                                                                "typeParameters": null,
                                                                "formalParameters": {
                                                                    "kind": 214,
                                                                    "formalParameterList": [],
                                                                    "trailingComma": false,
                                                                    "flags": 8448,
                                                                    "start": 3424,
                                                                    "end": 3425
                                                                },
                                                                "type": null,
                                                                "contents": {
                                                                    "kind": 216,
                                                                    "functionStatementList": {
                                                                        "kind": 217,
                                                                        "directives": [],
                                                                        "statements": [
                                                                            {
                                                                                "kind": 120,
                                                                                "expression": {
                                                                                    "kind": 131,
                                                                                    "expression": {
                                                                                        "kind": 225,
                                                                                        "superKeyword": {
                                                                                            "kind": 4259935,
                                                                                            "flags": 768,
                                                                                            "start": 3427,
                                                                                            "end": 3433
                                                                                        },
                                                                                        "flags": 768,
                                                                                        "start": 3427,
                                                                                        "end": 3433
                                                                                    },
                                                                                    "argumentList": {
                                                                                        "kind": 256,
                                                                                        "elements": [],
                                                                                        "trailingComma": false,
                                                                                        "flags": 256,
                                                                                        "start": 3434,
                                                                                        "end": 3434
                                                                                    },
                                                                                    "flags": 256,
                                                                                    "start": 3427,
                                                                                    "end": 3435
                                                                                },
                                                                                "flags": 128,
                                                                                "start": 3427,
                                                                                "end": 3436
                                                                            }
                                                                        ],
                                                                        "multiline": false,
                                                                        "flags": 256,
                                                                        "start": 3427,
                                                                        "end": 3436
                                                                    },
                                                                    "flags": 256,
                                                                    "start": 3425,
                                                                    "end": 3438
                                                                },
                                                                "flags": 8448,
                                                                "start": 3423,
                                                                "end": 3438
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "multiline": false,
                                                        "flags": 0,
                                                        "start": 3408,
                                                        "end": 3438
                                                    },
                                                    "flags": 256,
                                                    "start": 3407,
                                                    "end": 3439
                                                },
                                                "flags": 256,
                                                "start": 3405,
                                                "end": 3439
                                            },
                                            "flags": 128,
                                            "start": 3405,
                                            "end": 3440
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 3405,
                                    "end": 3440
                                },
                                "flags": 256,
                                "start": 3403,
                                "end": 3442
                            },
                            "flags": 0,
                            "start": 3401,
                            "end": 3442
                        },
                        "flags": 256,
                        "start": 3389,
                        "end": 3442
                    }
                ],
                "flags": 256,
                "start": 3389,
                "end": 3444
            },
            "flags": 128,
            "start": 3369,
            "end": 3444
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 768,
                "start": 3444,
                "end": 3450
            },
            "name": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 768,
                "start": 3450,
                "end": 3452
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 279,
                "extendsToken": {
                    "kind": 4194391,
                    "flags": 768,
                    "start": 3452,
                    "end": 3460
                },
                "expression": {
                    "kind": 134299649,
                    "text": "B",
                    "rawText": "B",
                    "flags": 768,
                    "start": 3460,
                    "end": 3462
                },
                "typeParameter": null,
                "flags": 128,
                "start": 3460,
                "end": 3462
            },
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 278,
                        "declareToken": null,
                        "decorators": null,
                        "staticKeyword": null,
                        "asyncKeyword": null,
                        "setKeyword": null,
                        "getKeyword": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 134299649,
                                "text": "constructor",
                                "rawText": "constructor",
                                "flags": 768,
                                "start": 3464,
                                "end": 3476
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 3477,
                                "end": 3478
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 126,
                                                "operandToken": {
                                                    "kind": 65584,
                                                    "flags": 768,
                                                    "start": 3480,
                                                    "end": 3482
                                                },
                                                "expression": {
                                                    "kind": 220,
                                                    "propertyList": {
                                                        "kind": 218,
                                                        "properties": [
                                                            {
                                                                "kind": 209,
                                                                "name": {
                                                                    "kind": 134299649,
                                                                    "text": "constructor",
                                                                    "rawText": "constructor",
                                                                    "flags": 768,
                                                                    "start": 3486,
                                                                    "end": 3498
                                                                },
                                                                "typeParameters": null,
                                                                "formalParameters": {
                                                                    "kind": 214,
                                                                    "formalParameterList": [
                                                                        {
                                                                            "kind": 215,
                                                                            "ellipsisToken": null,
                                                                            "binding": {
                                                                                "kind": 134299649,
                                                                                "text": "a",
                                                                                "rawText": "a",
                                                                                "flags": 768,
                                                                                "start": 3499,
                                                                                "end": 3500
                                                                            },
                                                                            "optionalToken": null,
                                                                            "type": null,
                                                                            "initializer": null,
                                                                            "flags": 256,
                                                                            "start": 3499,
                                                                            "end": 3500
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 4352,
                                                                    "start": 3499,
                                                                    "end": 3501
                                                                },
                                                                "type": null,
                                                                "contents": {
                                                                    "kind": 216,
                                                                    "functionStatementList": {
                                                                        "kind": 217,
                                                                        "directives": [],
                                                                        "statements": [
                                                                            {
                                                                                "kind": 120,
                                                                                "expression": {
                                                                                    "kind": 131,
                                                                                    "expression": {
                                                                                        "kind": 225,
                                                                                        "superKeyword": {
                                                                                            "kind": 4259935,
                                                                                            "flags": 768,
                                                                                            "start": 3503,
                                                                                            "end": 3509
                                                                                        },
                                                                                        "flags": 768,
                                                                                        "start": 3503,
                                                                                        "end": 3509
                                                                                    },
                                                                                    "argumentList": {
                                                                                        "kind": 256,
                                                                                        "elements": [],
                                                                                        "trailingComma": false,
                                                                                        "flags": 256,
                                                                                        "start": 3510,
                                                                                        "end": 3510
                                                                                    },
                                                                                    "flags": 256,
                                                                                    "start": 3503,
                                                                                    "end": 3511
                                                                                },
                                                                                "flags": 128,
                                                                                "start": 3503,
                                                                                "end": 3512
                                                                            }
                                                                        ],
                                                                        "multiline": false,
                                                                        "flags": 256,
                                                                        "start": 3503,
                                                                        "end": 3512
                                                                    },
                                                                    "flags": 256,
                                                                    "start": 3501,
                                                                    "end": 3514
                                                                },
                                                                "flags": 4352,
                                                                "start": 3498,
                                                                "end": 3514
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "multiline": false,
                                                        "flags": 0,
                                                        "start": 3483,
                                                        "end": 3514
                                                    },
                                                    "flags": 256,
                                                    "start": 3482,
                                                    "end": 3515
                                                },
                                                "flags": 256,
                                                "start": 3480,
                                                "end": 3515
                                            },
                                            "flags": 128,
                                            "start": 3480,
                                            "end": 3516
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 3480,
                                    "end": 3516
                                },
                                "flags": 256,
                                "start": 3478,
                                "end": 3518
                            },
                            "flags": 0,
                            "start": 3476,
                            "end": 3518
                        },
                        "flags": 256,
                        "start": 3464,
                        "end": 3518
                    }
                ],
                "flags": 256,
                "start": 3464,
                "end": 3520
            },
            "flags": 128,
            "start": 3444,
            "end": 3520
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 3719,
            "end": 3720
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 3727,
            "end": 3728
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 768,
                "start": 3728,
                "end": 3959
            },
            "flags": 128,
            "start": 3728,
            "end": 3959
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 3966,
            "end": 3967
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 768,
                "start": 3967,
                "end": 3969
            },
            "flags": 128,
            "start": 3967,
            "end": 3969
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 3975,
            "end": 3976
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 201392131,
                    "text": "\\u{110000}",
                    "rawText": "\\u{110000}",
                    "flags": 768,
                    "start": 4049,
                    "end": 4062
                },
                "flags": 256,
                "start": 3976,
                "end": 4063
            },
            "flags": 128,
            "start": 3976,
            "end": 4064
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 201392131,
                    "text": "\\u{FFFFFFF}",
                    "rawText": "\\u{FFFFFFF}",
                    "flags": 768,
                    "start": 4066,
                    "end": 4080
                },
                "flags": 256,
                "start": 4064,
                "end": 4081
            },
            "flags": 128,
            "start": 4064,
            "end": 4082
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "use strict",
                "flags": 769,
                "start": 4082,
                "end": 4199
            },
            "flags": 128,
            "start": 4082,
            "end": 4200
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 134299649,
                                    "text": "eval",
                                    "rawText": "eval",
                                    "flags": 768,
                                    "start": 4203,
                                    "end": 4207
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 4203,
                            "end": 4207
                        },
                        "flags": 256,
                        "start": 4202,
                        "end": 4208
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 4208,
                        "end": 4210
                    },
                    "right": {
                        "kind": 134299649,
                        "text": 0,
                        "rawText": "0",
                        "flags": 768,
                        "start": 4210,
                        "end": 4212
                    },
                    "flags": 256,
                    "start": 4202,
                    "end": 4212
                },
                "flags": 256,
                "start": 4200,
                "end": 4213
            },
            "flags": 128,
            "start": 4200,
            "end": 4214
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "use strict",
                "flags": 769,
                "start": 4214,
                "end": 4227
            },
            "flags": 128,
            "start": 4214,
            "end": 4228
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 205,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "eval",
                                        "rawText": "eval",
                                        "flags": 768,
                                        "start": 4231,
                                        "end": 4235
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 768,
                                        "start": 4237,
                                        "end": 4239
                                    },
                                    "flags": 256,
                                    "start": 4231,
                                    "end": 4239
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 4231,
                            "end": 4239
                        },
                        "flags": 256,
                        "start": 4230,
                        "end": 4240
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 4240,
                        "end": 4242
                    },
                    "right": {
                        "kind": 134299649,
                        "text": 0,
                        "rawText": "0",
                        "flags": 768,
                        "start": 4242,
                        "end": 4244
                    },
                    "flags": 256,
                    "start": 4230,
                    "end": 4244
                },
                "flags": 256,
                "start": 4228,
                "end": 4245
            },
            "flags": 128,
            "start": 4228,
            "end": 4246
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "use strict",
                "flags": 769,
                "start": 4246,
                "end": 4259
            },
            "flags": 128,
            "start": 4246,
            "end": 4260
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 134299649,
                                    "text": "arguments",
                                    "rawText": "arguments",
                                    "flags": 768,
                                    "start": 4263,
                                    "end": 4272
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 4263,
                            "end": 4272
                        },
                        "flags": 256,
                        "start": 4262,
                        "end": 4273
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 4273,
                        "end": 4275
                    },
                    "right": {
                        "kind": 134299649,
                        "text": 0,
                        "rawText": "0",
                        "flags": 768,
                        "start": 4275,
                        "end": 4277
                    },
                    "flags": 256,
                    "start": 4262,
                    "end": 4277
                },
                "flags": 256,
                "start": 4260,
                "end": 4278
            },
            "flags": 128,
            "start": 4260,
            "end": 4279
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "use strict",
                "flags": 769,
                "start": 4279,
                "end": 4292
            },
            "flags": 128,
            "start": 4279,
            "end": 4293
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 205,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "arguments",
                                        "rawText": "arguments",
                                        "flags": 768,
                                        "start": 4296,
                                        "end": 4305
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 768,
                                        "start": 4307,
                                        "end": 4309
                                    },
                                    "flags": 256,
                                    "start": 4296,
                                    "end": 4309
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 4296,
                            "end": 4309
                        },
                        "flags": 256,
                        "start": 4295,
                        "end": 4310
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 4310,
                        "end": 4312
                    },
                    "right": {
                        "kind": 134299649,
                        "text": 0,
                        "rawText": "0",
                        "flags": 768,
                        "start": 4312,
                        "end": 4314
                    },
                    "flags": 256,
                    "start": 4295,
                    "end": 4314
                },
                "flags": 256,
                "start": 4293,
                "end": 4315
            },
            "flags": 128,
            "start": 4293,
            "end": 4316
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 768,
                "start": 4316,
                "end": 4443
            },
            "expression": {
                "kind": 134299649,
                "text": 0,
                "rawText": "0",
                "flags": 768,
                "start": 4444,
                "end": 4445
            },
            "consequent": {
                "kind": 163,
                "label": {
                    "kind": 134299649,
                    "text": "label",
                    "rawText": "label",
                    "flags": 768,
                    "start": 4446,
                    "end": 4452
                },
                "statement": {
                    "kind": 176,
                    "declareKeyword": null,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 768,
                        "start": 4453,
                        "end": 4462
                    },
                    "generatorToken": null,
                    "name": {
                        "kind": 134299649,
                        "text": "f",
                        "rawText": "f",
                        "flags": 768,
                        "start": 4462,
                        "end": 4464
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 4464,
                        "end": 4466
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "multiline": false,
                            "flags": 256,
                            "start": 4467,
                            "end": 4467
                        },
                        "flags": 256,
                        "start": 4466,
                        "end": 4468
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 128,
                    "start": 4453,
                    "end": 4468
                },
                "flags": 128,
                "start": 4446,
                "end": 4468
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 128,
            "start": 4316,
            "end": 4468
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 768,
                "start": 4468,
                "end": 4471
            },
            "expression": {
                "kind": 134299649,
                "text": 0,
                "rawText": "0",
                "flags": 768,
                "start": 4472,
                "end": 4473
            },
            "consequent": {
                "kind": 163,
                "label": {
                    "kind": 134299649,
                    "text": "labelA",
                    "rawText": "labelA",
                    "flags": 768,
                    "start": 4474,
                    "end": 4481
                },
                "statement": {
                    "kind": 163,
                    "label": {
                        "kind": 134299649,
                        "text": "labelB",
                        "rawText": "labelB",
                        "flags": 768,
                        "start": 4482,
                        "end": 4489
                    },
                    "statement": {
                        "kind": 176,
                        "declareKeyword": null,
                        "asyncKeyword": null,
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 768,
                            "start": 4490,
                            "end": 4499
                        },
                        "generatorToken": null,
                        "name": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 768,
                            "start": 4499,
                            "end": 4501
                        },
                        "formalParameters": {
                            "kind": 214,
                            "formalParameterList": [],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 4501,
                            "end": 4503
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "multiline": false,
                                "flags": 256,
                                "start": 4504,
                                "end": 4504
                            },
                            "flags": 256,
                            "start": 4503,
                            "end": 4505
                        },
                        "typeParameters": null,
                        "returnType": null,
                        "flags": 128,
                        "start": 4490,
                        "end": 4505
                    },
                    "flags": 128,
                    "start": 4482,
                    "end": 4505
                },
                "flags": 128,
                "start": 4474,
                "end": 4505
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 128,
            "start": 4468,
            "end": 4505
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 768,
                "start": 4505,
                "end": 4508
            },
            "expression": {
                "kind": 134299649,
                "text": 0,
                "rawText": "0",
                "flags": 768,
                "start": 4509,
                "end": 4510
            },
            "consequent": {
                "kind": 163,
                "label": {
                    "kind": 134299649,
                    "text": "label",
                    "rawText": "label",
                    "flags": 768,
                    "start": 4511,
                    "end": 4517
                },
                "statement": {
                    "kind": 176,
                    "declareKeyword": null,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 768,
                        "start": 4518,
                        "end": 4527
                    },
                    "generatorToken": null,
                    "name": {
                        "kind": 134299649,
                        "text": "f",
                        "rawText": "f",
                        "flags": 768,
                        "start": 4527,
                        "end": 4529
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 4529,
                        "end": 4531
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "multiline": false,
                            "flags": 256,
                            "start": 4532,
                            "end": 4532
                        },
                        "flags": 256,
                        "start": 4531,
                        "end": 4533
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 128,
                    "start": 4518,
                    "end": 4533
                },
                "flags": 128,
                "start": 4511,
                "end": 4533
            },
            "elseKeyword": {
                "kind": 4194389,
                "flags": 768,
                "start": 4533,
                "end": 4538
            },
            "alternate": {
                "kind": 168,
                "flags": 128,
                "start": 4538,
                "end": 4540
            },
            "flags": 128,
            "start": 4505,
            "end": 4540
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 768,
                "start": 4540,
                "end": 4543
            },
            "expression": {
                "kind": 134299649,
                "text": 0,
                "rawText": "0",
                "flags": 768,
                "start": 4544,
                "end": 4545
            },
            "consequent": {
                "kind": 168,
                "flags": 128,
                "start": 4546,
                "end": 4548
            },
            "elseKeyword": {
                "kind": 4194389,
                "flags": 768,
                "start": 4548,
                "end": 4553
            },
            "alternate": {
                "kind": 163,
                "label": {
                    "kind": 134299649,
                    "text": "label",
                    "rawText": "label",
                    "flags": 768,
                    "start": 4553,
                    "end": 4559
                },
                "statement": {
                    "kind": 176,
                    "declareKeyword": null,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 768,
                        "start": 4560,
                        "end": 4569
                    },
                    "generatorToken": null,
                    "name": {
                        "kind": 134299649,
                        "text": "f",
                        "rawText": "f",
                        "flags": 768,
                        "start": 4569,
                        "end": 4571
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 4571,
                        "end": 4573
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "multiline": false,
                            "flags": 256,
                            "start": 4574,
                            "end": 4574
                        },
                        "flags": 256,
                        "start": 4573,
                        "end": 4575
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 128,
                    "start": 4560,
                    "end": 4575
                },
                "flags": 128,
                "start": 4553,
                "end": 4575
            },
            "flags": 128,
            "start": 4540,
            "end": 4575
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 4575,
                "end": 4672
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 768,
                "start": 4672,
                "end": 4673
            },
            "name": {
                "kind": 134299649,
                "text": "g",
                "rawText": "g",
                "flags": 768,
                "start": 4673,
                "end": 4675
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 4675,
                "end": 4677
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 271,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 768,
                                    "start": 4690,
                                    "end": 4693
                                },
                                "typeParameters": null,
                                "parameters": [
                                    {
                                        "kind": 125,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 768,
                                            "start": 4680,
                                            "end": 4681
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 768,
                                            "start": 4681,
                                            "end": 4683
                                        },
                                        "right": {
                                            "kind": 229,
                                            "yieldKeyword": {
                                                "kind": 8454253,
                                                "flags": 768,
                                                "start": 4683,
                                                "end": 4689
                                            },
                                            "delegate": false,
                                            "asteriskToken": null,
                                            "expression": null,
                                            "flags": 256,
                                            "start": 4683,
                                            "end": 4689
                                        },
                                        "flags": 256,
                                        "start": 4678,
                                        "end": 4689
                                    }
                                ],
                                "asyncToken": null,
                                "returnType": null,
                                "contents": {
                                    "kind": 134299649,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 768,
                                    "start": 4693,
                                    "end": 4695
                                },
                                "flags": 256,
                                "start": 4678,
                                "end": 4695
                            },
                            "flags": 128,
                            "start": 4678,
                            "end": 4696
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 4678,
                    "end": 4696
                },
                "flags": 256,
                "start": 4677,
                "end": 4698
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 2176,
            "start": 4575,
            "end": 4698
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 4698,
            "end": 4699
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 4699,
                "end": 4708
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 768,
                "start": 4708,
                "end": 4709
            },
            "name": {
                "kind": 134299649,
                "text": "g",
                "rawText": "g",
                "flags": 768,
                "start": 4709,
                "end": 4711
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 4711,
                "end": 4713
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 271,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 768,
                                    "start": 4728,
                                    "end": 4731
                                },
                                "typeParameters": null,
                                "parameters": [
                                    {
                                        "kind": 125,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 768,
                                            "start": 4716,
                                            "end": 4717
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 768,
                                            "start": 4717,
                                            "end": 4719
                                        },
                                        "right": {
                                            "kind": 229,
                                            "yieldKeyword": {
                                                "kind": 8454253,
                                                "flags": 768,
                                                "start": 4719,
                                                "end": 4725
                                            },
                                            "delegate": false,
                                            "asteriskToken": null,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 768,
                                                "start": 4725,
                                                "end": 4727
                                            },
                                            "flags": 256,
                                            "start": 4719,
                                            "end": 4727
                                        },
                                        "flags": 256,
                                        "start": 4714,
                                        "end": 4727
                                    }
                                ],
                                "asyncToken": null,
                                "returnType": null,
                                "contents": {
                                    "kind": 134299649,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 768,
                                    "start": 4731,
                                    "end": 4733
                                },
                                "flags": 256,
                                "start": 4714,
                                "end": 4733
                            },
                            "flags": 128,
                            "start": 4714,
                            "end": 4734
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 4714,
                    "end": 4734
                },
                "flags": 256,
                "start": 4713,
                "end": 4736
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 2176,
            "start": 4699,
            "end": 4736
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 4736,
            "end": 4737
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 4737,
                "end": 4746
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 768,
                "start": 4746,
                "end": 4747
            },
            "name": {
                "kind": 134299649,
                "text": "g",
                "rawText": "g",
                "flags": 768,
                "start": 4747,
                "end": 4749
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 4749,
                "end": 4751
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 271,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 768,
                                    "start": 4767,
                                    "end": 4770
                                },
                                "typeParameters": null,
                                "parameters": [
                                    {
                                        "kind": 125,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 768,
                                            "start": 4754,
                                            "end": 4755
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 768,
                                            "start": 4755,
                                            "end": 4757
                                        },
                                        "right": {
                                            "kind": 229,
                                            "yieldKeyword": {
                                                "kind": 8454253,
                                                "flags": 768,
                                                "start": 4757,
                                                "end": 4763
                                            },
                                            "delegate": true,
                                            "asteriskToken": {
                                                "kind": 67143222,
                                                "flags": 768,
                                                "start": 4763,
                                                "end": 4764
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 768,
                                                "start": 4764,
                                                "end": 4766
                                            },
                                            "flags": 256,
                                            "start": 4757,
                                            "end": 4766
                                        },
                                        "flags": 256,
                                        "start": 4752,
                                        "end": 4766
                                    }
                                ],
                                "asyncToken": null,
                                "returnType": null,
                                "contents": {
                                    "kind": 134299649,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 768,
                                    "start": 4770,
                                    "end": 4772
                                },
                                "flags": 256,
                                "start": 4752,
                                "end": 4772
                            },
                            "flags": 128,
                            "start": 4752,
                            "end": 4773
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 4752,
                    "end": 4773
                },
                "flags": 256,
                "start": 4751,
                "end": 4775
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 2176,
            "start": 4737,
            "end": 4775
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 4775,
            "end": 4776
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 4776,
                "end": 4785
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 768,
                "start": 4785,
                "end": 4786
            },
            "name": {
                "kind": 134299649,
                "text": "g",
                "rawText": "g",
                "flags": 768,
                "start": 4786,
                "end": 4788
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 4788,
                "end": 4790
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 271,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 768,
                                    "start": 4810,
                                    "end": 4813
                                },
                                "typeParameters": null,
                                "parameters": [
                                    {
                                        "kind": 125,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 768,
                                            "start": 4793,
                                            "end": 4794
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 768,
                                            "start": 4794,
                                            "end": 4796
                                        },
                                        "right": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 768,
                                                "start": 4796,
                                                "end": 4798
                                            },
                                            "operatorToken": {
                                                "kind": 34098,
                                                "flags": 768,
                                                "start": 4798,
                                                "end": 4800
                                            },
                                            "right": {
                                                "kind": 131,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "f",
                                                    "rawText": "f",
                                                    "flags": 768,
                                                    "start": 4800,
                                                    "end": 4802
                                                },
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [
                                                        {
                                                            "kind": 229,
                                                            "yieldKeyword": {
                                                                "kind": 8454253,
                                                                "flags": 768,
                                                                "start": 4803,
                                                                "end": 4808
                                                            },
                                                            "delegate": false,
                                                            "asteriskToken": null,
                                                            "expression": null,
                                                            "flags": 256,
                                                            "start": 4803,
                                                            "end": 4808
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 256,
                                                    "start": 4803,
                                                    "end": 4808
                                                },
                                                "flags": 256,
                                                "start": 4800,
                                                "end": 4809
                                            },
                                            "flags": 256,
                                            "start": 4796,
                                            "end": 4809
                                        },
                                        "flags": 256,
                                        "start": 4791,
                                        "end": 4809
                                    }
                                ],
                                "asyncToken": null,
                                "returnType": null,
                                "contents": {
                                    "kind": 134299649,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 768,
                                    "start": 4813,
                                    "end": 4815
                                },
                                "flags": 256,
                                "start": 4791,
                                "end": 4815
                            },
                            "flags": 128,
                            "start": 4791,
                            "end": 4816
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 4791,
                    "end": 4816
                },
                "flags": 256,
                "start": 4790,
                "end": 4818
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 2176,
            "start": 4776,
            "end": 4818
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 4818,
            "end": 4819
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 4819,
                "end": 4828
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 768,
                "start": 4828,
                "end": 4829
            },
            "name": {
                "kind": 134299649,
                "text": "g",
                "rawText": "g",
                "flags": 768,
                "start": 4829,
                "end": 4831
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 4831,
                "end": 4833
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 271,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 768,
                                    "start": 4849,
                                    "end": 4852
                                },
                                "typeParameters": null,
                                "parameters": [
                                    {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 219,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 768,
                                                        "start": 4845,
                                                        "end": 4847
                                                    },
                                                    "right": {
                                                        "kind": 194,
                                                        "expression": {
                                                            "kind": 229,
                                                            "yieldKeyword": {
                                                                "kind": 8454253,
                                                                "flags": 768,
                                                                "start": 4838,
                                                                "end": 4843
                                                            },
                                                            "delegate": false,
                                                            "asteriskToken": null,
                                                            "expression": null,
                                                            "flags": 256,
                                                            "start": 4838,
                                                            "end": 4843
                                                        },
                                                        "flags": 256,
                                                        "start": 4837,
                                                        "end": 4844
                                                    },
                                                    "flags": 256,
                                                    "start": 4837,
                                                    "end": 4847
                                                }
                                            ],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "flags": 0,
                                            "start": 4837,
                                            "end": 4847
                                        },
                                        "flags": 256,
                                        "start": 4836,
                                        "end": 4848
                                    }
                                ],
                                "asyncToken": null,
                                "returnType": null,
                                "contents": {
                                    "kind": 134299649,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 768,
                                    "start": 4852,
                                    "end": 4854
                                },
                                "flags": 256,
                                "start": 4834,
                                "end": 4854
                            },
                            "flags": 128,
                            "start": 4834,
                            "end": 4855
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 4834,
                    "end": 4855
                },
                "flags": 256,
                "start": 4833,
                "end": 4857
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 2176,
            "start": 4819,
            "end": 4857
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 4857,
            "end": 4858
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 4858,
                "end": 4867
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 768,
                "start": 4867,
                "end": 4868
            },
            "name": {
                "kind": 134299649,
                "text": "g",
                "rawText": "g",
                "flags": 768,
                "start": 4868,
                "end": 4870
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 4870,
                "end": 4872
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 271,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 768,
                                    "start": 4887,
                                    "end": 4890
                                },
                                "typeParameters": null,
                                "parameters": [
                                    {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 205,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 768,
                                                        "start": 4876,
                                                        "end": 4877
                                                    },
                                                    "right": {
                                                        "kind": 229,
                                                        "yieldKeyword": {
                                                            "kind": 8454253,
                                                            "flags": 768,
                                                            "start": 4879,
                                                            "end": 4885
                                                        },
                                                        "delegate": false,
                                                        "asteriskToken": null,
                                                        "expression": null,
                                                        "flags": 256,
                                                        "start": 4879,
                                                        "end": 4885
                                                    },
                                                    "flags": 256,
                                                    "start": 4876,
                                                    "end": 4885
                                                }
                                            ],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "flags": 0,
                                            "start": 4876,
                                            "end": 4885
                                        },
                                        "flags": 256,
                                        "start": 4875,
                                        "end": 4886
                                    }
                                ],
                                "asyncToken": null,
                                "returnType": null,
                                "contents": {
                                    "kind": 134299649,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 768,
                                    "start": 4890,
                                    "end": 4892
                                },
                                "flags": 256,
                                "start": 4873,
                                "end": 4892
                            },
                            "flags": 128,
                            "start": 4873,
                            "end": 4893
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 4873,
                    "end": 4893
                },
                "flags": 256,
                "start": 4872,
                "end": 4895
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 2176,
            "start": 4858,
            "end": 4895
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 4895,
            "end": 4896
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 4896,
                "end": 4905
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 768,
                "start": 4905,
                "end": 4906
            },
            "name": {
                "kind": 134299649,
                "text": "g",
                "rawText": "g",
                "flags": 768,
                "start": 4906,
                "end": 4908
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 4908,
                "end": 4910
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 271,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 768,
                                    "start": 4925,
                                    "end": 4928
                                },
                                "typeParameters": null,
                                "parameters": [
                                    {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 768,
                                                        "start": 4914,
                                                        "end": 4915
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 768,
                                                        "start": 4915,
                                                        "end": 4917
                                                    },
                                                    "right": {
                                                        "kind": 229,
                                                        "yieldKeyword": {
                                                            "kind": 8454253,
                                                            "flags": 768,
                                                            "start": 4917,
                                                            "end": 4923
                                                        },
                                                        "delegate": false,
                                                        "asteriskToken": null,
                                                        "expression": null,
                                                        "flags": 256,
                                                        "start": 4917,
                                                        "end": 4923
                                                    },
                                                    "flags": 256,
                                                    "start": 4914,
                                                    "end": 4923
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "start": 4914,
                                            "end": 4923
                                        },
                                        "flags": 256,
                                        "start": 4913,
                                        "end": 4924
                                    }
                                ],
                                "asyncToken": null,
                                "returnType": null,
                                "contents": {
                                    "kind": 134299649,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 768,
                                    "start": 4928,
                                    "end": 4930
                                },
                                "flags": 256,
                                "start": 4911,
                                "end": 4930
                            },
                            "flags": 128,
                            "start": 4911,
                            "end": 4931
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 4911,
                    "end": 4931
                },
                "flags": 256,
                "start": 4910,
                "end": 4933
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 2176,
            "start": 4896,
            "end": 4933
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 4933,
            "end": 4934
        },
        {
            "kind": 120,
            "expression": {
                "kind": 221,
                "text": "/./",
                "flags": 768,
                "start": 4934,
                "end": 5029
            },
            "flags": 128,
            "start": 4934,
            "end": 5029
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "i",
                "rawText": "0",
                "flags": 768,
                "start": 5030,
                "end": 5036
            },
            "flags": 128,
            "start": 5030,
            "end": 5037
        },
        {
            "kind": 120,
            "expression": {
                "kind": 221,
                "text": "/./",
                "flags": 768,
                "start": 5037,
                "end": 5041
            },
            "flags": 128,
            "start": 5037,
            "end": 5041
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "i",
                "rawText": "0",
                "flags": 768,
                "start": 5042,
                "end": 5048
            },
            "flags": 128,
            "start": 5042,
            "end": 5049
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 768,
                "start": 5049,
                "end": 5209
            },
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "flags": 128,
                    "start": 5211,
                    "end": 5211
                },
                "flags": 128,
                "start": 5209,
                "end": 5212
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 768,
                    "start": 5212,
                    "end": 5218
                },
                "catchParameter": {
                    "kind": 134299649,
                    "text": "e",
                    "rawText": "e",
                    "flags": 768,
                    "start": 5219,
                    "end": 5220
                },
                "block": {
                    "kind": 249,
                    "block": {
                        "kind": 124,
                        "statements": [
                            {
                                "kind": 162,
                                "lexicalKeyword": {
                                    "kind": 41951307,
                                    "flags": 768,
                                    "start": 5223,
                                    "end": 5227
                                },
                                "binding": {
                                    "kind": 151,
                                    "bindingList": [
                                        {
                                            "kind": 190,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "e",
                                                "rawText": "e",
                                                "flags": 768,
                                                "start": 5227,
                                                "end": 5229
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 128,
                                            "start": 5227,
                                            "end": 5229
                                        }
                                    ],
                                    "flags": 128,
                                    "start": 5227,
                                    "end": 5229
                                },
                                "flags": 128,
                                "start": 5223,
                                "end": 5230
                            }
                        ],
                        "multiLine": false,
                        "flags": 128,
                        "start": 5223,
                        "end": 5230
                    },
                    "flags": 128,
                    "start": 5221,
                    "end": 5232
                },
                "flags": 128,
                "start": 5212,
                "end": 5232
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 128,
            "start": 5049,
            "end": 5232
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 5232,
            "end": 5233
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 768,
                "start": 5233,
                "end": 5237
            },
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "flags": 128,
                    "start": 5239,
                    "end": 5239
                },
                "flags": 128,
                "start": 5237,
                "end": 5240
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 768,
                    "start": 5240,
                    "end": 5246
                },
                "catchParameter": {
                    "kind": 134299649,
                    "text": "e",
                    "rawText": "e",
                    "flags": 768,
                    "start": 5247,
                    "end": 5248
                },
                "block": {
                    "kind": 249,
                    "block": {
                        "kind": 124,
                        "statements": [
                            {
                                "kind": 176,
                                "declareKeyword": null,
                                "asyncKeyword": null,
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 768,
                                    "start": 5251,
                                    "end": 5260
                                },
                                "generatorToken": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "e",
                                    "rawText": "e",
                                    "flags": 768,
                                    "start": 5260,
                                    "end": 5262
                                },
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 5262,
                                    "end": 5264
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 5265,
                                        "end": 5265
                                    },
                                    "flags": 256,
                                    "start": 5264,
                                    "end": 5266
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 128,
                                "start": 5251,
                                "end": 5266
                            }
                        ],
                        "multiLine": false,
                        "flags": 128,
                        "start": 5251,
                        "end": 5266
                    },
                    "flags": 128,
                    "start": 5249,
                    "end": 5268
                },
                "flags": 128,
                "start": 5240,
                "end": 5268
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 128,
            "start": 5233,
            "end": 5268
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 5268,
            "end": 5269
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 768,
                "start": 5269,
                "end": 5553
            },
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "flags": 128,
                    "start": 5555,
                    "end": 5555
                },
                "flags": 128,
                "start": 5553,
                "end": 5556
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 768,
                    "start": 5556,
                    "end": 5562
                },
                "catchParameter": {
                    "kind": 134299649,
                    "text": "e",
                    "rawText": "e",
                    "flags": 768,
                    "start": 5563,
                    "end": 5564
                },
                "block": {
                    "kind": 249,
                    "block": {
                        "kind": 124,
                        "statements": [
                            {
                                "kind": 167,
                                "forKeyword": {
                                    "kind": 37757017,
                                    "flags": 768,
                                    "start": 5567,
                                    "end": 5571
                                },
                                "initializer": {
                                    "kind": 156,
                                    "declarations": [
                                        {
                                            "kind": 157,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "e",
                                                "rawText": "e",
                                                "flags": 768,
                                                "start": 5575,
                                                "end": 5577
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 128,
                                            "start": 5575,
                                            "end": 5577
                                        }
                                    ],
                                    "flags": 128,
                                    "start": 5575,
                                    "end": 5577
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 768,
                                    "start": 5580,
                                    "end": 5582
                                },
                                "statement": {
                                    "kind": 168,
                                    "flags": 128,
                                    "start": 5583,
                                    "end": 5584
                                },
                                "awaitKeyword": null,
                                "flags": 128,
                                "start": 5567,
                                "end": 5584
                            }
                        ],
                        "multiLine": false,
                        "flags": 128,
                        "start": 5567,
                        "end": 5584
                    },
                    "flags": 128,
                    "start": 5565,
                    "end": 5586
                },
                "flags": 128,
                "start": 5556,
                "end": 5586
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 128,
            "start": 5269,
            "end": 5586
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 5586,
            "end": 5587
        }
    ],
    "isModule": false,
    "text": "\n// 12.2.5.1\n// Always throw a Syntax Error if code matches this production.\n({ a = 0 });\n\n// 12.2.9.1\n// It is a Syntax Error if the lexical token sequence matched by CoverParenthesizedExpressionAndArrowParameterList\n// cannot be parsed with no tokens left over using ParenthesizedExpression as the goal symbol.\n(...a);\n(a, ...b);\n\n// All Early Errors rules for ParenthesizedExpression and its derived productions also apply to\n// CoveredParenthesizedExpression of CoverParenthesizedExpressionAndArrowParameterList.\n(((...a)));\n(((a, ...b)));\n\n// 12.4.1\n// It is an early Reference Error if IsValidSimpleAssignmentTarget of LeftHandSideExpression is false.\n0++;\n0--;\n\n// 12.5.1\n// It is an early Reference Error if IsValidSimpleAssignmentTarget of UnaryExpression is false.\n++0;\n--0;\n\n// 12.14.1\n// It is a Syntax Error if LeftHandSideExpression is either an ObjectLiteral or an ArrayLiteral and the lexical\n// token sequence matched by LeftHandSideExpression cannot be parsed with no tokens left over using\n// AssignmentPattern as the goal symbol.\n({a: 0} = 0);\n({get a(){}} = 0);\n({set a(b){}} = 0);\n({a(b){}} = 0);\n[0] = 0;;\n\n// It is an early Reference Error if LeftHandSideExpression is neither an ObjectLiteral nor an ArrayLiteral and\n // IsValidSimpleAssignmentTarget of LeftHandSideExpression is false.\n0 = 0;;\n\n// It is an early Reference Error if IsValidSimpleAssignmentTarget of LeftHandSideExpression is false.\n({a}) = 0;;\n([a]) = 0;;\n({a} += 0);;\n[a] *= 0;;\n0 /= 0;;\n\n// 12.14.5.1\n// It is a Syntax Error if LeftHandSideExpression is either an ObjectLiteral or an ArrayLiteral and if the lexical\n// token sequence matched by LeftHandSideExpression cannot be parsed with no tokens left over using\n// AssignmentPattern as the goal symbol.\n[...{a: 0}] = 0;;\n[...[0]] = 0;;\n\n// It is a Syntax Error if LeftHandSideExpression is neither an ObjectLiteral nor an ArrayLiteral and\n// IsValidSimpleAssignmentTarget(LeftHandSideExpression) is false.\n[...0] = 0;;\n[...new a] = 0;;\n\n// 13.6.4.1\n// It is a Syntax Error if LeftHandSideExpression is either an ObjectLiteral or an ArrayLiteral and if the\n// lexical token sequence matched by LeftHandSideExpression cannot be parsed with no tokens left over using\n // AssignmentPattern as the goal symbol.\nfor({a: 0} in 0);\nfor([0] in 0);\nfor({a: 0} of 0);\nfor([0] of 0);\n\n// It is a Syntax Error if IsValidSimpleAssignmentTarget of LeftHandSideExpression is false.\nfor(0 in 0);\nfor(0 of 0);\n\n// It is a Syntax Error if the LeftHandSideExpression is CoverParenthesizedExpressionAndArrowParameterList\n// : ( Expression ) and Expression derives a production that would produce a Syntax Error according to these\n// rules if that production is substituted for LeftHandSideExpression. This rule is recursively applied.\nfor(({a: 0}) in 0);\nfor(([0]) in 0);\nfor(({a: 0}) of 0);\nfor(([0]) of 0);\nfor((0) in 0);\nfor((0) of 0);\n\n// 11.8.4.1\n// It is a Syntax Error if the MV of HexDigits > 1114111.\n\\\\u{110000};\n\\\\u{FFFFFFF};\n\n// 11.8.5.1\n// It is a Syntax Error if IdentifierPart contains a Unicode escape sequence.\n/./\\\\u0069;\n/./\\\\u{69};\n\n// 12.2.5.1\n// It is a Syntax Error if HasDirectSuper of MethodDefinition is true.\n({ a(){ super(); } });\n({ a(){ {{ if(0) (( super() )); }} } });\nclass A extends B { constructor() { !{constructor() { super(); }}; } }\nclass A extends B { constructor() { !{*constructor() { super(); }}; } }\nclass A extends B { constructor() { !{get constructor() { super(); }}; } }\nclass A extends B { constructor() { !{set constructor(a) { super(); }}; } }\n\n// 11.6.1.1\n// It is a Syntax Error if SV(UnicodeEscapeSequence) is neither the UTF16Encoding (10.1.1) of a single Unicode code\n// point with the Unicode property @{x201c}@ID_Start@{x201d}@ nor \"$\" or \"_\".\n\\\\u0000;\n\\\\u{0};\n// It is a Syntax Error if SV(UnicodeEscapeSequence) is neither the UTF16Encoding (10.1.1) of a single Unicode code\n// point with the Unicode property @{x201c}@ID_Continue@{x201d}@ nor \"$\" or \"_\" nor the UTF16Encoding of either <ZWNJ> or <ZWJ>.\na\\\\u0000;\na\\\\u{0};\n\n// 11.8.4.1\n// It is a Syntax Error if the MV of HexDigits > 1114111.\n(\"\\\\u{110000}\");\n(\"\\\\u{FFFFFFF}\");\n\n// 12.14.5.1\n// It is a Syntax Error if IsValidSimpleAssignmentTarget of IdentifierReference is false.\n\"use strict\"; ({eval} = 0);\n\"use strict\"; ({eval = 0} = 0);\n\"use strict\"; ({arguments} = 0);\n\"use strict\"; ({arguments = 0} = 0);\n\n// 13.6.1\n// It is a Syntax Error if IsLabelledFunction(Statement) is true for any occurrence of Statement in these rules.\nif(0) label: function f(){}\nif(0) labelA: labelB: function f(){}\nif(0) label: function f(){} else ;\nif(0) ; else label: function f(){}\n\n// 14.2.1\n// It is a Syntax Error if ArrowParameters Contains YieldExpression is true.\nfunction* g(){ (a = yield) => 0; };\nfunction* g(){ (a = yield b) => 0; };\nfunction* g(){ (a = yield* b) => 0; };\nfunction* g(){ (a = x + f(yield)) => 0; };\nfunction* g(){ ({[yield]: a}) => 0; };\nfunction* g(){ ({a = yield}) => 0; };\nfunction* g(){ ([a = yield]) => 0; };\n\n// 11.8.5.1\n// It is a Syntax Error if IdentifierPart contains a Unicode escape sequence.\n/./\\\\u0069;\n/./\\\\u{69};\n\n// Annex B 3.5 (13.14.1)\n// It is a Syntax Error if any element of the BoundNames of CatchParameter also occurs\n// in the LexicallyDeclaredNames of Block.\ntry {} catch(e) { let e; };\ntry {} catch(e) { function e(){} };\n\n// It is a Syntax Error if any element of the BoundNames of CatchParameter also occurs\n// in the VarDeclaredNames of Block,\n// unless that element is only bound by a VariableStatement or the VariableDeclarationList of a for statement,\n// or the ForBinding of a for-in statement.\ntry {} catch(e) { for(var e of 0); };\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 5588
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

