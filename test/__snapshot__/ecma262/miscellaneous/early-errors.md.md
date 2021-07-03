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

### CST

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
                                "kind": 301,
                                "left": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 79,
                                    "end": 81
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 96,
                                    "start": 83,
                                    "end": 85
                                },
                                "flags": 32,
                                "start": 79,
                                "end": 85
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 79,
                        "end": 85
                    },
                    "flags": 48,
                    "start": 78,
                    "end": 87
                },
                "flags": 32,
                "start": 0,
                "end": 88
            },
            "flags": 16,
            "start": 0,
            "end": 89
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 281,
                    "ellipsisToken": {
                        "kind": 524302,
                        "flags": 64,
                        "start": 314,
                        "end": 317
                    },
                    "left": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 317,
                        "end": 318
                    },
                    "optionalToken": null,
                    "type": null,
                    "right": null,
                    "flags": 34,
                    "start": 314,
                    "end": 318
                },
                "flags": 32,
                "start": 89,
                "end": 319
            },
            "flags": 16,
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
                            "flags": 96,
                            "start": 322,
                            "end": 323
                        },
                        {
                            "kind": 281,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "start": 324,
                                "end": 328
                            },
                            "left": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 328,
                                "end": 329
                            },
                            "optionalToken": null,
                            "type": null,
                            "right": null,
                            "flags": 34,
                            "start": 324,
                            "end": 329
                        }
                    ],
                    "flags": 32,
                    "start": 320,
                    "end": 330
                },
                "flags": 32,
                "start": 320,
                "end": 330
            },
            "flags": 16,
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
                            "kind": 281,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "start": 520,
                                "end": 523
                            },
                            "left": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 523,
                                "end": 524
                            },
                            "optionalToken": null,
                            "type": null,
                            "right": null,
                            "flags": 34,
                            "start": 520,
                            "end": 524
                        },
                        "flags": 32,
                        "start": 519,
                        "end": 525
                    },
                    "flags": 32,
                    "start": 518,
                    "end": 526
                },
                "flags": 32,
                "start": 331,
                "end": 527
            },
            "flags": 16,
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
                                    "flags": 96,
                                    "start": 532,
                                    "end": 533
                                },
                                {
                                    "kind": 281,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 64,
                                        "start": 534,
                                        "end": 538
                                    },
                                    "left": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "start": 538,
                                        "end": 539
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "right": null,
                                    "flags": 34,
                                    "start": 534,
                                    "end": 539
                                }
                            ],
                            "flags": 32,
                            "start": 531,
                            "end": 540
                        },
                        "flags": 32,
                        "start": 531,
                        "end": 540
                    },
                    "flags": 32,
                    "start": 530,
                    "end": 541
                },
                "flags": 32,
                "start": 528,
                "end": 542
            },
            "flags": 16,
            "start": 528,
            "end": 543
        },
        {
            "kind": 120,
            "expression": {
                "kind": 127,
                "operandToken": {
                    "kind": 196635,
                    "flags": 96,
                    "start": 659,
                    "end": 661
                },
                "operand": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 97,
                    "start": 543,
                    "end": 659
                },
                "flags": 32,
                "start": 543,
                "end": 661
            },
            "flags": 16,
            "start": 543,
            "end": 662
        },
        {
            "kind": 120,
            "expression": {
                "kind": 127,
                "operandToken": {
                    "kind": 196636,
                    "flags": 96,
                    "start": 664,
                    "end": 666
                },
                "operand": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 97,
                    "start": 662,
                    "end": 664
                },
                "flags": 32,
                "start": 662,
                "end": 666
            },
            "flags": 16,
            "start": 662,
            "end": 667
        },
        {
            "kind": 120,
            "expression": {
                "kind": 128,
                "operandToken": {
                    "kind": 196635,
                    "flags": 97,
                    "start": 667,
                    "end": 777
                },
                "operand": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 777,
                    "end": 778
                },
                "flags": 32,
                "start": 667,
                "end": 778
            },
            "flags": 16,
            "start": 667,
            "end": 779
        },
        {
            "kind": 120,
            "expression": {
                "kind": 128,
                "operandToken": {
                    "kind": 196636,
                    "flags": 97,
                    "start": 779,
                    "end": 782
                },
                "operand": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 782,
                    "end": 783
                },
                "flags": 32,
                "start": 779,
                "end": 783
            },
            "flags": 16,
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
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 1052,
                                        "end": 1053
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "start": 1054,
                                        "end": 1056
                                    },
                                    "flags": 32,
                                    "start": 1052,
                                    "end": 1056
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 1052,
                            "end": 1056
                        },
                        "flags": 48,
                        "start": 1051,
                        "end": 1057
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 1057,
                        "end": 1059
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 0,
                        "rawText": "0",
                        "flags": 96,
                        "start": 1059,
                        "end": 1061
                    },
                    "flags": 32,
                    "start": 1051,
                    "end": 1061
                },
                "flags": 32,
                "start": 784,
                "end": 1062
            },
            "flags": 16,
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
                                    "kind": 351,
                                    "asyncKeyword": null,
                                    "asteriskToken": null,
                                    "getKeyword": {
                                        "kind": 16498,
                                        "flags": 96,
                                        "start": 1066,
                                        "end": 1069
                                    },
                                    "setKeyword": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 1069,
                                            "end": 1071
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 1056,
                                            "start": 1072,
                                            "end": 1073
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 1074,
                                                "end": 1074
                                            },
                                            "flags": 32,
                                            "start": 1073,
                                            "end": 1075
                                        },
                                        "flags": 1056,
                                        "start": 1071,
                                        "end": 1075
                                    },
                                    "flags": 32,
                                    "start": 1066,
                                    "end": 1075
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 1066,
                            "end": 1075
                        },
                        "flags": 48,
                        "start": 1065,
                        "end": 1076
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 1076,
                        "end": 1078
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 0,
                        "rawText": "0",
                        "flags": 96,
                        "start": 1078,
                        "end": 1080
                    },
                    "flags": 32,
                    "start": 1065,
                    "end": 1080
                },
                "flags": 32,
                "start": 1063,
                "end": 1081
            },
            "flags": 16,
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
                                    "kind": 351,
                                    "asyncKeyword": null,
                                    "asteriskToken": null,
                                    "getKeyword": null,
                                    "setKeyword": {
                                        "kind": 16499,
                                        "flags": 96,
                                        "start": 1085,
                                        "end": 1088
                                    },
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 1088,
                                            "end": 1090
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 96,
                                                    "start": 1091,
                                                    "end": 1092
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 608,
                                            "start": 1091,
                                            "end": 1093
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 1094,
                                                "end": 1094
                                            },
                                            "flags": 32,
                                            "start": 1093,
                                            "end": 1095
                                        },
                                        "flags": 544,
                                        "start": 1090,
                                        "end": 1095
                                    },
                                    "flags": 32,
                                    "start": 1085,
                                    "end": 1095
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 1085,
                            "end": 1095
                        },
                        "flags": 48,
                        "start": 1084,
                        "end": 1096
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 1096,
                        "end": 1098
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 0,
                        "rawText": "0",
                        "flags": 96,
                        "start": 1098,
                        "end": 1100
                    },
                    "flags": 32,
                    "start": 1084,
                    "end": 1100
                },
                "flags": 32,
                "start": 1082,
                "end": 1101
            },
            "flags": 16,
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
                                    "kind": 351,
                                    "asyncKeyword": null,
                                    "asteriskToken": null,
                                    "getKeyword": null,
                                    "setKeyword": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 1105,
                                            "end": 1106
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 96,
                                                    "start": 1107,
                                                    "end": 1108
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 96,
                                            "start": 1107,
                                            "end": 1109
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 1110,
                                                "end": 1110
                                            },
                                            "flags": 32,
                                            "start": 1109,
                                            "end": 1111
                                        },
                                        "flags": 32,
                                        "start": 1106,
                                        "end": 1111
                                    },
                                    "flags": 32,
                                    "start": 1105,
                                    "end": 1111
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 1105,
                            "end": 1111
                        },
                        "flags": 48,
                        "start": 1104,
                        "end": 1112
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 1112,
                        "end": 1114
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 0,
                        "rawText": "0",
                        "flags": 96,
                        "start": 1114,
                        "end": 1116
                    },
                    "flags": 32,
                    "start": 1104,
                    "end": 1116
                },
                "flags": 32,
                "start": 1102,
                "end": 1117
            },
            "flags": 16,
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
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "start": 1120,
                                "end": 1121
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 1120,
                        "end": 1121
                    },
                    "flags": 33,
                    "start": 1118,
                    "end": 1122
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 1122,
                    "end": 1124
                },
                "right": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 1124,
                    "end": 1126
                },
                "flags": 32,
                "start": 1118,
                "end": 1126
            },
            "flags": 16,
            "start": 1118,
            "end": 1127
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 1127,
            "end": 1128
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 97,
                    "start": 1128,
                    "end": 1313
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 1313,
                    "end": 1315
                },
                "right": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 1315,
                    "end": 1317
                },
                "flags": 32,
                "start": 1128,
                "end": 1317
            },
            "flags": 16,
            "start": 1128,
            "end": 1318
        },
        {
            "kind": 168,
            "flags": 16,
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
                                    "flags": 96,
                                    "start": 1426,
                                    "end": 1427
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 1426,
                            "end": 1427
                        },
                        "flags": 48,
                        "start": 1425,
                        "end": 1428
                    },
                    "flags": 32,
                    "start": 1319,
                    "end": 1429
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 1429,
                    "end": 1431
                },
                "right": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 1431,
                    "end": 1433
                },
                "flags": 32,
                "start": 1319,
                "end": 1433
            },
            "flags": 16,
            "start": 1319,
            "end": 1434
        },
        {
            "kind": 168,
            "flags": 16,
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
                                    "flags": 96,
                                    "start": 1438,
                                    "end": 1439
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 1438,
                            "end": 1439
                        },
                        "flags": 32,
                        "start": 1437,
                        "end": 1440
                    },
                    "flags": 32,
                    "start": 1435,
                    "end": 1441
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 1441,
                    "end": 1443
                },
                "right": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 1443,
                    "end": 1445
                },
                "flags": 32,
                "start": 1435,
                "end": 1445
            },
            "flags": 16,
            "start": 1435,
            "end": 1446
        },
        {
            "kind": 168,
            "flags": 16,
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
                                    "flags": 96,
                                    "start": 1450,
                                    "end": 1451
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 1450,
                            "end": 1451
                        },
                        "flags": 48,
                        "start": 1449,
                        "end": 1452
                    },
                    "operatorToken": {
                        "kind": 4130,
                        "flags": 96,
                        "start": 1452,
                        "end": 1455
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 0,
                        "rawText": "0",
                        "flags": 96,
                        "start": 1455,
                        "end": 1457
                    },
                    "flags": 32,
                    "start": 1449,
                    "end": 1457
                },
                "flags": 32,
                "start": 1447,
                "end": 1458
            },
            "flags": 16,
            "start": 1447,
            "end": 1459
        },
        {
            "kind": 168,
            "flags": 16,
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
                                "flags": 96,
                                "start": 1462,
                                "end": 1463
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 1462,
                        "end": 1463
                    },
                    "flags": 33,
                    "start": 1460,
                    "end": 1464
                },
                "operatorToken": {
                    "kind": 4132,
                    "flags": 96,
                    "start": 1464,
                    "end": 1467
                },
                "right": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 1467,
                    "end": 1469
                },
                "flags": 32,
                "start": 1460,
                "end": 1469
            },
            "flags": 16,
            "start": 1460,
            "end": 1470
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 1470,
            "end": 1471
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 97,
                    "start": 1471,
                    "end": 1473
                },
                "operatorToken": {
                    "kind": 4133,
                    "flags": 96,
                    "start": 1473,
                    "end": 1476
                },
                "right": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 1476,
                    "end": 1478
                },
                "flags": 32,
                "start": 1471,
                "end": 1478
            },
            "flags": 16,
            "start": 1471,
            "end": 1479
        },
        {
            "kind": 168,
            "flags": 16,
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
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 64,
                                    "start": 1752,
                                    "end": 1755
                                },
                                "argument": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "asteriskToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "start": 1756,
                                                    "end": 1757
                                                },
                                                "right": {
                                                    "kind": 201392130,
                                                    "text": 0,
                                                    "rawText": "0",
                                                    "flags": 96,
                                                    "start": 1758,
                                                    "end": 1760
                                                },
                                                "flags": 32,
                                                "start": 1756,
                                                "end": 1760
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 1756,
                                        "end": 1760
                                    },
                                    "flags": 48,
                                    "start": 1755,
                                    "end": 1761
                                },
                                "flags": 1073741856,
                                "start": 1752,
                                "end": 1761
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 1752,
                        "end": 1761
                    },
                    "flags": 33,
                    "start": 1480,
                    "end": 1762
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 1762,
                    "end": 1764
                },
                "right": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 1764,
                    "end": 1766
                },
                "flags": 32,
                "start": 1480,
                "end": 1766
            },
            "flags": 16,
            "start": 1480,
            "end": 1767
        },
        {
            "kind": 168,
            "flags": 16,
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
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 64,
                                    "start": 1770,
                                    "end": 1773
                                },
                                "argument": {
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [
                                            {
                                                "kind": 201392130,
                                                "text": 0,
                                                "rawText": "0",
                                                "flags": 96,
                                                "start": 1774,
                                                "end": 1775
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 1774,
                                        "end": 1775
                                    },
                                    "flags": 32,
                                    "start": 1773,
                                    "end": 1776
                                },
                                "flags": 1073741856,
                                "start": 1770,
                                "end": 1776
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 1770,
                        "end": 1776
                    },
                    "flags": 33,
                    "start": 1768,
                    "end": 1777
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 1777,
                    "end": 1779
                },
                "right": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 1779,
                    "end": 1781
                },
                "flags": 32,
                "start": 1768,
                "end": 1781
            },
            "flags": 16,
            "start": 1768,
            "end": 1782
        },
        {
            "kind": 168,
            "flags": 16,
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
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 64,
                                    "start": 1955,
                                    "end": 1958
                                },
                                "argument": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 96,
                                    "start": 1958,
                                    "end": 1959
                                },
                                "flags": 1073741856,
                                "start": 1955,
                                "end": 1959
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 1955,
                        "end": 1959
                    },
                    "flags": 33,
                    "start": 1783,
                    "end": 1960
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 1960,
                    "end": 1962
                },
                "right": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 1962,
                    "end": 1964
                },
                "flags": 32,
                "start": 1783,
                "end": 1964
            },
            "flags": 16,
            "start": 1783,
            "end": 1965
        },
        {
            "kind": 168,
            "flags": 16,
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
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 64,
                                    "start": 1968,
                                    "end": 1971
                                },
                                "argument": {
                                    "kind": 210,
                                    "newKeyword": {
                                        "kind": 138477661,
                                        "flags": 96,
                                        "start": 1971,
                                        "end": 1974
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 1974,
                                        "end": 1976
                                    },
                                    "argumentList": null,
                                    "flags": 96,
                                    "start": 1971,
                                    "end": 1976
                                },
                                "flags": 1073741856,
                                "start": 1968,
                                "end": 1976
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 1968,
                        "end": 1976
                    },
                    "flags": 33,
                    "start": 1966,
                    "end": 1977
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 1977,
                    "end": 1979
                },
                "right": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 1979,
                    "end": 1981
                },
                "flags": 32,
                "start": 1966,
                "end": 1981
            },
            "flags": 16,
            "start": 1966,
            "end": 1982
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 1982,
            "end": 1983
        },
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 1983,
                "end": 2257
            },
            "initializer": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [
                        {
                            "kind": 219,
                            "asteriskToken": null,
                            "left": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 2259,
                                "end": 2260
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "start": 2261,
                                "end": 2263
                            },
                            "flags": 32,
                            "start": 2259,
                            "end": 2263
                        }
                    ],
                    "trailingComma": false,
                    "flags": 16,
                    "start": 2259,
                    "end": 2263
                },
                "flags": 48,
                "start": 2258,
                "end": 2264
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 2264,
                "end": 2267
            },
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "start": 2267,
                "end": 2269
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 2270,
                "end": 2271
            },
            "flags": 81,
            "start": 1983,
            "end": 2271
        },
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 2271,
                "end": 2275
            },
            "initializer": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 96,
                            "start": 2277,
                            "end": 2278
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 2277,
                    "end": 2278
                },
                "flags": 32,
                "start": 2276,
                "end": 2279
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 2279,
                "end": 2282
            },
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "start": 2282,
                "end": 2284
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 2285,
                "end": 2286
            },
            "flags": 81,
            "start": 2271,
            "end": 2286
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 2286,
                "end": 2290
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [
                        {
                            "kind": 219,
                            "asteriskToken": null,
                            "left": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 2292,
                                "end": 2293
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "start": 2294,
                                "end": 2296
                            },
                            "flags": 32,
                            "start": 2292,
                            "end": 2296
                        }
                    ],
                    "trailingComma": false,
                    "flags": 16,
                    "start": 2292,
                    "end": 2296
                },
                "flags": 48,
                "start": 2291,
                "end": 2297
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 2297,
                "end": 2300
            },
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "start": 2300,
                "end": 2302
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 2303,
                "end": 2304
            },
            "flags": 81,
            "start": 2286,
            "end": 2304
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 2304,
                "end": 2308
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 96,
                            "start": 2310,
                            "end": 2311
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 2310,
                    "end": 2311
                },
                "flags": 32,
                "start": 2309,
                "end": 2312
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 2312,
                "end": 2315
            },
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "start": 2315,
                "end": 2317
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 2318,
                "end": 2319
            },
            "flags": 81,
            "start": 2304,
            "end": 2319
        },
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 2319,
                "end": 2417
            },
            "initializer": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "start": 2418,
                "end": 2419
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 2419,
                "end": 2422
            },
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "start": 2422,
                "end": 2424
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 2425,
                "end": 2426
            },
            "flags": 81,
            "start": 2319,
            "end": 2426
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 2426,
                "end": 2430
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "start": 2431,
                "end": 2432
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 2432,
                "end": 2435
            },
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "start": 2435,
                "end": 2437
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 2438,
                "end": 2439
            },
            "flags": 81,
            "start": 2426,
            "end": 2439
        },
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 2439,
                "end": 2765
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
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 2768,
                                    "end": 2769
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 96,
                                    "start": 2770,
                                    "end": 2772
                                },
                                "flags": 32,
                                "start": 2768,
                                "end": 2772
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2768,
                        "end": 2772
                    },
                    "flags": 48,
                    "start": 2767,
                    "end": 2773
                },
                "flags": 32,
                "start": 2766,
                "end": 2774
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 2774,
                "end": 2777
            },
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "start": 2777,
                "end": 2779
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 2780,
                "end": 2781
            },
            "flags": 81,
            "start": 2439,
            "end": 2781
        },
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 2781,
                "end": 2785
            },
            "initializer": {
                "kind": 121,
                "expression": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "start": 2788,
                                "end": 2789
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 2788,
                        "end": 2789
                    },
                    "flags": 32,
                    "start": 2787,
                    "end": 2790
                },
                "flags": 32,
                "start": 2786,
                "end": 2791
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 2791,
                "end": 2794
            },
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "start": 2794,
                "end": 2796
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 2797,
                "end": 2798
            },
            "flags": 81,
            "start": 2781,
            "end": 2798
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 2798,
                "end": 2802
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 2805,
                                    "end": 2806
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 96,
                                    "start": 2807,
                                    "end": 2809
                                },
                                "flags": 32,
                                "start": 2805,
                                "end": 2809
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2805,
                        "end": 2809
                    },
                    "flags": 48,
                    "start": 2804,
                    "end": 2810
                },
                "flags": 32,
                "start": 2803,
                "end": 2811
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 2811,
                "end": 2814
            },
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "start": 2814,
                "end": 2816
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 2817,
                "end": 2818
            },
            "flags": 81,
            "start": 2798,
            "end": 2818
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 2818,
                "end": 2822
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 121,
                "expression": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "start": 2825,
                                "end": 2826
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 2825,
                        "end": 2826
                    },
                    "flags": 32,
                    "start": 2824,
                    "end": 2827
                },
                "flags": 32,
                "start": 2823,
                "end": 2828
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 2828,
                "end": 2831
            },
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "start": 2831,
                "end": 2833
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 2834,
                "end": 2835
            },
            "flags": 81,
            "start": 2818,
            "end": 2835
        },
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 2835,
                "end": 2839
            },
            "initializer": {
                "kind": 121,
                "expression": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 2841,
                    "end": 2842
                },
                "flags": 32,
                "start": 2840,
                "end": 2843
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 2843,
                "end": 2846
            },
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "start": 2846,
                "end": 2848
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 2849,
                "end": 2850
            },
            "flags": 81,
            "start": 2835,
            "end": 2850
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 2850,
                "end": 2854
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 121,
                "expression": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 2856,
                    "end": 2857
                },
                "flags": 32,
                "start": 2855,
                "end": 2858
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 2858,
                "end": 2861
            },
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "start": 2861,
                "end": 2863
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 2864,
                "end": 2865
            },
            "flags": 81,
            "start": 2850,
            "end": 2865
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "u",
                "rawText": "u",
                "flags": 96,
                "start": 2939,
                "end": 2940
            },
            "flags": 16,
            "start": 2939,
            "end": 2940
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 201392130,
                            "text": 110000,
                            "rawText": "110000",
                            "flags": 96,
                            "start": 2941,
                            "end": 2947
                        },
                        "flags": 16,
                        "start": 2941,
                        "end": 2947
                    }
                ],
                "flags": 16,
                "start": 2941,
                "end": 2947
            },
            "flags": 16,
            "start": 2940,
            "end": 2948
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 2948,
            "end": 2949
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "u",
                "rawText": "u",
                "flags": 96,
                "start": 2952,
                "end": 2953
            },
            "flags": 16,
            "start": 2952,
            "end": 2953
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "FFFFFFF",
                            "rawText": "FFFFFFF",
                            "flags": 96,
                            "start": 2954,
                            "end": 2961
                        },
                        "flags": 16,
                        "start": 2954,
                        "end": 2961
                    }
                ],
                "flags": 16,
                "start": 2954,
                "end": 2961
            },
            "flags": 16,
            "start": 2953,
            "end": 2962
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 2962,
            "end": 2963
        },
        {
            "kind": 120,
            "expression": {
                "kind": 371,
                "text": "/./",
                "flags": 96,
                "start": 2963,
                "end": 3058
            },
            "flags": 16,
            "start": 2963,
            "end": 3058
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "i",
                "rawText": "\\u0069",
                "flags": 16480,
                "start": 3059,
                "end": 3065
            },
            "flags": 16,
            "start": 3059,
            "end": 3066
        },
        {
            "kind": 120,
            "expression": {
                "kind": 371,
                "text": "/./",
                "flags": 96,
                "start": 3066,
                "end": 3070
            },
            "flags": 16,
            "start": 3066,
            "end": 3070
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "i",
                "rawText": "\\u{69}",
                "flags": 8288,
                "start": 3071,
                "end": 3077
            },
            "flags": 16,
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
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 3165,
                                        "end": 3167
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 3168,
                                        "end": 3169
                                    },
                                    "returnType": null,
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
                                                            "kind": 4259935,
                                                            "flags": 96,
                                                            "start": 3170,
                                                            "end": 3176
                                                        },
                                                        "argumentList": {
                                                            "kind": 256,
                                                            "elements": [],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "start": 3177,
                                                            "end": 3177
                                                        },
                                                        "flags": 268435488,
                                                        "start": 3170,
                                                        "end": 3178
                                                    },
                                                    "flags": 16,
                                                    "start": 3170,
                                                    "end": 3179
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 3170,
                                            "end": 3179
                                        },
                                        "flags": 32,
                                        "start": 3169,
                                        "end": 3181
                                    },
                                    "flags": 32,
                                    "start": 3167,
                                    "end": 3181
                                },
                                "flags": 32,
                                "start": 3165,
                                "end": 3181
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 3165,
                        "end": 3181
                    },
                    "flags": 48,
                    "start": 3164,
                    "end": 3183
                },
                "flags": 32,
                "start": 3078,
                "end": 3184
            },
            "flags": 16,
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
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 3188,
                                        "end": 3190
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 3191,
                                        "end": 3192
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [
                                                {
                                                    "kind": 124,
                                                    "block": {
                                                        "kind": 249,
                                                        "statements": [
                                                            {
                                                                "kind": 124,
                                                                "block": {
                                                                    "kind": 249,
                                                                    "statements": [
                                                                        {
                                                                            "kind": 164,
                                                                            "ifKeyword": {
                                                                                "kind": 37757019,
                                                                                "flags": 80,
                                                                                "start": 3196,
                                                                                "end": 3199
                                                                            },
                                                                            "expression": {
                                                                                "kind": 201392130,
                                                                                "text": 0,
                                                                                "rawText": "0",
                                                                                "flags": 96,
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
                                                                                                "kind": 4259935,
                                                                                                "flags": 96,
                                                                                                "start": 3205,
                                                                                                "end": 3211
                                                                                            },
                                                                                            "argumentList": {
                                                                                                "kind": 256,
                                                                                                "elements": [],
                                                                                                "trailingComma": false,
                                                                                                "flags": 32,
                                                                                                "start": 3212,
                                                                                                "end": 3212
                                                                                            },
                                                                                            "flags": 268435488,
                                                                                            "start": 3205,
                                                                                            "end": 3213
                                                                                        },
                                                                                        "flags": 32,
                                                                                        "start": 3204,
                                                                                        "end": 3215
                                                                                    },
                                                                                    "flags": 32,
                                                                                    "start": 3202,
                                                                                    "end": 3216
                                                                                },
                                                                                "flags": 16,
                                                                                "start": 3202,
                                                                                "end": 3217
                                                                            },
                                                                            "elseKeyword": null,
                                                                            "alternate": null,
                                                                            "flags": 80,
                                                                            "start": 3196,
                                                                            "end": 3217
                                                                        }
                                                                    ],
                                                                    "flags": 16,
                                                                    "start": 3196,
                                                                    "end": 3217
                                                                },
                                                                "flags": 16,
                                                                "start": 3195,
                                                                "end": 3219
                                                            }
                                                        ],
                                                        "flags": 16,
                                                        "start": 3195,
                                                        "end": 3219
                                                    },
                                                    "flags": 16,
                                                    "start": 3193,
                                                    "end": 3220
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 3193,
                                            "end": 3220
                                        },
                                        "flags": 32,
                                        "start": 3192,
                                        "end": 3222
                                    },
                                    "flags": 32,
                                    "start": 3190,
                                    "end": 3222
                                },
                                "flags": 32,
                                "start": 3188,
                                "end": 3222
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 3188,
                        "end": 3222
                    },
                    "flags": 48,
                    "start": 3187,
                    "end": 3224
                },
                "flags": 32,
                "start": 3185,
                "end": 3225
            },
            "flags": 16,
            "start": 3185,
            "end": 3226
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 3226,
                "end": 3232
            },
            "name": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 96,
                "start": 3232,
                "end": 3234
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 80,
                        "start": 3234,
                        "end": 3242
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "B",
                        "rawText": "B",
                        "flags": 96,
                        "start": 3242,
                        "end": 3244
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "start": 3242,
                    "end": 3244
                },
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 96,
                                    "start": 3246,
                                    "end": 3258
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 2048,
                                    "start": 3259,
                                    "end": 3260
                                },
                                "returnType": null,
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
                                                        "flags": 96,
                                                        "start": 3262,
                                                        "end": 3264
                                                    },
                                                    "operand": {
                                                        "kind": 220,
                                                        "propertyList": {
                                                            "kind": 218,
                                                            "properties": [
                                                                {
                                                                    "kind": 351,
                                                                    "asyncKeyword": null,
                                                                    "asteriskToken": null,
                                                                    "getKeyword": null,
                                                                    "setKeyword": null,
                                                                    "method": {
                                                                        "kind": 209,
                                                                        "name": {
                                                                            "kind": 134299649,
                                                                            "text": "constructor",
                                                                            "rawText": "constructor",
                                                                            "flags": 96,
                                                                            "start": 3265,
                                                                            "end": 3276
                                                                        },
                                                                        "typeParameters": null,
                                                                        "formalParameterList": {
                                                                            "kind": 214,
                                                                            "formalParameters": [],
                                                                            "trailingComma": false,
                                                                            "flags": 32,
                                                                            "start": 3277,
                                                                            "end": 3278
                                                                        },
                                                                        "returnType": null,
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
                                                                                                "kind": 4259935,
                                                                                                "flags": 96,
                                                                                                "start": 3280,
                                                                                                "end": 3286
                                                                                            },
                                                                                            "argumentList": {
                                                                                                "kind": 256,
                                                                                                "elements": [],
                                                                                                "trailingComma": false,
                                                                                                "flags": 32,
                                                                                                "start": 3287,
                                                                                                "end": 3287
                                                                                            },
                                                                                            "flags": 268435488,
                                                                                            "start": 3280,
                                                                                            "end": 3288
                                                                                        },
                                                                                        "flags": 16,
                                                                                        "start": 3280,
                                                                                        "end": 3289
                                                                                    }
                                                                                ],
                                                                                "flags": 32,
                                                                                "start": 3280,
                                                                                "end": 3289
                                                                            },
                                                                            "flags": 32,
                                                                            "start": 3278,
                                                                            "end": 3291
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 3276,
                                                                        "end": 3291
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 3265,
                                                                    "end": 3291
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 16,
                                                            "start": 3265,
                                                            "end": 3291
                                                        },
                                                        "flags": 48,
                                                        "start": 3264,
                                                        "end": 3292
                                                    },
                                                    "flags": 32,
                                                    "start": 3262,
                                                    "end": 3292
                                                },
                                                "flags": 16,
                                                "start": 3262,
                                                "end": 3293
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 3262,
                                        "end": 3293
                                    },
                                    "flags": 32,
                                    "start": 3260,
                                    "end": 3295
                                },
                                "flags": 2048,
                                "start": 3258,
                                "end": 3295
                            },
                            "flags": 2048,
                            "start": 3246,
                            "end": 3295
                        }
                    ],
                    "flags": 32,
                    "start": 3246,
                    "end": 3295
                },
                "flags": 3234,
                "start": 32,
                "end": 3297
            },
            "flags": 17,
            "start": 3226,
            "end": 3297
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 3297,
                "end": 3303
            },
            "name": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 96,
                "start": 3303,
                "end": 3305
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 80,
                        "start": 3305,
                        "end": 3313
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "B",
                        "rawText": "B",
                        "flags": 96,
                        "start": 3313,
                        "end": 3315
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "start": 3313,
                    "end": 3315
                },
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 96,
                                    "start": 3317,
                                    "end": 3329
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 2048,
                                    "start": 3330,
                                    "end": 3331
                                },
                                "returnType": null,
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
                                                        "flags": 96,
                                                        "start": 3333,
                                                        "end": 3335
                                                    },
                                                    "operand": {
                                                        "kind": 220,
                                                        "propertyList": {
                                                            "kind": 218,
                                                            "properties": [
                                                                {
                                                                    "kind": 351,
                                                                    "asyncKeyword": null,
                                                                    "asteriskToken": {
                                                                        "kind": 67143222,
                                                                        "flags": 64,
                                                                        "start": 3336,
                                                                        "end": 3337
                                                                    },
                                                                    "getKeyword": null,
                                                                    "setKeyword": null,
                                                                    "method": {
                                                                        "kind": 209,
                                                                        "name": {
                                                                            "kind": 134299649,
                                                                            "text": "constructor",
                                                                            "rawText": "constructor",
                                                                            "flags": 96,
                                                                            "start": 3337,
                                                                            "end": 3348
                                                                        },
                                                                        "typeParameters": null,
                                                                        "formalParameterList": {
                                                                            "kind": 214,
                                                                            "formalParameters": [],
                                                                            "trailingComma": false,
                                                                            "flags": 160,
                                                                            "start": 3349,
                                                                            "end": 3350
                                                                        },
                                                                        "returnType": null,
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
                                                                                                "kind": 4259935,
                                                                                                "flags": 96,
                                                                                                "start": 3352,
                                                                                                "end": 3358
                                                                                            },
                                                                                            "argumentList": {
                                                                                                "kind": 256,
                                                                                                "elements": [],
                                                                                                "trailingComma": false,
                                                                                                "flags": 32,
                                                                                                "start": 3359,
                                                                                                "end": 3359
                                                                                            },
                                                                                            "flags": 268435488,
                                                                                            "start": 3352,
                                                                                            "end": 3360
                                                                                        },
                                                                                        "flags": 16,
                                                                                        "start": 3352,
                                                                                        "end": 3361
                                                                                    }
                                                                                ],
                                                                                "flags": 32,
                                                                                "start": 3352,
                                                                                "end": 3361
                                                                            },
                                                                            "flags": 32,
                                                                            "start": 3350,
                                                                            "end": 3363
                                                                        },
                                                                        "flags": 160,
                                                                        "start": 3348,
                                                                        "end": 3363
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 3336,
                                                                    "end": 3363
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 16,
                                                            "start": 3336,
                                                            "end": 3363
                                                        },
                                                        "flags": 48,
                                                        "start": 3335,
                                                        "end": 3364
                                                    },
                                                    "flags": 32,
                                                    "start": 3333,
                                                    "end": 3364
                                                },
                                                "flags": 16,
                                                "start": 3333,
                                                "end": 3365
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 3333,
                                        "end": 3365
                                    },
                                    "flags": 32,
                                    "start": 3331,
                                    "end": 3367
                                },
                                "flags": 2048,
                                "start": 3329,
                                "end": 3367
                            },
                            "flags": 2048,
                            "start": 3317,
                            "end": 3367
                        }
                    ],
                    "flags": 32,
                    "start": 3317,
                    "end": 3367
                },
                "flags": 3305,
                "start": 32,
                "end": 3369
            },
            "flags": 17,
            "start": 3297,
            "end": 3369
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 3369,
                "end": 3375
            },
            "name": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 96,
                "start": 3375,
                "end": 3377
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 80,
                        "start": 3377,
                        "end": 3385
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "B",
                        "rawText": "B",
                        "flags": 96,
                        "start": 3385,
                        "end": 3387
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "start": 3385,
                    "end": 3387
                },
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 96,
                                    "start": 3389,
                                    "end": 3401
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 2048,
                                    "start": 3402,
                                    "end": 3403
                                },
                                "returnType": null,
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
                                                        "flags": 96,
                                                        "start": 3405,
                                                        "end": 3407
                                                    },
                                                    "operand": {
                                                        "kind": 220,
                                                        "propertyList": {
                                                            "kind": 218,
                                                            "properties": [
                                                                {
                                                                    "kind": 351,
                                                                    "asyncKeyword": null,
                                                                    "asteriskToken": null,
                                                                    "getKeyword": {
                                                                        "kind": 16498,
                                                                        "flags": 96,
                                                                        "start": 3408,
                                                                        "end": 3411
                                                                    },
                                                                    "setKeyword": null,
                                                                    "method": {
                                                                        "kind": 209,
                                                                        "name": {
                                                                            "kind": 134299649,
                                                                            "text": "constructor",
                                                                            "rawText": "constructor",
                                                                            "flags": 96,
                                                                            "start": 3411,
                                                                            "end": 3423
                                                                        },
                                                                        "typeParameters": null,
                                                                        "formalParameterList": {
                                                                            "kind": 214,
                                                                            "formalParameters": [],
                                                                            "trailingComma": false,
                                                                            "flags": 1056,
                                                                            "start": 3424,
                                                                            "end": 3425
                                                                        },
                                                                        "returnType": null,
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
                                                                                                "kind": 4259935,
                                                                                                "flags": 96,
                                                                                                "start": 3427,
                                                                                                "end": 3433
                                                                                            },
                                                                                            "argumentList": {
                                                                                                "kind": 256,
                                                                                                "elements": [],
                                                                                                "trailingComma": false,
                                                                                                "flags": 32,
                                                                                                "start": 3434,
                                                                                                "end": 3434
                                                                                            },
                                                                                            "flags": 268435488,
                                                                                            "start": 3427,
                                                                                            "end": 3435
                                                                                        },
                                                                                        "flags": 16,
                                                                                        "start": 3427,
                                                                                        "end": 3436
                                                                                    }
                                                                                ],
                                                                                "flags": 32,
                                                                                "start": 3427,
                                                                                "end": 3436
                                                                            },
                                                                            "flags": 32,
                                                                            "start": 3425,
                                                                            "end": 3438
                                                                        },
                                                                        "flags": 1056,
                                                                        "start": 3423,
                                                                        "end": 3438
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 3408,
                                                                    "end": 3438
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 16,
                                                            "start": 3408,
                                                            "end": 3438
                                                        },
                                                        "flags": 48,
                                                        "start": 3407,
                                                        "end": 3439
                                                    },
                                                    "flags": 32,
                                                    "start": 3405,
                                                    "end": 3439
                                                },
                                                "flags": 16,
                                                "start": 3405,
                                                "end": 3440
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 3405,
                                        "end": 3440
                                    },
                                    "flags": 32,
                                    "start": 3403,
                                    "end": 3442
                                },
                                "flags": 2048,
                                "start": 3401,
                                "end": 3442
                            },
                            "flags": 2048,
                            "start": 3389,
                            "end": 3442
                        }
                    ],
                    "flags": 32,
                    "start": 3389,
                    "end": 3442
                },
                "flags": 3377,
                "start": 32,
                "end": 3444
            },
            "flags": 17,
            "start": 3369,
            "end": 3444
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 3444,
                "end": 3450
            },
            "name": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 96,
                "start": 3450,
                "end": 3452
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 80,
                        "start": 3452,
                        "end": 3460
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "B",
                        "rawText": "B",
                        "flags": 96,
                        "start": 3460,
                        "end": 3462
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "start": 3460,
                    "end": 3462
                },
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 96,
                                    "start": 3464,
                                    "end": 3476
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 2048,
                                    "start": 3477,
                                    "end": 3478
                                },
                                "returnType": null,
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
                                                        "flags": 96,
                                                        "start": 3480,
                                                        "end": 3482
                                                    },
                                                    "operand": {
                                                        "kind": 220,
                                                        "propertyList": {
                                                            "kind": 218,
                                                            "properties": [
                                                                {
                                                                    "kind": 351,
                                                                    "asyncKeyword": null,
                                                                    "asteriskToken": null,
                                                                    "getKeyword": null,
                                                                    "setKeyword": {
                                                                        "kind": 16499,
                                                                        "flags": 96,
                                                                        "start": 3483,
                                                                        "end": 3486
                                                                    },
                                                                    "method": {
                                                                        "kind": 209,
                                                                        "name": {
                                                                            "kind": 134299649,
                                                                            "text": "constructor",
                                                                            "rawText": "constructor",
                                                                            "flags": 96,
                                                                            "start": 3486,
                                                                            "end": 3498
                                                                        },
                                                                        "typeParameters": null,
                                                                        "formalParameterList": {
                                                                            "kind": 214,
                                                                            "formalParameters": [
                                                                                {
                                                                                    "kind": 134299649,
                                                                                    "text": "a",
                                                                                    "rawText": "a",
                                                                                    "flags": 96,
                                                                                    "start": 3499,
                                                                                    "end": 3500
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "flags": 608,
                                                                            "start": 3499,
                                                                            "end": 3501
                                                                        },
                                                                        "returnType": null,
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
                                                                                                "kind": 4259935,
                                                                                                "flags": 96,
                                                                                                "start": 3503,
                                                                                                "end": 3509
                                                                                            },
                                                                                            "argumentList": {
                                                                                                "kind": 256,
                                                                                                "elements": [],
                                                                                                "trailingComma": false,
                                                                                                "flags": 32,
                                                                                                "start": 3510,
                                                                                                "end": 3510
                                                                                            },
                                                                                            "flags": 268435488,
                                                                                            "start": 3503,
                                                                                            "end": 3511
                                                                                        },
                                                                                        "flags": 16,
                                                                                        "start": 3503,
                                                                                        "end": 3512
                                                                                    }
                                                                                ],
                                                                                "flags": 32,
                                                                                "start": 3503,
                                                                                "end": 3512
                                                                            },
                                                                            "flags": 32,
                                                                            "start": 3501,
                                                                            "end": 3514
                                                                        },
                                                                        "flags": 544,
                                                                        "start": 3498,
                                                                        "end": 3514
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 3483,
                                                                    "end": 3514
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 16,
                                                            "start": 3483,
                                                            "end": 3514
                                                        },
                                                        "flags": 48,
                                                        "start": 3482,
                                                        "end": 3515
                                                    },
                                                    "flags": 32,
                                                    "start": 3480,
                                                    "end": 3515
                                                },
                                                "flags": 16,
                                                "start": 3480,
                                                "end": 3516
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 3480,
                                        "end": 3516
                                    },
                                    "flags": 32,
                                    "start": 3478,
                                    "end": 3518
                                },
                                "flags": 2048,
                                "start": 3476,
                                "end": 3518
                            },
                            "flags": 2048,
                            "start": 3464,
                            "end": 3518
                        }
                    ],
                    "flags": 32,
                    "start": 3464,
                    "end": 3518
                },
                "flags": 3452,
                "start": 32,
                "end": 3520
            },
            "flags": 17,
            "start": 3444,
            "end": 3520
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 3735,
            "end": 3736
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 3743,
            "end": 3744
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 97,
                "start": 3744,
                "end": 3991
            },
            "flags": 16,
            "start": 3744,
            "end": 3991
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 3998,
            "end": 3999
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 97,
                "start": 3999,
                "end": 4001
            },
            "flags": 16,
            "start": 3999,
            "end": 4001
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 4007,
            "end": 4008
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 201392131,
                    "text": "\\u{110000}",
                    "rawText": "\"\\\\u{110000}\"",
                    "flags": 96,
                    "start": 4081,
                    "end": 4094
                },
                "flags": 32,
                "start": 4008,
                "end": 4095
            },
            "flags": 16,
            "start": 4008,
            "end": 4096
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 201392131,
                    "text": "\\u{FFFFFFF}",
                    "rawText": "\"\\\\u{FFFFFFF}\"",
                    "flags": 96,
                    "start": 4098,
                    "end": 4112
                },
                "flags": 32,
                "start": 4096,
                "end": 4113
            },
            "flags": 16,
            "start": 4096,
            "end": 4114
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "start": 4114,
                "end": 4231
            },
            "flags": 16,
            "start": 4114,
            "end": 4232
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
                                    "flags": 96,
                                    "start": 4235,
                                    "end": 4239
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 4235,
                            "end": 4239
                        },
                        "flags": 48,
                        "start": 4234,
                        "end": 4240
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 4240,
                        "end": 4242
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 0,
                        "rawText": "0",
                        "flags": 96,
                        "start": 4242,
                        "end": 4244
                    },
                    "flags": 32,
                    "start": 4234,
                    "end": 4244
                },
                "flags": 32,
                "start": 4232,
                "end": 4245
            },
            "flags": 16,
            "start": 4232,
            "end": 4246
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "start": 4246,
                "end": 4259
            },
            "flags": 16,
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
                                    "kind": 301,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "eval",
                                        "rawText": "eval",
                                        "flags": 96,
                                        "start": 4263,
                                        "end": 4267
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "start": 4269,
                                        "end": 4271
                                    },
                                    "flags": 32,
                                    "start": 4263,
                                    "end": 4271
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 4263,
                            "end": 4271
                        },
                        "flags": 48,
                        "start": 4262,
                        "end": 4272
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 4272,
                        "end": 4274
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 0,
                        "rawText": "0",
                        "flags": 96,
                        "start": 4274,
                        "end": 4276
                    },
                    "flags": 32,
                    "start": 4262,
                    "end": 4276
                },
                "flags": 32,
                "start": 4260,
                "end": 4277
            },
            "flags": 16,
            "start": 4260,
            "end": 4278
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "start": 4278,
                "end": 4291
            },
            "flags": 16,
            "start": 4278,
            "end": 4292
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
                                    "flags": 96,
                                    "start": 4295,
                                    "end": 4304
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 4295,
                            "end": 4304
                        },
                        "flags": 48,
                        "start": 4294,
                        "end": 4305
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 4305,
                        "end": 4307
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 0,
                        "rawText": "0",
                        "flags": 96,
                        "start": 4307,
                        "end": 4309
                    },
                    "flags": 32,
                    "start": 4294,
                    "end": 4309
                },
                "flags": 32,
                "start": 4292,
                "end": 4310
            },
            "flags": 16,
            "start": 4292,
            "end": 4311
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "start": 4311,
                "end": 4324
            },
            "flags": 16,
            "start": 4311,
            "end": 4325
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
                                    "kind": 301,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "arguments",
                                        "rawText": "arguments",
                                        "flags": 96,
                                        "start": 4328,
                                        "end": 4337
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "start": 4339,
                                        "end": 4341
                                    },
                                    "flags": 32,
                                    "start": 4328,
                                    "end": 4341
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 4328,
                            "end": 4341
                        },
                        "flags": 48,
                        "start": 4327,
                        "end": 4342
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 4342,
                        "end": 4344
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 0,
                        "rawText": "0",
                        "flags": 96,
                        "start": 4344,
                        "end": 4346
                    },
                    "flags": 32,
                    "start": 4327,
                    "end": 4346
                },
                "flags": 32,
                "start": 4325,
                "end": 4347
            },
            "flags": 16,
            "start": 4325,
            "end": 4348
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 81,
                "start": 4348,
                "end": 4475
            },
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "start": 4476,
                "end": 4477
            },
            "consequent": {
                "kind": 163,
                "label": {
                    "kind": 134299649,
                    "text": "label",
                    "rawText": "label",
                    "flags": 96,
                    "start": 4478,
                    "end": 4484
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 4484,
                    "end": 4485
                },
                "statement": {
                    "kind": 176,
                    "declareKeyword": null,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 64,
                        "start": 4485,
                        "end": 4494
                    },
                    "asteriskToken": null,
                    "name": {
                        "kind": 134299649,
                        "text": "f",
                        "rawText": "f",
                        "flags": 96,
                        "start": 4494,
                        "end": 4496
                    },
                    "typeParameters": null,
                    "formalParameterList": {
                        "kind": 214,
                        "formalParameters": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 4497,
                        "end": 4497
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 4499,
                            "end": 4499
                        },
                        "flags": 32,
                        "start": 4498,
                        "end": 4500
                    },
                    "returnType": null,
                    "flags": 16,
                    "start": 4485,
                    "end": 4500
                },
                "flags": 16,
                "start": 4478,
                "end": 4500
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 81,
            "start": 4348,
            "end": 4500
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 81,
                "start": 4500,
                "end": 4503
            },
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "start": 4504,
                "end": 4505
            },
            "consequent": {
                "kind": 163,
                "label": {
                    "kind": 134299649,
                    "text": "labelA",
                    "rawText": "labelA",
                    "flags": 96,
                    "start": 4506,
                    "end": 4513
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 4513,
                    "end": 4514
                },
                "statement": {
                    "kind": 163,
                    "label": {
                        "kind": 134299649,
                        "text": "labelB",
                        "rawText": "labelB",
                        "flags": 96,
                        "start": 4514,
                        "end": 4521
                    },
                    "colonToken": {
                        "kind": 21,
                        "flags": 64,
                        "start": 4521,
                        "end": 4522
                    },
                    "statement": {
                        "kind": 176,
                        "declareKeyword": null,
                        "asyncKeyword": null,
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 64,
                            "start": 4522,
                            "end": 4531
                        },
                        "asteriskToken": null,
                        "name": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 4531,
                            "end": 4533
                        },
                        "typeParameters": null,
                        "formalParameterList": {
                            "kind": 214,
                            "formalParameters": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 4534,
                            "end": 4534
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "start": 4536,
                                "end": 4536
                            },
                            "flags": 32,
                            "start": 4535,
                            "end": 4537
                        },
                        "returnType": null,
                        "flags": 16,
                        "start": 4522,
                        "end": 4537
                    },
                    "flags": 16,
                    "start": 4514,
                    "end": 4537
                },
                "flags": 16,
                "start": 4506,
                "end": 4537
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 81,
            "start": 4500,
            "end": 4537
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 81,
                "start": 4537,
                "end": 4540
            },
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "start": 4541,
                "end": 4542
            },
            "consequent": {
                "kind": 163,
                "label": {
                    "kind": 134299649,
                    "text": "label",
                    "rawText": "label",
                    "flags": 96,
                    "start": 4543,
                    "end": 4549
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 4549,
                    "end": 4550
                },
                "statement": {
                    "kind": 176,
                    "declareKeyword": null,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 64,
                        "start": 4550,
                        "end": 4559
                    },
                    "asteriskToken": null,
                    "name": {
                        "kind": 134299649,
                        "text": "f",
                        "rawText": "f",
                        "flags": 96,
                        "start": 4559,
                        "end": 4561
                    },
                    "typeParameters": null,
                    "formalParameterList": {
                        "kind": 214,
                        "formalParameters": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 4562,
                        "end": 4562
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 4564,
                            "end": 4564
                        },
                        "flags": 32,
                        "start": 4563,
                        "end": 4565
                    },
                    "returnType": null,
                    "flags": 16,
                    "start": 4550,
                    "end": 4565
                },
                "flags": 16,
                "start": 4543,
                "end": 4565
            },
            "elseKeyword": {
                "kind": 4194389,
                "flags": 64,
                "start": 4565,
                "end": 4570
            },
            "alternate": {
                "kind": 168,
                "flags": 16,
                "start": 4570,
                "end": 4572
            },
            "flags": 81,
            "start": 4537,
            "end": 4572
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 81,
                "start": 4572,
                "end": 4575
            },
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "start": 4576,
                "end": 4577
            },
            "consequent": {
                "kind": 168,
                "flags": 16,
                "start": 4578,
                "end": 4580
            },
            "elseKeyword": {
                "kind": 4194389,
                "flags": 64,
                "start": 4580,
                "end": 4585
            },
            "alternate": {
                "kind": 163,
                "label": {
                    "kind": 134299649,
                    "text": "label",
                    "rawText": "label",
                    "flags": 96,
                    "start": 4585,
                    "end": 4591
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 4591,
                    "end": 4592
                },
                "statement": {
                    "kind": 176,
                    "declareKeyword": null,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 64,
                        "start": 4592,
                        "end": 4601
                    },
                    "asteriskToken": null,
                    "name": {
                        "kind": 134299649,
                        "text": "f",
                        "rawText": "f",
                        "flags": 96,
                        "start": 4601,
                        "end": 4603
                    },
                    "typeParameters": null,
                    "formalParameterList": {
                        "kind": 214,
                        "formalParameters": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 4604,
                        "end": 4604
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 4606,
                            "end": 4606
                        },
                        "flags": 32,
                        "start": 4605,
                        "end": 4607
                    },
                    "returnType": null,
                    "flags": 16,
                    "start": 4592,
                    "end": 4607
                },
                "flags": 16,
                "start": 4585,
                "end": 4607
            },
            "flags": 81,
            "start": 4572,
            "end": 4607
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 4607,
                "end": 4704
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 4704,
                "end": 4705
            },
            "name": {
                "kind": 134299649,
                "text": "g",
                "rawText": "g",
                "flags": 96,
                "start": 4705,
                "end": 4707
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 4708,
                "end": 4708
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
                                "asyncKeyword": null,
                                "typeParameters": null,
                                "arrowPatameterList": {
                                    "kind": 342,
                                    "parameters": [
                                        {
                                            "kind": 281,
                                            "ellipsisToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 4712,
                                                "end": 4713
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "right": {
                                                "kind": 229,
                                                "yieldKeyword": {
                                                    "kind": 8454253,
                                                    "flags": 64,
                                                    "start": 4715,
                                                    "end": 4721
                                                },
                                                "delegate": false,
                                                "asteriskToken": null,
                                                "expression": null,
                                                "flags": 32,
                                                "start": 4715,
                                                "end": 4721
                                            },
                                            "flags": 32,
                                            "start": 4710,
                                            "end": 4721
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2,
                                    "start": 4712,
                                    "end": 4722
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 4722,
                                    "end": 4725
                                },
                                "contents": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 96,
                                    "start": 4725,
                                    "end": 4727
                                },
                                "flags": 34,
                                "start": 4710,
                                "end": 4727
                            },
                            "flags": 16,
                            "start": 4710,
                            "end": 4728
                        }
                    ],
                    "flags": 32,
                    "start": 4710,
                    "end": 4728
                },
                "flags": 32,
                "start": 4709,
                "end": 4730
            },
            "returnType": null,
            "flags": 272,
            "start": 4607,
            "end": 4730
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 4730,
            "end": 4731
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 4731,
                "end": 4740
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 4740,
                "end": 4741
            },
            "name": {
                "kind": 134299649,
                "text": "g",
                "rawText": "g",
                "flags": 96,
                "start": 4741,
                "end": 4743
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 4744,
                "end": 4744
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
                                "asyncKeyword": null,
                                "typeParameters": null,
                                "arrowPatameterList": {
                                    "kind": 342,
                                    "parameters": [
                                        {
                                            "kind": 281,
                                            "ellipsisToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 4748,
                                                "end": 4749
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "right": {
                                                "kind": 229,
                                                "yieldKeyword": {
                                                    "kind": 8454253,
                                                    "flags": 64,
                                                    "start": 4751,
                                                    "end": 4757
                                                },
                                                "delegate": false,
                                                "asteriskToken": null,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 96,
                                                    "start": 4757,
                                                    "end": 4759
                                                },
                                                "flags": 32,
                                                "start": 4751,
                                                "end": 4759
                                            },
                                            "flags": 32,
                                            "start": 4746,
                                            "end": 4759
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2,
                                    "start": 4748,
                                    "end": 4760
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 4760,
                                    "end": 4763
                                },
                                "contents": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 96,
                                    "start": 4763,
                                    "end": 4765
                                },
                                "flags": 34,
                                "start": 4746,
                                "end": 4765
                            },
                            "flags": 16,
                            "start": 4746,
                            "end": 4766
                        }
                    ],
                    "flags": 32,
                    "start": 4746,
                    "end": 4766
                },
                "flags": 32,
                "start": 4745,
                "end": 4768
            },
            "returnType": null,
            "flags": 272,
            "start": 4731,
            "end": 4768
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 4768,
            "end": 4769
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 4769,
                "end": 4778
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 4778,
                "end": 4779
            },
            "name": {
                "kind": 134299649,
                "text": "g",
                "rawText": "g",
                "flags": 96,
                "start": 4779,
                "end": 4781
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 4782,
                "end": 4782
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
                                "asyncKeyword": null,
                                "typeParameters": null,
                                "arrowPatameterList": {
                                    "kind": 342,
                                    "parameters": [
                                        {
                                            "kind": 281,
                                            "ellipsisToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 4786,
                                                "end": 4787
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "right": {
                                                "kind": 229,
                                                "yieldKeyword": {
                                                    "kind": 8454253,
                                                    "flags": 64,
                                                    "start": 4789,
                                                    "end": 4795
                                                },
                                                "delegate": true,
                                                "asteriskToken": {
                                                    "kind": 67143222,
                                                    "flags": 64,
                                                    "start": 4795,
                                                    "end": 4796
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 96,
                                                    "start": 4796,
                                                    "end": 4798
                                                },
                                                "flags": 32,
                                                "start": 4789,
                                                "end": 4798
                                            },
                                            "flags": 32,
                                            "start": 4784,
                                            "end": 4798
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2,
                                    "start": 4786,
                                    "end": 4799
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 4799,
                                    "end": 4802
                                },
                                "contents": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 96,
                                    "start": 4802,
                                    "end": 4804
                                },
                                "flags": 34,
                                "start": 4784,
                                "end": 4804
                            },
                            "flags": 16,
                            "start": 4784,
                            "end": 4805
                        }
                    ],
                    "flags": 32,
                    "start": 4784,
                    "end": 4805
                },
                "flags": 32,
                "start": 4783,
                "end": 4807
            },
            "returnType": null,
            "flags": 272,
            "start": 4769,
            "end": 4807
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 4807,
            "end": 4808
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 4808,
                "end": 4817
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 4817,
                "end": 4818
            },
            "name": {
                "kind": 134299649,
                "text": "g",
                "rawText": "g",
                "flags": 96,
                "start": 4818,
                "end": 4820
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 4821,
                "end": 4821
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
                                "asyncKeyword": null,
                                "typeParameters": null,
                                "arrowPatameterList": {
                                    "kind": 342,
                                    "parameters": [
                                        {
                                            "kind": 281,
                                            "ellipsisToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 4825,
                                                "end": 4826
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "right": {
                                                "kind": 198,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 4828,
                                                    "end": 4830
                                                },
                                                "operatorToken": {
                                                    "kind": 99634,
                                                    "flags": 96,
                                                    "start": 4830,
                                                    "end": 4832
                                                },
                                                "right": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "f",
                                                        "rawText": "f",
                                                        "flags": 96,
                                                        "start": 4832,
                                                        "end": 4834
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [
                                                            {
                                                                "kind": 229,
                                                                "yieldKeyword": {
                                                                    "kind": 8454253,
                                                                    "flags": 64,
                                                                    "start": 4835,
                                                                    "end": 4840
                                                                },
                                                                "delegate": false,
                                                                "asteriskToken": null,
                                                                "expression": null,
                                                                "flags": 32,
                                                                "start": 4835,
                                                                "end": 4840
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 4835,
                                                        "end": 4840
                                                    },
                                                    "flags": 268435488,
                                                    "start": 4832,
                                                    "end": 4841
                                                },
                                                "flags": 96,
                                                "start": 4828,
                                                "end": 4841
                                            },
                                            "flags": 32,
                                            "start": 4823,
                                            "end": 4841
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2,
                                    "start": 4825,
                                    "end": 4842
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 4842,
                                    "end": 4845
                                },
                                "contents": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 96,
                                    "start": 4845,
                                    "end": 4847
                                },
                                "flags": 34,
                                "start": 4823,
                                "end": 4847
                            },
                            "flags": 16,
                            "start": 4823,
                            "end": 4848
                        }
                    ],
                    "flags": 32,
                    "start": 4823,
                    "end": 4848
                },
                "flags": 32,
                "start": 4822,
                "end": 4850
            },
            "returnType": null,
            "flags": 272,
            "start": 4808,
            "end": 4850
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 4850,
            "end": 4851
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 4851,
                "end": 4860
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 4860,
                "end": 4861
            },
            "name": {
                "kind": 134299649,
                "text": "g",
                "rawText": "g",
                "flags": 96,
                "start": 4861,
                "end": 4863
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 4864,
                "end": 4864
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
                                "asyncKeyword": null,
                                "typeParameters": null,
                                "arrowPatameterList": {
                                    "kind": 342,
                                    "parameters": [
                                        {
                                            "kind": 212,
                                            "propertyList": {
                                                "kind": 213,
                                                "properties": [
                                                    {
                                                        "kind": 329,
                                                        "key": {
                                                            "kind": 194,
                                                            "expression": {
                                                                "kind": 229,
                                                                "yieldKeyword": {
                                                                    "kind": 8454253,
                                                                    "flags": 64,
                                                                    "start": 4870,
                                                                    "end": 4875
                                                                },
                                                                "delegate": false,
                                                                "asteriskToken": null,
                                                                "expression": null,
                                                                "flags": 32,
                                                                "start": 4870,
                                                                "end": 4875
                                                            },
                                                            "flags": 32,
                                                            "start": 4869,
                                                            "end": 4876
                                                        },
                                                        "value": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 4877,
                                                            "end": 4879
                                                        },
                                                        "initializer": null,
                                                        "flags": 32,
                                                        "start": 4869,
                                                        "end": 4879
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 4869,
                                                "end": 4879
                                            },
                                            "flags": 48,
                                            "start": 4868,
                                            "end": 4880
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2,
                                    "start": 4868,
                                    "end": 4881
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 4881,
                                    "end": 4884
                                },
                                "contents": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 96,
                                    "start": 4884,
                                    "end": 4886
                                },
                                "flags": 34,
                                "start": 4866,
                                "end": 4886
                            },
                            "flags": 16,
                            "start": 4866,
                            "end": 4887
                        }
                    ],
                    "flags": 32,
                    "start": 4866,
                    "end": 4887
                },
                "flags": 32,
                "start": 4865,
                "end": 4889
            },
            "returnType": null,
            "flags": 272,
            "start": 4851,
            "end": 4889
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 4889,
            "end": 4890
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 4890,
                "end": 4899
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 4899,
                "end": 4900
            },
            "name": {
                "kind": 134299649,
                "text": "g",
                "rawText": "g",
                "flags": 96,
                "start": 4900,
                "end": 4902
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 4903,
                "end": 4903
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
                                "asyncKeyword": null,
                                "typeParameters": null,
                                "arrowPatameterList": {
                                    "kind": 342,
                                    "parameters": [
                                        {
                                            "kind": 212,
                                            "propertyList": {
                                                "kind": 213,
                                                "properties": [
                                                    {
                                                        "kind": 281,
                                                        "ellipsisToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 4908,
                                                            "end": 4909
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "right": {
                                                            "kind": 229,
                                                            "yieldKeyword": {
                                                                "kind": 8454253,
                                                                "flags": 64,
                                                                "start": 4911,
                                                                "end": 4917
                                                            },
                                                            "delegate": false,
                                                            "asteriskToken": null,
                                                            "expression": null,
                                                            "flags": 32,
                                                            "start": 4911,
                                                            "end": 4917
                                                        },
                                                        "flags": 32,
                                                        "start": 4908,
                                                        "end": 4917
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 4908,
                                                "end": 4917
                                            },
                                            "flags": 48,
                                            "start": 4907,
                                            "end": 4918
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2,
                                    "start": 4907,
                                    "end": 4919
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 4919,
                                    "end": 4922
                                },
                                "contents": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 96,
                                    "start": 4922,
                                    "end": 4924
                                },
                                "flags": 34,
                                "start": 4905,
                                "end": 4924
                            },
                            "flags": 16,
                            "start": 4905,
                            "end": 4925
                        }
                    ],
                    "flags": 32,
                    "start": 4905,
                    "end": 4925
                },
                "flags": 32,
                "start": 4904,
                "end": 4927
            },
            "returnType": null,
            "flags": 272,
            "start": 4890,
            "end": 4927
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 4927,
            "end": 4928
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 4928,
                "end": 4937
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 4937,
                "end": 4938
            },
            "name": {
                "kind": 134299649,
                "text": "g",
                "rawText": "g",
                "flags": 96,
                "start": 4938,
                "end": 4940
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 4941,
                "end": 4941
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
                                "asyncKeyword": null,
                                "typeParameters": null,
                                "arrowPatameterList": {
                                    "kind": 342,
                                    "parameters": [
                                        {
                                            "kind": 201,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [
                                                    {
                                                        "kind": 281,
                                                        "ellipsisToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 4946,
                                                            "end": 4947
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "right": {
                                                            "kind": 229,
                                                            "yieldKeyword": {
                                                                "kind": 8454253,
                                                                "flags": 64,
                                                                "start": 4949,
                                                                "end": 4955
                                                            },
                                                            "delegate": false,
                                                            "asteriskToken": null,
                                                            "expression": null,
                                                            "flags": 32,
                                                            "start": 4949,
                                                            "end": 4955
                                                        },
                                                        "flags": 32,
                                                        "start": 4946,
                                                        "end": 4955
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 4946,
                                                "end": 4955
                                            },
                                            "flags": 32,
                                            "start": 4945,
                                            "end": 4956
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2,
                                    "start": 4945,
                                    "end": 4957
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 4957,
                                    "end": 4960
                                },
                                "contents": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 96,
                                    "start": 4960,
                                    "end": 4962
                                },
                                "flags": 34,
                                "start": 4943,
                                "end": 4962
                            },
                            "flags": 16,
                            "start": 4943,
                            "end": 4963
                        }
                    ],
                    "flags": 32,
                    "start": 4943,
                    "end": 4963
                },
                "flags": 32,
                "start": 4942,
                "end": 4965
            },
            "returnType": null,
            "flags": 272,
            "start": 4928,
            "end": 4965
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 4965,
            "end": 4966
        },
        {
            "kind": 120,
            "expression": {
                "kind": 371,
                "text": "/./",
                "flags": 96,
                "start": 4966,
                "end": 5061
            },
            "flags": 16,
            "start": 4966,
            "end": 5061
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "i",
                "rawText": "\\u0069",
                "flags": 16480,
                "start": 5062,
                "end": 5068
            },
            "flags": 16,
            "start": 5062,
            "end": 5069
        },
        {
            "kind": 120,
            "expression": {
                "kind": 371,
                "text": "/./",
                "flags": 96,
                "start": 5069,
                "end": 5073
            },
            "flags": 16,
            "start": 5069,
            "end": 5073
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "i",
                "rawText": "\\u{69}",
                "flags": 8288,
                "start": 5074,
                "end": 5080
            },
            "flags": 16,
            "start": 5074,
            "end": 5081
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 81,
                "start": 5081,
                "end": 5241
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 5243,
                    "end": 5243
                },
                "flags": 16,
                "start": 5241,
                "end": 5244
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "start": 5244,
                    "end": 5250
                },
                "catchParameter": {
                    "kind": 134299649,
                    "text": "e",
                    "rawText": "e",
                    "flags": 96,
                    "start": 5251,
                    "end": 5252
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [
                            {
                                "kind": 162,
                                "lexicalKeyword": {
                                    "kind": 41951307,
                                    "flags": 80,
                                    "start": 5255,
                                    "end": 5259
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
                                                "flags": 96,
                                                "start": 5259,
                                                "end": 5261
                                            },
                                            "type": null,
                                            "initializer": null,
                                            "flags": 16,
                                            "start": 5259,
                                            "end": 5261
                                        }
                                    ],
                                    "flags": 16,
                                    "start": 5259,
                                    "end": 5261
                                },
                                "flags": 33554448,
                                "start": 5255,
                                "end": 5262
                            }
                        ],
                        "flags": 16,
                        "start": 5255,
                        "end": 5262
                    },
                    "flags": 16,
                    "start": 5253,
                    "end": 5264
                },
                "flags": 80,
                "start": 5244,
                "end": 5264
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "start": 5081,
            "end": 5264
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 5264,
            "end": 5265
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 81,
                "start": 5265,
                "end": 5269
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 5271,
                    "end": 5271
                },
                "flags": 16,
                "start": 5269,
                "end": 5272
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "start": 5272,
                    "end": 5278
                },
                "catchParameter": {
                    "kind": 134299649,
                    "text": "e",
                    "rawText": "e",
                    "flags": 96,
                    "start": 5279,
                    "end": 5280
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [
                            {
                                "kind": 176,
                                "declareKeyword": null,
                                "asyncKeyword": null,
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 64,
                                    "start": 5283,
                                    "end": 5292
                                },
                                "asteriskToken": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "e",
                                    "rawText": "e",
                                    "flags": 96,
                                    "start": 5292,
                                    "end": 5294
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 5295,
                                    "end": 5295
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 5297,
                                        "end": 5297
                                    },
                                    "flags": 32,
                                    "start": 5296,
                                    "end": 5298
                                },
                                "returnType": null,
                                "flags": 16,
                                "start": 5283,
                                "end": 5298
                            }
                        ],
                        "flags": 16,
                        "start": 5283,
                        "end": 5298
                    },
                    "flags": 16,
                    "start": 5281,
                    "end": 5300
                },
                "flags": 80,
                "start": 5272,
                "end": 5300
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "start": 5265,
            "end": 5300
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 5300,
            "end": 5301
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 81,
                "start": 5301,
                "end": 5585
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 5587,
                    "end": 5587
                },
                "flags": 16,
                "start": 5585,
                "end": 5588
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "start": 5588,
                    "end": 5594
                },
                "catchParameter": {
                    "kind": 134299649,
                    "text": "e",
                    "rawText": "e",
                    "flags": 96,
                    "start": 5595,
                    "end": 5596
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [
                            {
                                "kind": 167,
                                "forKeyword": {
                                    "kind": 37757017,
                                    "flags": 80,
                                    "start": 5599,
                                    "end": 5603
                                },
                                "awaitKeyword": null,
                                "initializer": {
                                    "kind": 341,
                                    "varKeyword": {
                                        "kind": 37757002,
                                        "flags": 64,
                                        "start": 5604,
                                        "end": 5607
                                    },
                                    "declarationList": {
                                        "kind": 156,
                                        "declarations": [
                                            {
                                                "kind": 157,
                                                "binding": {
                                                    "kind": 134299649,
                                                    "text": "e",
                                                    "rawText": "e",
                                                    "flags": 96,
                                                    "start": 5607,
                                                    "end": 5609
                                                },
                                                "type": null,
                                                "initializer": null,
                                                "flags": 16,
                                                "start": 5607,
                                                "end": 5609
                                            }
                                        ],
                                        "flags": 16,
                                        "start": 5607,
                                        "end": 5609
                                    },
                                    "flags": 16,
                                    "start": 5599,
                                    "end": 5612
                                },
                                "ofKeyword": {
                                    "kind": 16793717,
                                    "flags": 64,
                                    "start": 5609,
                                    "end": 5612
                                },
                                "expression": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 96,
                                    "start": 5612,
                                    "end": 5614
                                },
                                "statement": {
                                    "kind": 168,
                                    "flags": 16,
                                    "start": 5615,
                                    "end": 5616
                                },
                                "flags": 80,
                                "start": 5599,
                                "end": 5616
                            }
                        ],
                        "flags": 16,
                        "start": 5599,
                        "end": 5616
                    },
                    "flags": 16,
                    "start": 5597,
                    "end": 5618
                },
                "flags": 80,
                "start": 5588,
                "end": 5618
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "start": 5301,
            "end": 5618
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 5618,
            "end": 5619
        }
    ],
    "isModule": false,
    "source": "\n// 12.2.5.1\n// Always throw a Syntax Error if code matches this production.\n({ a = 0 });\n\n// 12.2.9.1\n// It is a Syntax Error if the lexical token sequence matched by CoverParenthesizedExpressionAndArrowParameterList\n// cannot be parsed with no tokens left over using ParenthesizedExpression as the goal symbol.\n(...a);\n(a, ...b);\n\n// All Early Errors rules for ParenthesizedExpression and its derived productions also apply to\n// CoveredParenthesizedExpression of CoverParenthesizedExpressionAndArrowParameterList.\n(((...a)));\n(((a, ...b)));\n\n// 12.4.1\n// It is an early Reference Error if IsValidSimpleAssignmentTarget of LeftHandSideExpression is false.\n0++;\n0--;\n\n// 12.5.1\n// It is an early Reference Error if IsValidSimpleAssignmentTarget of UnaryExpression is false.\n++0;\n--0;\n\n// 12.14.1\n// It is a Syntax Error if LeftHandSideExpression is either an ObjectLiteral or an ArrayLiteral and the lexical\n// token sequence matched by LeftHandSideExpression cannot be parsed with no tokens left over using\n// AssignmentPattern as the goal symbol.\n({a: 0} = 0);\n({get a(){}} = 0);\n({set a(b){}} = 0);\n({a(b){}} = 0);\n[0] = 0;;\n\n// It is an early Reference Error if LeftHandSideExpression is neither an ObjectLiteral nor an ArrayLiteral and\n // IsValidSimpleAssignmentTarget of LeftHandSideExpression is false.\n0 = 0;;\n\n// It is an early Reference Error if IsValidSimpleAssignmentTarget of LeftHandSideExpression is false.\n({a}) = 0;;\n([a]) = 0;;\n({a} += 0);;\n[a] *= 0;;\n0 /= 0;;\n\n// 12.14.5.1\n// It is a Syntax Error if LeftHandSideExpression is either an ObjectLiteral or an ArrayLiteral and if the lexical\n// token sequence matched by LeftHandSideExpression cannot be parsed with no tokens left over using\n// AssignmentPattern as the goal symbol.\n[...{a: 0}] = 0;;\n[...[0]] = 0;;\n\n// It is a Syntax Error if LeftHandSideExpression is neither an ObjectLiteral nor an ArrayLiteral and\n// IsValidSimpleAssignmentTarget(LeftHandSideExpression) is false.\n[...0] = 0;;\n[...new a] = 0;;\n\n// 13.6.4.1\n// It is a Syntax Error if LeftHandSideExpression is either an ObjectLiteral or an ArrayLiteral and if the\n// lexical token sequence matched by LeftHandSideExpression cannot be parsed with no tokens left over using\n // AssignmentPattern as the goal symbol.\nfor({a: 0} in 0);\nfor([0] in 0);\nfor({a: 0} of 0);\nfor([0] of 0);\n\n// It is a Syntax Error if IsValidSimpleAssignmentTarget of LeftHandSideExpression is false.\nfor(0 in 0);\nfor(0 of 0);\n\n// It is a Syntax Error if the LeftHandSideExpression is CoverParenthesizedExpressionAndArrowParameterList\n// : ( Expression ) and Expression derives a production that would produce a Syntax Error according to these\n// rules if that production is substituted for LeftHandSideExpression. This rule is recursively applied.\nfor(({a: 0}) in 0);\nfor(([0]) in 0);\nfor(({a: 0}) of 0);\nfor(([0]) of 0);\nfor((0) in 0);\nfor((0) of 0);\n\n// 11.8.4.1\n// It is a Syntax Error if the MV of HexDigits > 1114111.\n\\\\u{110000};\n\\\\u{FFFFFFF};\n\n// 11.8.5.1\n// It is a Syntax Error if IdentifierPart contains a Unicode escape sequence.\n/./\\\\u0069;\n/./\\\\u{69};\n\n// 12.2.5.1\n// It is a Syntax Error if HasDirectSuper of MethodDefinition is true.\n({ a(){ super(); } });\n({ a(){ {{ if(0) (( super() )); }} } });\nclass A extends B { constructor() { !{constructor() { super(); }}; } }\nclass A extends B { constructor() { !{*constructor() { super(); }}; } }\nclass A extends B { constructor() { !{get constructor() { super(); }}; } }\nclass A extends B { constructor() { !{set constructor(a) { super(); }}; } }\n\n// 11.6.1.1\n// It is a Syntax Error if SV(UnicodeEscapeSequence) is neither the UTF16Encoding (10.1.1) of a single Unicode code\n// point with the Unicode property @{x201c}@ID_Start@{x201d}@ nor \"$\" or \"_\".\n\\\\u0000;\n\\\\u{0};\n// It is a Syntax Error if SV(UnicodeEscapeSequence) is neither the UTF16Encoding (10.1.1) of a single Unicode code\n// point with the Unicode property @{x201c}@ID_Continue@{x201d}@ nor \"$\" or \"_\" nor the UTF16Encoding of either <ZWNJ> or <ZWJ>.\na\\\\u0000;\na\\\\u{0};\n\n// 11.8.4.1\n// It is a Syntax Error if the MV of HexDigits > 1114111.\n(\"\\\\u{110000}\");\n(\"\\\\u{FFFFFFF}\");\n\n// 12.14.5.1\n// It is a Syntax Error if IsValidSimpleAssignmentTarget of IdentifierReference is false.\n\"use strict\"; ({eval} = 0);\n\"use strict\"; ({eval = 0} = 0);\n\"use strict\"; ({arguments} = 0);\n\"use strict\"; ({arguments = 0} = 0);\n\n// 13.6.1\n// It is a Syntax Error if IsLabelledFunction(Statement) is true for any occurrence of Statement in these rules.\nif(0) label: function f(){}\nif(0) labelA: labelB: function f(){}\nif(0) label: function f(){} else ;\nif(0) ; else label: function f(){}\n\n// 14.2.1\n// It is a Syntax Error if ArrowParameters Contains YieldExpression is true.\nfunction* g(){ (a = yield) => 0; };\nfunction* g(){ (a = yield b) => 0; };\nfunction* g(){ (a = yield* b) => 0; };\nfunction* g(){ (a = x + f(yield)) => 0; };\nfunction* g(){ ({[yield]: a}) => 0; };\nfunction* g(){ ({a = yield}) => 0; };\nfunction* g(){ ([a = yield]) => 0; };\n\n// 11.8.5.1\n// It is a Syntax Error if IdentifierPart contains a Unicode escape sequence.\n/./\\\\u0069;\n/./\\\\u{69};\n\n// Annex B 3.5 (13.14.1)\n// It is a Syntax Error if any element of the BoundNames of CatchParameter also occurs\n// in the LexicallyDeclaredNames of Block.\ntry {} catch(e) { let e; };\ntry {} catch(e) { function e(){} };\n\n// It is a Syntax Error if any element of the BoundNames of CatchParameter also occurs\n// in the VarDeclaredNames of Block,\n// unless that element is only bound by a VariableStatement or the VariableDeclarationList of a for statement,\n// or the ForBinding of a for-in statement.\ntry {} catch(e) { for(var e of 0); };\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 5620
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Did you mean to use a ':'? An '=' can only follow a property name when the containing object literal is part of a destructuring - start: 88, end: 89
✖ Expected '=>' - start: 319, end: 320
✖ Expected '=>' - start: 525, end: 526
✖ The operand of an increment or decrement operator must be a variable or a property access - start: 659, end: 661
✖ The operand of an increment or decrement operator must be a variable or a property access - start: 664, end: 666
✖ The operand of an increment or decrement operator must be a variable or a property access - start: 778, end: 779
✖ The operand of an increment or decrement operator must be a variable or a property access - start: 783, end: 784
✖ The left-hand side must be a variable or a property access. - start: 1051, end: 1059
✖ The left-hand side must be a variable or a property access. - start: 1065, end: 1078
✖ The left-hand side must be a variable or a property access. - start: 1084, end: 1098
✖ The left-hand side must be a variable or a property access. - start: 1104, end: 1114
✖ The left-hand side must be a variable or a property access. - start: 1122, end: 1124
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 1313, end: 1315
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 1429, end: 1431
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 1441, end: 1443
✖ Expression exprected. A compound assignment or an logical assignment cannot follow an object literal - start: 1449, end: 1455
✖ Expression exprected. A compound assignment or an logical assignment cannot follow an array literal - start: 1464, end: 1467
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 1473, end: 1476
✖ The left-hand side must be a variable or a property access. - start: 1762, end: 1764
✖ The left-hand side must be a variable or a property access. - start: 1777, end: 1779
✖ The left-hand side must be a variable or a property access. - start: 1960, end: 1962
✖ The left-hand side must be a variable or a property access. - start: 1977, end: 1979
✖ The left-hand side of a 'for...in' statement must be a variable or a property access. - start: 2267, end: 2269
✖ The left-hand side of a 'for...in' statement must be a variable or a property access. - start: 2282, end: 2284
✖ The left-hand side of a 'for...of' statement must be a variable or a property access. - start: 2300, end: 2302
✖ The left-hand side of a 'for...of' statement must be a variable or a property access. - start: 2315, end: 2317
✖ The left-hand side of a 'for...in' statement must be a variable or a property access. - start: 2422, end: 2424
✖ The left-hand side of a 'for...of' statement must be a variable or a property access. - start: 2435, end: 2437
✖ The left-hand side of a 'for...in' statement must be a variable or a property access. - start: 2777, end: 2779
✖ The left-hand side of a 'for...in' statement must be a variable or a property access. - start: 2794, end: 2796
✖ The left-hand side of a 'for...of' statement must be a variable or a property access. - start: 2814, end: 2816
✖ The left-hand side of a 'for...of' statement must be a variable or a property access. - start: 2831, end: 2833
✖ Invalid hexadecimal escape sequence - start: 2865, end: 2937
✖ Declaration or statement expected - start: 2865, end: 2938
✖ Unicode codepoint must not be greater than 0x10FFFF - start: 2938, end: 2938
✖ Declaration or statement expected - start: 2938, end: 2939
✖ Expected a `;` - start: 2940, end: 2941
✖ Invalid hexadecimal escape sequence - start: 2949, end: 2950
✖ Declaration or statement expected - start: 2949, end: 2951
✖ Unicode codepoint must not be greater than 0x10FFFF - start: 2951, end: 2951
✖ Declaration or statement expected - start: 2951, end: 2952
✖ Expected a `;` - start: 2953, end: 2954
✖ Invalid hexadecimal escape sequence - start: 3058, end: 3058
✖ Expected a `;` - start: 3058, end: 3059
✖ Invalid hexadecimal escape sequence - start: 3070, end: 3070
✖ Expected a `;` - start: 3070, end: 3071
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 3170, end: 3177
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 3205, end: 3212
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 3280, end: 3287
✖ Duplicate identifier - start: 3303, end: 3305
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 3352, end: 3359
✖ Duplicate identifier - start: 3375, end: 3377
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 3427, end: 3434
✖ Duplicate identifier - start: 3450, end: 3452
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 3503, end: 3510
✖ Invalid hexadecimal escape sequence - start: 3520, end: 3728
✖ Declaration or statement expected - start: 3520, end: 3729
✖ Declaration or statement expected - start: 3729, end: 3735
✖ Invalid hexadecimal escape sequence - start: 3736, end: 3737
✖ Declaration or statement expected - start: 3736, end: 3738
✖ Declaration or statement expected - start: 3738, end: 3743
✖ Invalid hexadecimal escape sequence - start: 3744, end: 3991
✖ Invalid hexadecimal escape sequence - start: 3991, end: 3991
✖ Expected a `;` - start: 3991, end: 3992
✖ Declaration or statement expected - start: 3992, end: 3998
✖ Invalid hexadecimal escape sequence - start: 3999, end: 4001
✖ Invalid hexadecimal escape sequence - start: 4001, end: 4001
✖ Expected a `;` - start: 4001, end: 4002
✖ Declaration or statement expected - start: 4002, end: 4007
✖ Function declarations cannot be used in a single-statement context - start: 4485, end: 4494
✖ Function declarations cannot be used in a single-statement context - start: 4522, end: 4531
✖ Function declarations cannot be used in a single-statement context - start: 4550, end: 4559
✖ Function declarations cannot be used in a single-statement context - start: 4592, end: 4601
✖ Invalid hexadecimal escape sequence - start: 5061, end: 5061
✖ Expected a `;` - start: 5061, end: 5062
✖ Invalid hexadecimal escape sequence - start: 5073, end: 5073
✖ Expected a `;` - start: 5073, end: 5074
✖ A block-scoped variable cannot shadow a catch clause binding - start: 5259, end: 5261
✖ A block-scoped variable cannot shadow a catch clause binding - start: 5292, end: 5294

```

