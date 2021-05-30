# Kataw parser test case

## Input

`````js
=> 0;
=>;
() =>;
=> {};
) => {};
, => {};
(,) => {};
return => {};
() => {'value': 42};

()=>{}/a;
()=>{} = a;
()=>{} = x;
()=>{} + a;
() => {}();
(x, y) => {}.x;
() => {}.x;

([...z],{},{[true]:a,true,q:[...t],},r) => {};

([...z],[...a],q,[...t],{r:{[(a--)]:{true,[(--a)]:js,ts:r,},} = (b = a),...x9},z0,[...z1],[...z],[[...z],...qq]) => {};

(z,[...a],[...q],[...t],{true},[...r] = (--a),[...js]) => {};

([...z],{a:[...q],true,true,true,},t,[...r],[...js],{true,ts:r,...x9},z0,[...z1],{...z}) => {};

 ({[async(...x)&&(a--)]:[...z],a:{[22&&true+async(...x)]:[...q],true},t:{[0]:r,true},true},[...js],ts,[...r],[...x9],z0) => {};

 ([...z] = (a--)?((b = a)):((b ^= a)&&(!a))^(a--),[...a],[...q],[t,{true,true,...r},...js],{[(a--)?((a--)):((!a)?(22):((b = a)))]:{true,...ts}},[...r],[...x9],{z0:z1,},{...z},{...z}) => {};

 ([...t],r,{...js},{true},{...ts},[...r]) => {};

 ([...t],r,js,{true,[(!a)?((a--)):((b = a)&&(~a))?((a--)?((false^async(...x))):((++a))):(0)]:[...ts],[(a--)?(async(...x)):(async(...x))]:[...r]},[...x9],[...z0],[...z1]) => {};

 ({true,[async(...x)^(--a)]:{[(b = a)]:{z:a},true,q:[...t],r:js},ts:{...r},true},[...x9],z0) => {};

 ([...z],[...a],q,[...t],{true,true},r,[...js],[],{...ts}) => {};

(z,[],{[((a--)||(~a))]:{true,a:q},t:[...r],[(b = a)-((b = a))||0&&0?(async(...x)):(0-0)?(0||0?((b = a)):((a--))):(22)&&/x/+true?(false):(async(...x))]:{js:[...ts],true,r:{x9:z0,true,[0-0?(0?(0):(0)):((a--))]:z1,true},[(!a)]:z,},...z},{[/x/g]:qq,[/x/g]:{z5:z6},...z7},{true,...z8},z9,{a0:[...a1] = (a--),a2:{a3:{a4:a5,a6:a7,[(++a)]:a8,a9:q0,...q1},...q2},true,}) => {};

({z:a,true,q:[...t],},{r:js,ts:r,...x9}) => {};


// Check that the early return introduced in ParsePrimaryExpression
// does not accept stray closing parentheses.
);
) => 0;
foo[()];
();

// Parameter lists with extra parens should be recognized as errors.
(()) => 0;
((x)) => 0;
((x, y)) => 0;
(x, (y)) => 0;
((x, y, z)) => 0;
(x, (y, z)) => 0;
((x, y), z) => 0;

// Arrow function formal parameters are parsed as StrictFormalParameters,
// which confusingly only implies that there are no duplicates.  Words
// reserved in strict mode, and eval or arguments, are indeed valid in
// sloppy mode.
eval => { 'use strict'; 0 };
arguments => { 'use strict'; 0 };
yield => { 'use strict'; 0 };
interface => { 'use strict'; 0 };
(eval) => { 'use strict'; 0 };
(arguments) => { 'use strict'; 0 };
(yield) => { 'use strict'; 0 };
(interface) => { 'use strict'; 0 };
(eval, bar) => { 'use strict'; 0 };
(bar, eval) => { 'use strict'; 0 };
(bar, arguments) => { 'use strict'; 0 };
(bar, yield) => { 'use strict'; 0 };
(bar, interface) => { 'use strict'; 0 };
    // TODO(aperez): Detecting duplicates does not work in PreParser.
    // "(bar, bar) => {};

    // The parameter list is parsed as an expression, but only
    // a comma-separated list of identifier is valid.
32 => {};
(32) => {};
(a, 32) => {};
if => {};
(if) => {};
(a, if) => {};
a + b => {};
(a + b) => {};
(a + b, c) => {};
(a, b - c) => {};
"a" => {};
("a") => {};
("a; b) => {};
(a, "b") => {};
-a => {};
(-a) => {};
(-a, b) => {};
(a, -b) => {};
{} => {};
a++ => {};
(a++) => {};
(a++, b) => {};
(a, b++) => {};
[] => {};
(foo ? bar : baz) => {};
(a, foo ? bar : baz) => {};
(foo ? bar : baz, a) => {};
(a.b, c) => {};
(c, a.b) => {};
(a['b'], c) => {};
(c, a['b']) => {};
(...a = b) => b;

(...rest - a) => b;
(a, ...b - 10) => b;

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
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "start": 2,
                "end": 4
            },
            "flags": 16,
            "start": 2,
            "end": 5
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 8,
            "end": 9
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 12,
                    "end": 15
                },
                "typeParameters": null,
                "parameters": [],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 15,
                    "end": 15
                },
                "flags": 32,
                "start": 9,
                "end": 15
            },
            "flags": 16,
            "start": 9,
            "end": 16
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 21,
                "end": 21
            },
            "flags": 16,
            "start": 19,
            "end": 22
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 22,
            "end": 23
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 30,
                "end": 30
            },
            "flags": 16,
            "start": 28,
            "end": 31
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 31,
            "end": 32
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 39,
                "end": 39
            },
            "flags": 16,
            "start": 37,
            "end": 40
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 40,
            "end": 41
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 16637,
                            "text": "",
                            "flags": 64,
                            "start": 43,
                            "end": 43
                        },
                        {
                            "kind": 16637,
                            "text": "",
                            "flags": 64,
                            "start": 44,
                            "end": 44
                        }
                    ],
                    "flags": 32,
                    "start": 41,
                    "end": 44
                },
                "flags": 32,
                "start": 41,
                "end": 45
            },
            "flags": 16,
            "start": 41,
            "end": 45
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 50,
                "end": 50
            },
            "flags": 16,
            "start": 48,
            "end": 51
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 51,
            "end": 52
        },
        {
            "kind": 161,
            "returnKeyword": {
                "kind": 37757022,
                "flags": 81,
                "start": 52,
                "end": 59
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 59,
                "end": 59
            },
            "flags": 16,
            "start": 0,
            "end": 52
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 64,
                "end": 64
            },
            "flags": 16,
            "start": 62,
            "end": 65
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 65,
            "end": 66
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 69,
                    "end": 72
                },
                "typeParameters": null,
                "parameters": [],
                "asyncKeyword": null,
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
                                    "kind": 201392131,
                                    "text": "value",
                                    "rawText": "'value'",
                                    "flags": 4194400,
                                    "start": 74,
                                    "end": 81
                                },
                                "flags": 16,
                                "start": 74,
                                "end": 81
                            }
                        ],
                        "flags": 4194336,
                        "start": 74,
                        "end": 81
                    },
                    "flags": 32,
                    "start": 72,
                    "end": 81
                },
                "flags": 32,
                "start": 66,
                "end": 81
            },
            "flags": 16,
            "start": 66,
            "end": 81
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 42,
                "rawText": "42",
                "flags": 96,
                "start": 82,
                "end": 85
            },
            "flags": 16,
            "start": 82,
            "end": 85
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 86,
            "end": 87
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 91,
                    "end": 93
                },
                "typeParameters": null,
                "parameters": [],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 94,
                        "end": 94
                    },
                    "flags": 32,
                    "start": 93,
                    "end": 95
                },
                "flags": 32,
                "start": 87,
                "end": 95
            },
            "flags": 16,
            "start": 87,
            "end": 95
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 221,
                    "text": "/a;",
                    "flags": 96,
                    "start": 95,
                    "end": 98
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 100,
                    "end": 100
                },
                "flags": 268435488,
                "start": 95,
                "end": 101
            },
            "flags": 16,
            "start": 95,
            "end": 101
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 104,
                "end": 104
            },
            "flags": 16,
            "start": 103,
            "end": 107
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 107,
                "end": 109
            },
            "flags": 16,
            "start": 107,
            "end": 110
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 113,
                        "end": 115
                    },
                    "typeParameters": null,
                    "parameters": [],
                    "asyncKeyword": null,
                    "returnType": null,
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 116,
                            "end": 116
                        },
                        "flags": 32,
                        "start": 115,
                        "end": 117
                    },
                    "flags": 32,
                    "start": 110,
                    "end": 117
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 117,
                    "end": 119
                },
                "right": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 119,
                    "end": 121
                },
                "flags": 32,
                "start": 110,
                "end": 121
            },
            "flags": 16,
            "start": 110,
            "end": 122
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 125,
                        "end": 127
                    },
                    "typeParameters": null,
                    "parameters": [],
                    "asyncKeyword": null,
                    "returnType": null,
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 128,
                            "end": 128
                        },
                        "flags": 32,
                        "start": 127,
                        "end": 129
                    },
                    "flags": 32,
                    "start": 122,
                    "end": 129
                },
                "operatorToken": {
                    "kind": 34098,
                    "flags": 64,
                    "start": 129,
                    "end": 131
                },
                "right": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 131,
                    "end": 133
                },
                "flags": 32,
                "start": 122,
                "end": 133
            },
            "flags": 16,
            "start": 122,
            "end": 134
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 137,
                        "end": 140
                    },
                    "typeParameters": null,
                    "parameters": [],
                    "asyncKeyword": null,
                    "returnType": null,
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 142,
                            "end": 142
                        },
                        "flags": 32,
                        "start": 140,
                        "end": 143
                    },
                    "flags": 32,
                    "start": 134,
                    "end": 143
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 144,
                    "end": 144
                },
                "flags": 268435488,
                "start": 134,
                "end": 145
            },
            "flags": 16,
            "start": 134,
            "end": 146
        },
        {
            "kind": 120,
            "expression": {
                "kind": 129,
                "member": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 153,
                        "end": 156
                    },
                    "typeParameters": null,
                    "parameters": [
                        [
                            {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 148,
                                "end": 149
                            },
                            {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 150,
                                "end": 152
                            }
                        ]
                    ],
                    "asyncKeyword": null,
                    "returnType": null,
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 158,
                            "end": 158
                        },
                        "flags": 32,
                        "start": 156,
                        "end": 159
                    },
                    "flags": 32,
                    "start": 146,
                    "end": 159
                },
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 160,
                    "end": 161
                },
                "flags": 536870944,
                "start": 146,
                "end": 161
            },
            "flags": 16,
            "start": 146,
            "end": 162
        },
        {
            "kind": 120,
            "expression": {
                "kind": 129,
                "member": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 165,
                        "end": 168
                    },
                    "typeParameters": null,
                    "parameters": [],
                    "asyncKeyword": null,
                    "returnType": null,
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 170,
                            "end": 170
                        },
                        "flags": 32,
                        "start": 168,
                        "end": 171
                    },
                    "flags": 32,
                    "start": 162,
                    "end": 171
                },
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 172,
                    "end": 173
                },
                "flags": 536870944,
                "start": 162,
                "end": 173
            },
            "flags": 16,
            "start": 162,
            "end": 174
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 215,
                    "end": 218
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 223,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 178,
                                            "end": 181
                                        },
                                        "argument": {
                                            "kind": 134299649,
                                            "text": "z",
                                            "rawText": "z",
                                            "flags": 96,
                                            "start": 181,
                                            "end": 182
                                        },
                                        "flags": 32,
                                        "start": 178,
                                        "end": 182
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 178,
                                "end": 182
                            },
                            "flags": 32,
                            "start": 177,
                            "end": 183
                        },
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 185,
                                "end": 185
                            },
                            "flags": 48,
                            "start": 184,
                            "end": 186
                        },
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "generatorToken": null,
                                        "left": {
                                            "kind": 194,
                                            "expression": {
                                                "kind": 24752947,
                                                "flags": 96,
                                                "start": 189,
                                                "end": 193
                                            },
                                            "flags": 32,
                                            "start": 188,
                                            "end": 194
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 195,
                                            "end": 196
                                        },
                                        "flags": 32,
                                        "start": 188,
                                        "end": 196
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "true",
                                        "rawText": "true",
                                        "flags": 96,
                                        "start": 197,
                                        "end": 201
                                    },
                                    {
                                        "kind": 219,
                                        "generatorToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "q",
                                            "rawText": "q",
                                            "flags": 96,
                                            "start": 202,
                                            "end": 203
                                        },
                                        "right": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [
                                                    {
                                                        "kind": 223,
                                                        "ellipsisToken": {
                                                            "kind": 524302,
                                                            "flags": 64,
                                                            "start": 205,
                                                            "end": 208
                                                        },
                                                        "argument": {
                                                            "kind": 134299649,
                                                            "text": "t",
                                                            "rawText": "t",
                                                            "flags": 96,
                                                            "start": 208,
                                                            "end": 209
                                                        },
                                                        "flags": 32,
                                                        "start": 205,
                                                        "end": 209
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 205,
                                                "end": 209
                                            },
                                            "flags": 32,
                                            "start": 204,
                                            "end": 210
                                        },
                                        "flags": 32,
                                        "start": 202,
                                        "end": 210
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 16,
                                "start": 188,
                                "end": 211
                            },
                            "flags": 48,
                            "start": 187,
                            "end": 212
                        },
                        {
                            "kind": 134299649,
                            "text": "r",
                            "rawText": "r",
                            "flags": 96,
                            "start": 213,
                            "end": 214
                        }
                    ]
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 220,
                        "end": 220
                    },
                    "flags": 32,
                    "start": 218,
                    "end": 221
                },
                "flags": 34,
                "start": 174,
                "end": 221
            },
            "flags": 16,
            "start": 174,
            "end": 222
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 336,
                    "end": 339
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 223,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 226,
                                            "end": 229
                                        },
                                        "argument": {
                                            "kind": 134299649,
                                            "text": "z",
                                            "rawText": "z",
                                            "flags": 96,
                                            "start": 229,
                                            "end": 230
                                        },
                                        "flags": 32,
                                        "start": 226,
                                        "end": 230
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 226,
                                "end": 230
                            },
                            "flags": 32,
                            "start": 225,
                            "end": 231
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 223,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 233,
                                            "end": 236
                                        },
                                        "argument": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 236,
                                            "end": 237
                                        },
                                        "flags": 32,
                                        "start": 233,
                                        "end": 237
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 233,
                                "end": 237
                            },
                            "flags": 32,
                            "start": 232,
                            "end": 238
                        },
                        {
                            "kind": 134299649,
                            "text": "q",
                            "rawText": "q",
                            "flags": 96,
                            "start": 239,
                            "end": 240
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 223,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 242,
                                            "end": 245
                                        },
                                        "argument": {
                                            "kind": 134299649,
                                            "text": "t",
                                            "rawText": "t",
                                            "flags": 96,
                                            "start": 245,
                                            "end": 246
                                        },
                                        "flags": 32,
                                        "start": 242,
                                        "end": 246
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 242,
                                "end": 246
                            },
                            "flags": 32,
                            "start": 241,
                            "end": 247
                        },
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "generatorToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "r",
                                            "rawText": "r",
                                            "flags": 96,
                                            "start": 249,
                                            "end": 250
                                        },
                                        "right": {
                                            "kind": 125,
                                            "left": {
                                                "kind": 220,
                                                "propertyList": {
                                                    "kind": 218,
                                                    "properties": [
                                                        {
                                                            "kind": 219,
                                                            "generatorToken": null,
                                                            "left": {
                                                                "kind": 194,
                                                                "expression": {
                                                                    "kind": 121,
                                                                    "expression": {
                                                                        "kind": 127,
                                                                        "operandToken": {
                                                                            "kind": 196636,
                                                                            "flags": 64,
                                                                            "start": 255,
                                                                            "end": 257
                                                                        },
                                                                        "operand": {
                                                                            "kind": 134299649,
                                                                            "text": "a",
                                                                            "rawText": "a",
                                                                            "flags": 96,
                                                                            "start": 254,
                                                                            "end": 255
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 253,
                                                                        "end": 257
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 253,
                                                                    "end": 258
                                                                },
                                                                "flags": 32,
                                                                "start": 252,
                                                                "end": 259
                                                            },
                                                            "right": {
                                                                "kind": 220,
                                                                "propertyList": {
                                                                    "kind": 218,
                                                                    "properties": [
                                                                        {
                                                                            "kind": 134299649,
                                                                            "text": "true",
                                                                            "rawText": "true",
                                                                            "flags": 96,
                                                                            "start": 261,
                                                                            "end": 265
                                                                        },
                                                                        {
                                                                            "kind": 219,
                                                                            "generatorToken": null,
                                                                            "left": {
                                                                                "kind": 194,
                                                                                "expression": {
                                                                                    "kind": 121,
                                                                                    "expression": {
                                                                                        "kind": 128,
                                                                                        "operandToken": {
                                                                                            "kind": 196636,
                                                                                            "flags": 64,
                                                                                            "start": 268,
                                                                                            "end": 270
                                                                                        },
                                                                                        "operand": {
                                                                                            "kind": 134299649,
                                                                                            "text": "a",
                                                                                            "rawText": "a",
                                                                                            "flags": 96,
                                                                                            "start": 270,
                                                                                            "end": 271
                                                                                        },
                                                                                        "flags": 32,
                                                                                        "start": 268,
                                                                                        "end": 271
                                                                                    },
                                                                                    "flags": 32,
                                                                                    "start": 267,
                                                                                    "end": 272
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 266,
                                                                                "end": 273
                                                                            },
                                                                            "right": {
                                                                                "kind": 134299649,
                                                                                "text": "js",
                                                                                "rawText": "js",
                                                                                "flags": 96,
                                                                                "start": 274,
                                                                                "end": 276
                                                                            },
                                                                            "flags": 32,
                                                                            "start": 266,
                                                                            "end": 276
                                                                        },
                                                                        {
                                                                            "kind": 219,
                                                                            "generatorToken": null,
                                                                            "left": {
                                                                                "kind": 134299649,
                                                                                "text": "ts",
                                                                                "rawText": "ts",
                                                                                "flags": 96,
                                                                                "start": 277,
                                                                                "end": 279
                                                                            },
                                                                            "right": {
                                                                                "kind": 134299649,
                                                                                "text": "r",
                                                                                "rawText": "r",
                                                                                "flags": 96,
                                                                                "start": 280,
                                                                                "end": 281
                                                                            },
                                                                            "flags": 32,
                                                                            "start": 277,
                                                                            "end": 281
                                                                        }
                                                                    ],
                                                                    "trailingComma": true,
                                                                    "flags": 16,
                                                                    "start": 261,
                                                                    "end": 282
                                                                },
                                                                "flags": 48,
                                                                "start": 260,
                                                                "end": 283
                                                            },
                                                            "flags": 32,
                                                            "start": 252,
                                                            "end": 283
                                                        }
                                                    ],
                                                    "trailingComma": true,
                                                    "flags": 16,
                                                    "start": 252,
                                                    "end": 284
                                                },
                                                "flags": 48,
                                                "start": 251,
                                                "end": 285
                                            },
                                            "operatorToken": {
                                                "kind": 4125,
                                                "flags": 64,
                                                "start": 285,
                                                "end": 287
                                            },
                                            "right": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "b",
                                                        "rawText": "b",
                                                        "flags": 96,
                                                        "start": 289,
                                                        "end": 290
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 64,
                                                        "start": 290,
                                                        "end": 292
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 96,
                                                        "start": 292,
                                                        "end": 294
                                                    },
                                                    "flags": 32,
                                                    "start": 287,
                                                    "end": 294
                                                },
                                                "flags": 32,
                                                "start": 287,
                                                "end": 295
                                            },
                                            "flags": 32,
                                            "start": 251,
                                            "end": 295
                                        },
                                        "flags": 32,
                                        "start": 249,
                                        "end": 295
                                    },
                                    {
                                        "kind": 224,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 296,
                                            "end": 299
                                        },
                                        "argument": {
                                            "kind": 134299649,
                                            "text": "x9",
                                            "rawText": "x9",
                                            "flags": 96,
                                            "start": 299,
                                            "end": 301
                                        },
                                        "flags": 32,
                                        "start": 296,
                                        "end": 301
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 249,
                                "end": 301
                            },
                            "flags": 48,
                            "start": 248,
                            "end": 302
                        },
                        {
                            "kind": 134299649,
                            "text": "z0",
                            "rawText": "z0",
                            "flags": 96,
                            "start": 303,
                            "end": 305
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 223,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 307,
                                            "end": 310
                                        },
                                        "argument": {
                                            "kind": 134299649,
                                            "text": "z1",
                                            "rawText": "z1",
                                            "flags": 96,
                                            "start": 310,
                                            "end": 312
                                        },
                                        "flags": 32,
                                        "start": 307,
                                        "end": 312
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 307,
                                "end": 312
                            },
                            "flags": 32,
                            "start": 306,
                            "end": 313
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 223,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 315,
                                            "end": 318
                                        },
                                        "argument": {
                                            "kind": 134299649,
                                            "text": "z",
                                            "rawText": "z",
                                            "flags": 96,
                                            "start": 318,
                                            "end": 319
                                        },
                                        "flags": 32,
                                        "start": 315,
                                        "end": 319
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 315,
                                "end": 319
                            },
                            "flags": 32,
                            "start": 314,
                            "end": 320
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 223,
                                                    "ellipsisToken": {
                                                        "kind": 524302,
                                                        "flags": 64,
                                                        "start": 323,
                                                        "end": 326
                                                    },
                                                    "argument": {
                                                        "kind": 134299649,
                                                        "text": "z",
                                                        "rawText": "z",
                                                        "flags": 96,
                                                        "start": 326,
                                                        "end": 327
                                                    },
                                                    "flags": 32,
                                                    "start": 323,
                                                    "end": 327
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 323,
                                            "end": 327
                                        },
                                        "flags": 32,
                                        "start": 322,
                                        "end": 328
                                    },
                                    {
                                        "kind": 223,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 329,
                                            "end": 332
                                        },
                                        "argument": {
                                            "kind": 134299649,
                                            "text": "qq",
                                            "rawText": "qq",
                                            "flags": 96,
                                            "start": 332,
                                            "end": 334
                                        },
                                        "flags": 32,
                                        "start": 329,
                                        "end": 334
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 322,
                                "end": 334
                            },
                            "flags": 32,
                            "start": 321,
                            "end": 335
                        }
                    ]
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 341,
                        "end": 341
                    },
                    "flags": 32,
                    "start": 339,
                    "end": 342
                },
                "flags": 34,
                "start": 222,
                "end": 342
            },
            "flags": 16,
            "start": 222,
            "end": 343
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 399,
                    "end": 402
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "start": 346,
                            "end": 347
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 223,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 349,
                                            "end": 352
                                        },
                                        "argument": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 352,
                                            "end": 353
                                        },
                                        "flags": 32,
                                        "start": 349,
                                        "end": 353
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 349,
                                "end": 353
                            },
                            "flags": 32,
                            "start": 348,
                            "end": 354
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 223,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 356,
                                            "end": 359
                                        },
                                        "argument": {
                                            "kind": 134299649,
                                            "text": "q",
                                            "rawText": "q",
                                            "flags": 96,
                                            "start": 359,
                                            "end": 360
                                        },
                                        "flags": 32,
                                        "start": 356,
                                        "end": 360
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 356,
                                "end": 360
                            },
                            "flags": 32,
                            "start": 355,
                            "end": 361
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 223,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 363,
                                            "end": 366
                                        },
                                        "argument": {
                                            "kind": 134299649,
                                            "text": "t",
                                            "rawText": "t",
                                            "flags": 96,
                                            "start": 366,
                                            "end": 367
                                        },
                                        "flags": 32,
                                        "start": 363,
                                        "end": 367
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 363,
                                "end": 367
                            },
                            "flags": 32,
                            "start": 362,
                            "end": 368
                        },
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 134299649,
                                        "text": "true",
                                        "rawText": "true",
                                        "flags": 96,
                                        "start": 370,
                                        "end": 374
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 370,
                                "end": 374
                            },
                            "flags": 48,
                            "start": 369,
                            "end": 375
                        },
                        {
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
                                                "start": 377,
                                                "end": 380
                                            },
                                            "argument": {
                                                "kind": 134299649,
                                                "text": "r",
                                                "rawText": "r",
                                                "flags": 96,
                                                "start": 380,
                                                "end": 381
                                            },
                                            "flags": 32,
                                            "start": 377,
                                            "end": 381
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 377,
                                    "end": 381
                                },
                                "flags": 32,
                                "start": 376,
                                "end": 382
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 382,
                                "end": 384
                            },
                            "right": {
                                "kind": 121,
                                "expression": {
                                    "kind": 128,
                                    "operandToken": {
                                        "kind": 196636,
                                        "flags": 64,
                                        "start": 386,
                                        "end": 388
                                    },
                                    "operand": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 388,
                                        "end": 389
                                    },
                                    "flags": 32,
                                    "start": 386,
                                    "end": 389
                                },
                                "flags": 32,
                                "start": 384,
                                "end": 390
                            },
                            "flags": 32,
                            "start": 376,
                            "end": 390
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 223,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 392,
                                            "end": 395
                                        },
                                        "argument": {
                                            "kind": 134299649,
                                            "text": "js",
                                            "rawText": "js",
                                            "flags": 96,
                                            "start": 395,
                                            "end": 397
                                        },
                                        "flags": 32,
                                        "start": 392,
                                        "end": 397
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 392,
                                "end": 397
                            },
                            "flags": 32,
                            "start": 391,
                            "end": 398
                        }
                    ]
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 404,
                        "end": 404
                    },
                    "flags": 32,
                    "start": 402,
                    "end": 405
                },
                "flags": 34,
                "start": 343,
                "end": 405
            },
            "flags": 16,
            "start": 343,
            "end": 406
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 496,
                    "end": 499
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 223,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 410,
                                            "end": 413
                                        },
                                        "argument": {
                                            "kind": 134299649,
                                            "text": "z",
                                            "rawText": "z",
                                            "flags": 96,
                                            "start": 413,
                                            "end": 414
                                        },
                                        "flags": 32,
                                        "start": 410,
                                        "end": 414
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 410,
                                "end": 414
                            },
                            "flags": 32,
                            "start": 409,
                            "end": 415
                        },
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "generatorToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 417,
                                            "end": 418
                                        },
                                        "right": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [
                                                    {
                                                        "kind": 223,
                                                        "ellipsisToken": {
                                                            "kind": 524302,
                                                            "flags": 64,
                                                            "start": 420,
                                                            "end": 423
                                                        },
                                                        "argument": {
                                                            "kind": 134299649,
                                                            "text": "q",
                                                            "rawText": "q",
                                                            "flags": 96,
                                                            "start": 423,
                                                            "end": 424
                                                        },
                                                        "flags": 32,
                                                        "start": 420,
                                                        "end": 424
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 420,
                                                "end": 424
                                            },
                                            "flags": 32,
                                            "start": 419,
                                            "end": 425
                                        },
                                        "flags": 32,
                                        "start": 417,
                                        "end": 425
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "true",
                                        "rawText": "true",
                                        "flags": 96,
                                        "start": 426,
                                        "end": 430
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "true",
                                        "rawText": "true",
                                        "flags": 96,
                                        "start": 431,
                                        "end": 435
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "true",
                                        "rawText": "true",
                                        "flags": 96,
                                        "start": 436,
                                        "end": 440
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 16,
                                "start": 417,
                                "end": 441
                            },
                            "flags": 48,
                            "start": 416,
                            "end": 442
                        },
                        {
                            "kind": 134299649,
                            "text": "t",
                            "rawText": "t",
                            "flags": 96,
                            "start": 443,
                            "end": 444
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 223,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 446,
                                            "end": 449
                                        },
                                        "argument": {
                                            "kind": 134299649,
                                            "text": "r",
                                            "rawText": "r",
                                            "flags": 96,
                                            "start": 449,
                                            "end": 450
                                        },
                                        "flags": 32,
                                        "start": 446,
                                        "end": 450
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 446,
                                "end": 450
                            },
                            "flags": 32,
                            "start": 445,
                            "end": 451
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 223,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 453,
                                            "end": 456
                                        },
                                        "argument": {
                                            "kind": 134299649,
                                            "text": "js",
                                            "rawText": "js",
                                            "flags": 96,
                                            "start": 456,
                                            "end": 458
                                        },
                                        "flags": 32,
                                        "start": 453,
                                        "end": 458
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 453,
                                "end": 458
                            },
                            "flags": 32,
                            "start": 452,
                            "end": 459
                        },
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 134299649,
                                        "text": "true",
                                        "rawText": "true",
                                        "flags": 96,
                                        "start": 461,
                                        "end": 465
                                    },
                                    {
                                        "kind": 219,
                                        "generatorToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "ts",
                                            "rawText": "ts",
                                            "flags": 96,
                                            "start": 466,
                                            "end": 468
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "r",
                                            "rawText": "r",
                                            "flags": 96,
                                            "start": 469,
                                            "end": 470
                                        },
                                        "flags": 32,
                                        "start": 466,
                                        "end": 470
                                    },
                                    {
                                        "kind": 224,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 471,
                                            "end": 474
                                        },
                                        "argument": {
                                            "kind": 134299649,
                                            "text": "x9",
                                            "rawText": "x9",
                                            "flags": 96,
                                            "start": 474,
                                            "end": 476
                                        },
                                        "flags": 32,
                                        "start": 471,
                                        "end": 476
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 461,
                                "end": 476
                            },
                            "flags": 48,
                            "start": 460,
                            "end": 477
                        },
                        {
                            "kind": 134299649,
                            "text": "z0",
                            "rawText": "z0",
                            "flags": 96,
                            "start": 478,
                            "end": 480
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 223,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 482,
                                            "end": 485
                                        },
                                        "argument": {
                                            "kind": 134299649,
                                            "text": "z1",
                                            "rawText": "z1",
                                            "flags": 96,
                                            "start": 485,
                                            "end": 487
                                        },
                                        "flags": 32,
                                        "start": 482,
                                        "end": 487
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 482,
                                "end": 487
                            },
                            "flags": 32,
                            "start": 481,
                            "end": 488
                        },
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 224,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 490,
                                            "end": 493
                                        },
                                        "argument": {
                                            "kind": 134299649,
                                            "text": "z",
                                            "rawText": "z",
                                            "flags": 96,
                                            "start": 493,
                                            "end": 494
                                        },
                                        "flags": 32,
                                        "start": 490,
                                        "end": 494
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 490,
                                "end": 494
                            },
                            "flags": 48,
                            "start": 489,
                            "end": 495
                        }
                    ]
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 501,
                        "end": 501
                    },
                    "flags": 32,
                    "start": 499,
                    "end": 502
                },
                "flags": 34,
                "start": 406,
                "end": 502
            },
            "flags": 16,
            "start": 406,
            "end": 503
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 625,
                    "end": 628
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "generatorToken": null,
                                        "left": {
                                            "kind": 194,
                                            "expression": {
                                                "kind": 198,
                                                "left": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "async",
                                                        "rawText": "async",
                                                        "flags": 96,
                                                        "start": 509,
                                                        "end": 514
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [
                                                            {
                                                                "kind": 223,
                                                                "ellipsisToken": {
                                                                    "kind": 524302,
                                                                    "flags": 64,
                                                                    "start": 515,
                                                                    "end": 518
                                                                },
                                                                "flags": 32,
                                                                "start": 515,
                                                                "end": 519
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 509,
                                                        "end": 509
                                                    },
                                                    "flags": 268435488,
                                                    "start": 509,
                                                    "end": 520
                                                },
                                                "operatorToken": {
                                                    "kind": 33594,
                                                    "flags": 64,
                                                    "start": 520,
                                                    "end": 522
                                                },
                                                "right": {
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 127,
                                                        "operandToken": {
                                                            "kind": 196636,
                                                            "flags": 64,
                                                            "start": 524,
                                                            "end": 526
                                                        },
                                                        "operand": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 523,
                                                            "end": 524
                                                        },
                                                        "flags": 32,
                                                        "start": 522,
                                                        "end": 526
                                                    },
                                                    "flags": 32,
                                                    "start": 522,
                                                    "end": 527
                                                },
                                                "flags": 32,
                                                "start": 509,
                                                "end": 527
                                            },
                                            "flags": 32,
                                            "start": 508,
                                            "end": 528
                                        },
                                        "right": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [
                                                    {
                                                        "kind": 223,
                                                        "ellipsisToken": {
                                                            "kind": 524302,
                                                            "flags": 64,
                                                            "start": 530,
                                                            "end": 533
                                                        },
                                                        "argument": {
                                                            "kind": 134299649,
                                                            "text": "z",
                                                            "rawText": "z",
                                                            "flags": 96,
                                                            "start": 533,
                                                            "end": 534
                                                        },
                                                        "flags": 32,
                                                        "start": 530,
                                                        "end": 534
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 530,
                                                "end": 534
                                            },
                                            "flags": 32,
                                            "start": 529,
                                            "end": 535
                                        },
                                        "flags": 32,
                                        "start": 508,
                                        "end": 535
                                    },
                                    {
                                        "kind": 219,
                                        "generatorToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 536,
                                            "end": 537
                                        },
                                        "right": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "generatorToken": null,
                                                        "left": {
                                                            "kind": 194,
                                                            "expression": {
                                                                "kind": 198,
                                                                "left": {
                                                                    "kind": 201392130,
                                                                    "text": 22,
                                                                    "rawText": "22",
                                                                    "flags": 96,
                                                                    "start": 540,
                                                                    "end": 542
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 33594,
                                                                    "flags": 64,
                                                                    "start": 542,
                                                                    "end": 544
                                                                },
                                                                "right": {
                                                                    "kind": 198,
                                                                    "left": {
                                                                        "kind": 24752947,
                                                                        "flags": 96,
                                                                        "start": 544,
                                                                        "end": 548
                                                                    },
                                                                    "operatorToken": {
                                                                        "kind": 34098,
                                                                        "flags": 64,
                                                                        "start": 548,
                                                                        "end": 549
                                                                    },
                                                                    "right": {
                                                                        "kind": 131,
                                                                        "expression": {
                                                                            "kind": 134299649,
                                                                            "text": "async",
                                                                            "rawText": "async",
                                                                            "flags": 96,
                                                                            "start": 549,
                                                                            "end": 554
                                                                        },
                                                                        "argumentList": {
                                                                            "kind": 256,
                                                                            "elements": [
                                                                                {
                                                                                    "kind": 223,
                                                                                    "ellipsisToken": {
                                                                                        "kind": 524302,
                                                                                        "flags": 64,
                                                                                        "start": 555,
                                                                                        "end": 558
                                                                                    },
                                                                                    "flags": 32,
                                                                                    "start": 555,
                                                                                    "end": 559
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "flags": 32,
                                                                            "start": 549,
                                                                            "end": 549
                                                                        },
                                                                        "flags": 268435488,
                                                                        "start": 549,
                                                                        "end": 560
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 548,
                                                                    "end": 560
                                                                },
                                                                "flags": 32,
                                                                "start": 540,
                                                                "end": 560
                                                            },
                                                            "flags": 32,
                                                            "start": 539,
                                                            "end": 561
                                                        },
                                                        "right": {
                                                            "kind": 119,
                                                            "elementList": {
                                                                "kind": 270,
                                                                "elements": [
                                                                    {
                                                                        "kind": 223,
                                                                        "ellipsisToken": {
                                                                            "kind": 524302,
                                                                            "flags": 64,
                                                                            "start": 563,
                                                                            "end": 566
                                                                        },
                                                                        "argument": {
                                                                            "kind": 134299649,
                                                                            "text": "q",
                                                                            "rawText": "q",
                                                                            "flags": 96,
                                                                            "start": 566,
                                                                            "end": 567
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 563,
                                                                        "end": 567
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "start": 563,
                                                                "end": 567
                                                            },
                                                            "flags": 32,
                                                            "start": 562,
                                                            "end": 568
                                                        },
                                                        "flags": 32,
                                                        "start": 539,
                                                        "end": 568
                                                    },
                                                    {
                                                        "kind": 134299649,
                                                        "text": "true",
                                                        "rawText": "true",
                                                        "flags": 96,
                                                        "start": 569,
                                                        "end": 573
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "start": 539,
                                                "end": 573
                                            },
                                            "flags": 48,
                                            "start": 538,
                                            "end": 574
                                        },
                                        "flags": 32,
                                        "start": 536,
                                        "end": 574
                                    },
                                    {
                                        "kind": 219,
                                        "generatorToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "t",
                                            "rawText": "t",
                                            "flags": 96,
                                            "start": 575,
                                            "end": 576
                                        },
                                        "right": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "generatorToken": null,
                                                        "left": {
                                                            "kind": 194,
                                                            "expression": {
                                                                "kind": 201392130,
                                                                "text": 0,
                                                                "rawText": "0",
                                                                "flags": 96,
                                                                "start": 579,
                                                                "end": 580
                                                            },
                                                            "flags": 32,
                                                            "start": 578,
                                                            "end": 581
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "r",
                                                            "rawText": "r",
                                                            "flags": 96,
                                                            "start": 582,
                                                            "end": 583
                                                        },
                                                        "flags": 32,
                                                        "start": 578,
                                                        "end": 583
                                                    },
                                                    {
                                                        "kind": 134299649,
                                                        "text": "true",
                                                        "rawText": "true",
                                                        "flags": 96,
                                                        "start": 584,
                                                        "end": 588
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "start": 578,
                                                "end": 588
                                            },
                                            "flags": 48,
                                            "start": 577,
                                            "end": 589
                                        },
                                        "flags": 32,
                                        "start": 575,
                                        "end": 589
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "true",
                                        "rawText": "true",
                                        "flags": 96,
                                        "start": 590,
                                        "end": 594
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 508,
                                "end": 594
                            },
                            "flags": 48,
                            "start": 507,
                            "end": 595
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 223,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 597,
                                            "end": 600
                                        },
                                        "argument": {
                                            "kind": 134299649,
                                            "text": "js",
                                            "rawText": "js",
                                            "flags": 96,
                                            "start": 600,
                                            "end": 602
                                        },
                                        "flags": 32,
                                        "start": 597,
                                        "end": 602
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 597,
                                "end": 602
                            },
                            "flags": 32,
                            "start": 596,
                            "end": 603
                        },
                        {
                            "kind": 134299649,
                            "text": "ts",
                            "rawText": "ts",
                            "flags": 96,
                            "start": 604,
                            "end": 606
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 223,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 608,
                                            "end": 611
                                        },
                                        "argument": {
                                            "kind": 134299649,
                                            "text": "r",
                                            "rawText": "r",
                                            "flags": 96,
                                            "start": 611,
                                            "end": 612
                                        },
                                        "flags": 32,
                                        "start": 608,
                                        "end": 612
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 608,
                                "end": 612
                            },
                            "flags": 32,
                            "start": 607,
                            "end": 613
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 223,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 615,
                                            "end": 618
                                        },
                                        "argument": {
                                            "kind": 134299649,
                                            "text": "x9",
                                            "rawText": "x9",
                                            "flags": 96,
                                            "start": 618,
                                            "end": 620
                                        },
                                        "flags": 32,
                                        "start": 615,
                                        "end": 620
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 615,
                                "end": 620
                            },
                            "flags": 32,
                            "start": 614,
                            "end": 621
                        },
                        {
                            "kind": 134299649,
                            "text": "z0",
                            "rawText": "z0",
                            "flags": 96,
                            "start": 622,
                            "end": 624
                        }
                    ]
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 630,
                        "end": 630
                    },
                    "flags": 32,
                    "start": 628,
                    "end": 631
                },
                "flags": 34,
                "start": 503,
                "end": 631
            },
            "flags": 16,
            "start": 503,
            "end": 632
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 816,
                    "end": 819
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
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
                                                "start": 637,
                                                "end": 640
                                            },
                                            "argument": {
                                                "kind": 134299649,
                                                "text": "z",
                                                "rawText": "z",
                                                "flags": 96,
                                                "start": 640,
                                                "end": 641
                                            },
                                            "flags": 32,
                                            "start": 637,
                                            "end": 641
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 637,
                                    "end": 641
                                },
                                "flags": 32,
                                "start": 636,
                                "end": 642
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 642,
                                "end": 644
                            },
                            "right": {
                                "kind": 197,
                                "shortCircuit": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 127,
                                        "operandToken": {
                                            "kind": 196636,
                                            "flags": 64,
                                            "start": 647,
                                            "end": 649
                                        },
                                        "operand": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 646,
                                            "end": 647
                                        },
                                        "flags": 32,
                                        "start": 644,
                                        "end": 649
                                    },
                                    "flags": 32,
                                    "start": 644,
                                    "end": 650
                                },
                                "questionToken": {
                                    "kind": 134217750,
                                    "flags": 64,
                                    "start": 650,
                                    "end": 651
                                },
                                "consequent": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 125,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "start": 653,
                                                "end": 654
                                            },
                                            "operatorToken": {
                                                "kind": 4125,
                                                "flags": 64,
                                                "start": 654,
                                                "end": 656
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 656,
                                                "end": 658
                                            },
                                            "flags": 32,
                                            "start": 652,
                                            "end": 658
                                        },
                                        "flags": 32,
                                        "start": 652,
                                        "end": 659
                                    },
                                    "flags": 32,
                                    "start": 651,
                                    "end": 660
                                },
                                "colonToken": {
                                    "kind": 21,
                                    "flags": 64,
                                    "start": 660,
                                    "end": 661
                                },
                                "alternate": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "b",
                                                        "rawText": "b",
                                                        "flags": 96,
                                                        "start": 663,
                                                        "end": 664
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4135,
                                                        "flags": 64,
                                                        "start": 664,
                                                        "end": 667
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 96,
                                                        "start": 667,
                                                        "end": 669
                                                    },
                                                    "flags": 32,
                                                    "start": 662,
                                                    "end": 669
                                                },
                                                "flags": 32,
                                                "start": 662,
                                                "end": 670
                                            },
                                            "operatorToken": {
                                                "kind": 33594,
                                                "flags": 64,
                                                "start": 670,
                                                "end": 672
                                            },
                                            "right": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 126,
                                                    "operandToken": {
                                                        "kind": 65584,
                                                        "flags": 64,
                                                        "start": 673,
                                                        "end": 674
                                                    },
                                                    "operand": {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 96,
                                                        "start": 674,
                                                        "end": 675
                                                    },
                                                    "flags": 32,
                                                    "start": 673,
                                                    "end": 675
                                                },
                                                "flags": 32,
                                                "start": 672,
                                                "end": 676
                                            },
                                            "flags": 32,
                                            "start": 662,
                                            "end": 676
                                        },
                                        "flags": 32,
                                        "start": 661,
                                        "end": 677
                                    },
                                    "operatorToken": {
                                        "kind": 134251849,
                                        "flags": 64,
                                        "start": 677,
                                        "end": 678
                                    },
                                    "right": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 127,
                                            "operandToken": {
                                                "kind": 196636,
                                                "flags": 64,
                                                "start": 680,
                                                "end": 682
                                            },
                                            "operand": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 679,
                                                "end": 680
                                            },
                                            "flags": 32,
                                            "start": 678,
                                            "end": 682
                                        },
                                        "flags": 32,
                                        "start": 678,
                                        "end": 683
                                    },
                                    "flags": 32,
                                    "start": 661,
                                    "end": 683
                                },
                                "flags": 32,
                                "start": 644,
                                "end": 683
                            },
                            "flags": 32,
                            "start": 636,
                            "end": 683
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 223,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 685,
                                            "end": 688
                                        },
                                        "argument": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 688,
                                            "end": 689
                                        },
                                        "flags": 32,
                                        "start": 685,
                                        "end": 689
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 685,
                                "end": 689
                            },
                            "flags": 32,
                            "start": 684,
                            "end": 690
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 223,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 692,
                                            "end": 695
                                        },
                                        "argument": {
                                            "kind": 134299649,
                                            "text": "q",
                                            "rawText": "q",
                                            "flags": 96,
                                            "start": 695,
                                            "end": 696
                                        },
                                        "flags": 32,
                                        "start": 692,
                                        "end": 696
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 692,
                                "end": 696
                            },
                            "flags": 32,
                            "start": 691,
                            "end": 697
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "text": "t",
                                        "rawText": "t",
                                        "flags": 96,
                                        "start": 699,
                                        "end": 700
                                    },
                                    {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "true",
                                                    "rawText": "true",
                                                    "flags": 96,
                                                    "start": 702,
                                                    "end": 706
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "true",
                                                    "rawText": "true",
                                                    "flags": 96,
                                                    "start": 707,
                                                    "end": 711
                                                },
                                                {
                                                    "kind": 224,
                                                    "ellipsisToken": {
                                                        "kind": 524302,
                                                        "flags": 64,
                                                        "start": 712,
                                                        "end": 715
                                                    },
                                                    "argument": {
                                                        "kind": 134299649,
                                                        "text": "r",
                                                        "rawText": "r",
                                                        "flags": 96,
                                                        "start": 715,
                                                        "end": 716
                                                    },
                                                    "flags": 32,
                                                    "start": 712,
                                                    "end": 716
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "start": 702,
                                            "end": 716
                                        },
                                        "flags": 48,
                                        "start": 701,
                                        "end": 717
                                    },
                                    {
                                        "kind": 223,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 718,
                                            "end": 721
                                        },
                                        "argument": {
                                            "kind": 134299649,
                                            "text": "js",
                                            "rawText": "js",
                                            "flags": 96,
                                            "start": 721,
                                            "end": 723
                                        },
                                        "flags": 32,
                                        "start": 718,
                                        "end": 723
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 699,
                                "end": 723
                            },
                            "flags": 32,
                            "start": 698,
                            "end": 724
                        },
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "generatorToken": null,
                                        "left": {
                                            "kind": 194,
                                            "expression": {
                                                "kind": 197,
                                                "shortCircuit": {
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 127,
                                                        "operandToken": {
                                                            "kind": 196636,
                                                            "flags": 64,
                                                            "start": 729,
                                                            "end": 731
                                                        },
                                                        "operand": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 728,
                                                            "end": 729
                                                        },
                                                        "flags": 32,
                                                        "start": 727,
                                                        "end": 731
                                                    },
                                                    "flags": 32,
                                                    "start": 727,
                                                    "end": 732
                                                },
                                                "questionToken": {
                                                    "kind": 134217750,
                                                    "flags": 64,
                                                    "start": 732,
                                                    "end": 733
                                                },
                                                "consequent": {
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 121,
                                                        "expression": {
                                                            "kind": 127,
                                                            "operandToken": {
                                                                "kind": 196636,
                                                                "flags": 64,
                                                                "start": 736,
                                                                "end": 738
                                                            },
                                                            "operand": {
                                                                "kind": 134299649,
                                                                "text": "a",
                                                                "rawText": "a",
                                                                "flags": 96,
                                                                "start": 735,
                                                                "end": 736
                                                            },
                                                            "flags": 32,
                                                            "start": 734,
                                                            "end": 738
                                                        },
                                                        "flags": 32,
                                                        "start": 734,
                                                        "end": 739
                                                    },
                                                    "flags": 32,
                                                    "start": 733,
                                                    "end": 740
                                                },
                                                "colonToken": {
                                                    "kind": 21,
                                                    "flags": 64,
                                                    "start": 740,
                                                    "end": 741
                                                },
                                                "alternate": {
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 197,
                                                        "shortCircuit": {
                                                            "kind": 121,
                                                            "expression": {
                                                                "kind": 126,
                                                                "operandToken": {
                                                                    "kind": 65584,
                                                                    "flags": 64,
                                                                    "start": 743,
                                                                    "end": 744
                                                                },
                                                                "operand": {
                                                                    "kind": 134299649,
                                                                    "text": "a",
                                                                    "rawText": "a",
                                                                    "flags": 96,
                                                                    "start": 744,
                                                                    "end": 745
                                                                },
                                                                "flags": 32,
                                                                "start": 743,
                                                                "end": 745
                                                            },
                                                            "flags": 32,
                                                            "start": 742,
                                                            "end": 746
                                                        },
                                                        "questionToken": {
                                                            "kind": 134217750,
                                                            "flags": 64,
                                                            "start": 746,
                                                            "end": 747
                                                        },
                                                        "consequent": {
                                                            "kind": 121,
                                                            "expression": {
                                                                "kind": 201392130,
                                                                "text": 22,
                                                                "rawText": "22",
                                                                "flags": 96,
                                                                "start": 748,
                                                                "end": 750
                                                            },
                                                            "flags": 32,
                                                            "start": 747,
                                                            "end": 751
                                                        },
                                                        "colonToken": {
                                                            "kind": 21,
                                                            "flags": 64,
                                                            "start": 751,
                                                            "end": 752
                                                        },
                                                        "alternate": {
                                                            "kind": 121,
                                                            "expression": {
                                                                "kind": 121,
                                                                "expression": {
                                                                    "kind": 125,
                                                                    "left": {
                                                                        "kind": 134299649,
                                                                        "text": "b",
                                                                        "rawText": "b",
                                                                        "flags": 96,
                                                                        "start": 754,
                                                                        "end": 755
                                                                    },
                                                                    "operatorToken": {
                                                                        "kind": 4125,
                                                                        "flags": 64,
                                                                        "start": 755,
                                                                        "end": 757
                                                                    },
                                                                    "right": {
                                                                        "kind": 134299649,
                                                                        "text": "a",
                                                                        "rawText": "a",
                                                                        "flags": 96,
                                                                        "start": 757,
                                                                        "end": 759
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 753,
                                                                    "end": 759
                                                                },
                                                                "flags": 32,
                                                                "start": 753,
                                                                "end": 760
                                                            },
                                                            "flags": 32,
                                                            "start": 752,
                                                            "end": 761
                                                        },
                                                        "flags": 32,
                                                        "start": 742,
                                                        "end": 761
                                                    },
                                                    "flags": 32,
                                                    "start": 741,
                                                    "end": 762
                                                },
                                                "flags": 32,
                                                "start": 727,
                                                "end": 762
                                            },
                                            "flags": 32,
                                            "start": 726,
                                            "end": 763
                                        },
                                        "right": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "true",
                                                        "rawText": "true",
                                                        "flags": 96,
                                                        "start": 765,
                                                        "end": 769
                                                    },
                                                    {
                                                        "kind": 224,
                                                        "ellipsisToken": {
                                                            "kind": 524302,
                                                            "flags": 64,
                                                            "start": 770,
                                                            "end": 773
                                                        },
                                                        "argument": {
                                                            "kind": 134299649,
                                                            "text": "ts",
                                                            "rawText": "ts",
                                                            "flags": 96,
                                                            "start": 773,
                                                            "end": 775
                                                        },
                                                        "flags": 32,
                                                        "start": 770,
                                                        "end": 775
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "start": 765,
                                                "end": 775
                                            },
                                            "flags": 48,
                                            "start": 764,
                                            "end": 776
                                        },
                                        "flags": 32,
                                        "start": 726,
                                        "end": 776
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 726,
                                "end": 776
                            },
                            "flags": 48,
                            "start": 725,
                            "end": 777
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 223,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 779,
                                            "end": 782
                                        },
                                        "argument": {
                                            "kind": 134299649,
                                            "text": "r",
                                            "rawText": "r",
                                            "flags": 96,
                                            "start": 782,
                                            "end": 783
                                        },
                                        "flags": 32,
                                        "start": 779,
                                        "end": 783
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 779,
                                "end": 783
                            },
                            "flags": 32,
                            "start": 778,
                            "end": 784
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 223,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 786,
                                            "end": 789
                                        },
                                        "argument": {
                                            "kind": 134299649,
                                            "text": "x9",
                                            "rawText": "x9",
                                            "flags": 96,
                                            "start": 789,
                                            "end": 791
                                        },
                                        "flags": 32,
                                        "start": 786,
                                        "end": 791
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 786,
                                "end": 791
                            },
                            "flags": 32,
                            "start": 785,
                            "end": 792
                        },
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "generatorToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "z0",
                                            "rawText": "z0",
                                            "flags": 96,
                                            "start": 794,
                                            "end": 796
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "z1",
                                            "rawText": "z1",
                                            "flags": 96,
                                            "start": 797,
                                            "end": 799
                                        },
                                        "flags": 32,
                                        "start": 794,
                                        "end": 799
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 16,
                                "start": 794,
                                "end": 800
                            },
                            "flags": 48,
                            "start": 793,
                            "end": 801
                        },
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 224,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 803,
                                            "end": 806
                                        },
                                        "argument": {
                                            "kind": 134299649,
                                            "text": "z",
                                            "rawText": "z",
                                            "flags": 96,
                                            "start": 806,
                                            "end": 807
                                        },
                                        "flags": 32,
                                        "start": 803,
                                        "end": 807
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 803,
                                "end": 807
                            },
                            "flags": 48,
                            "start": 802,
                            "end": 808
                        },
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 224,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 810,
                                            "end": 813
                                        },
                                        "argument": {
                                            "kind": 134299649,
                                            "text": "z",
                                            "rawText": "z",
                                            "flags": 96,
                                            "start": 813,
                                            "end": 814
                                        },
                                        "flags": 32,
                                        "start": 810,
                                        "end": 814
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 810,
                                "end": 814
                            },
                            "flags": 48,
                            "start": 809,
                            "end": 815
                        }
                    ]
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 821,
                        "end": 821
                    },
                    "flags": 32,
                    "start": 819,
                    "end": 822
                },
                "flags": 34,
                "start": 632,
                "end": 822
            },
            "flags": 16,
            "start": 632,
            "end": 823
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 866,
                    "end": 869
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 223,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 828,
                                            "end": 831
                                        },
                                        "argument": {
                                            "kind": 134299649,
                                            "text": "t",
                                            "rawText": "t",
                                            "flags": 96,
                                            "start": 831,
                                            "end": 832
                                        },
                                        "flags": 32,
                                        "start": 828,
                                        "end": 832
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 828,
                                "end": 832
                            },
                            "flags": 32,
                            "start": 827,
                            "end": 833
                        },
                        {
                            "kind": 134299649,
                            "text": "r",
                            "rawText": "r",
                            "flags": 96,
                            "start": 834,
                            "end": 835
                        },
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 224,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 837,
                                            "end": 840
                                        },
                                        "argument": {
                                            "kind": 134299649,
                                            "text": "js",
                                            "rawText": "js",
                                            "flags": 96,
                                            "start": 840,
                                            "end": 842
                                        },
                                        "flags": 32,
                                        "start": 837,
                                        "end": 842
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 837,
                                "end": 842
                            },
                            "flags": 48,
                            "start": 836,
                            "end": 843
                        },
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 134299649,
                                        "text": "true",
                                        "rawText": "true",
                                        "flags": 96,
                                        "start": 845,
                                        "end": 849
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 845,
                                "end": 849
                            },
                            "flags": 48,
                            "start": 844,
                            "end": 850
                        },
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 224,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 852,
                                            "end": 855
                                        },
                                        "argument": {
                                            "kind": 134299649,
                                            "text": "ts",
                                            "rawText": "ts",
                                            "flags": 96,
                                            "start": 855,
                                            "end": 857
                                        },
                                        "flags": 32,
                                        "start": 852,
                                        "end": 857
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 852,
                                "end": 857
                            },
                            "flags": 48,
                            "start": 851,
                            "end": 858
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 223,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 860,
                                            "end": 863
                                        },
                                        "argument": {
                                            "kind": 134299649,
                                            "text": "r",
                                            "rawText": "r",
                                            "flags": 96,
                                            "start": 863,
                                            "end": 864
                                        },
                                        "flags": 32,
                                        "start": 860,
                                        "end": 864
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 860,
                                "end": 864
                            },
                            "flags": 32,
                            "start": 859,
                            "end": 865
                        }
                    ]
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 871,
                        "end": 871
                    },
                    "flags": 32,
                    "start": 869,
                    "end": 872
                },
                "flags": 34,
                "start": 823,
                "end": 872
            },
            "flags": 16,
            "start": 823,
            "end": 873
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 1044,
                    "end": 1047
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 223,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 878,
                                            "end": 881
                                        },
                                        "argument": {
                                            "kind": 134299649,
                                            "text": "t",
                                            "rawText": "t",
                                            "flags": 96,
                                            "start": 881,
                                            "end": 882
                                        },
                                        "flags": 32,
                                        "start": 878,
                                        "end": 882
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 878,
                                "end": 882
                            },
                            "flags": 32,
                            "start": 877,
                            "end": 883
                        },
                        {
                            "kind": 134299649,
                            "text": "r",
                            "rawText": "r",
                            "flags": 96,
                            "start": 884,
                            "end": 885
                        },
                        {
                            "kind": 134299649,
                            "text": "js",
                            "rawText": "js",
                            "flags": 96,
                            "start": 886,
                            "end": 888
                        },
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 134299649,
                                        "text": "true",
                                        "rawText": "true",
                                        "flags": 96,
                                        "start": 890,
                                        "end": 894
                                    },
                                    {
                                        "kind": 219,
                                        "generatorToken": null,
                                        "left": {
                                            "kind": 194,
                                            "expression": {
                                                "kind": 197,
                                                "shortCircuit": {
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 126,
                                                        "operandToken": {
                                                            "kind": 65584,
                                                            "flags": 64,
                                                            "start": 897,
                                                            "end": 898
                                                        },
                                                        "operand": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 898,
                                                            "end": 899
                                                        },
                                                        "flags": 32,
                                                        "start": 897,
                                                        "end": 899
                                                    },
                                                    "flags": 32,
                                                    "start": 896,
                                                    "end": 900
                                                },
                                                "questionToken": {
                                                    "kind": 134217750,
                                                    "flags": 64,
                                                    "start": 900,
                                                    "end": 901
                                                },
                                                "consequent": {
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 121,
                                                        "expression": {
                                                            "kind": 127,
                                                            "operandToken": {
                                                                "kind": 196636,
                                                                "flags": 64,
                                                                "start": 904,
                                                                "end": 906
                                                            },
                                                            "operand": {
                                                                "kind": 134299649,
                                                                "text": "a",
                                                                "rawText": "a",
                                                                "flags": 96,
                                                                "start": 903,
                                                                "end": 904
                                                            },
                                                            "flags": 32,
                                                            "start": 902,
                                                            "end": 906
                                                        },
                                                        "flags": 32,
                                                        "start": 902,
                                                        "end": 907
                                                    },
                                                    "flags": 32,
                                                    "start": 901,
                                                    "end": 908
                                                },
                                                "colonToken": {
                                                    "kind": 21,
                                                    "flags": 64,
                                                    "start": 908,
                                                    "end": 909
                                                },
                                                "alternate": {
                                                    "kind": 197,
                                                    "shortCircuit": {
                                                        "kind": 121,
                                                        "expression": {
                                                            "kind": 198,
                                                            "left": {
                                                                "kind": 121,
                                                                "expression": {
                                                                    "kind": 125,
                                                                    "left": {
                                                                        "kind": 134299649,
                                                                        "text": "b",
                                                                        "rawText": "b",
                                                                        "flags": 96,
                                                                        "start": 911,
                                                                        "end": 912
                                                                    },
                                                                    "operatorToken": {
                                                                        "kind": 4125,
                                                                        "flags": 64,
                                                                        "start": 912,
                                                                        "end": 914
                                                                    },
                                                                    "right": {
                                                                        "kind": 134299649,
                                                                        "text": "a",
                                                                        "rawText": "a",
                                                                        "flags": 96,
                                                                        "start": 914,
                                                                        "end": 916
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 910,
                                                                    "end": 916
                                                                },
                                                                "flags": 32,
                                                                "start": 910,
                                                                "end": 917
                                                            },
                                                            "operatorToken": {
                                                                "kind": 33594,
                                                                "flags": 64,
                                                                "start": 917,
                                                                "end": 919
                                                            },
                                                            "right": {
                                                                "kind": 121,
                                                                "expression": {
                                                                    "kind": 126,
                                                                    "operandToken": {
                                                                        "kind": 65585,
                                                                        "flags": 64,
                                                                        "start": 920,
                                                                        "end": 921
                                                                    },
                                                                    "operand": {
                                                                        "kind": 134299649,
                                                                        "text": "a",
                                                                        "rawText": "a",
                                                                        "flags": 96,
                                                                        "start": 921,
                                                                        "end": 922
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 920,
                                                                    "end": 922
                                                                },
                                                                "flags": 32,
                                                                "start": 919,
                                                                "end": 923
                                                            },
                                                            "flags": 32,
                                                            "start": 910,
                                                            "end": 923
                                                        },
                                                        "flags": 32,
                                                        "start": 909,
                                                        "end": 924
                                                    },
                                                    "questionToken": {
                                                        "kind": 134217750,
                                                        "flags": 64,
                                                        "start": 924,
                                                        "end": 925
                                                    },
                                                    "consequent": {
                                                        "kind": 121,
                                                        "expression": {
                                                            "kind": 197,
                                                            "shortCircuit": {
                                                                "kind": 121,
                                                                "expression": {
                                                                    "kind": 127,
                                                                    "operandToken": {
                                                                        "kind": 196636,
                                                                        "flags": 64,
                                                                        "start": 928,
                                                                        "end": 930
                                                                    },
                                                                    "operand": {
                                                                        "kind": 134299649,
                                                                        "text": "a",
                                                                        "rawText": "a",
                                                                        "flags": 96,
                                                                        "start": 927,
                                                                        "end": 928
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 926,
                                                                    "end": 930
                                                                },
                                                                "flags": 32,
                                                                "start": 926,
                                                                "end": 931
                                                            },
                                                            "questionToken": {
                                                                "kind": 134217750,
                                                                "flags": 64,
                                                                "start": 931,
                                                                "end": 932
                                                            },
                                                            "consequent": {
                                                                "kind": 121,
                                                                "expression": {
                                                                    "kind": 121,
                                                                    "expression": {
                                                                        "kind": 198,
                                                                        "left": {
                                                                            "kind": 205586437,
                                                                            "flags": 96,
                                                                            "start": 934,
                                                                            "end": 939
                                                                        },
                                                                        "operatorToken": {
                                                                            "kind": 134251849,
                                                                            "flags": 64,
                                                                            "start": 939,
                                                                            "end": 940
                                                                        },
                                                                        "right": {
                                                                            "kind": 131,
                                                                            "expression": {
                                                                                "kind": 134299649,
                                                                                "text": "async",
                                                                                "rawText": "async",
                                                                                "flags": 96,
                                                                                "start": 940,
                                                                                "end": 945
                                                                            },
                                                                            "argumentList": {
                                                                                "kind": 256,
                                                                                "elements": [
                                                                                    {
                                                                                        "kind": 223,
                                                                                        "ellipsisToken": {
                                                                                            "kind": 524302,
                                                                                            "flags": 64,
                                                                                            "start": 946,
                                                                                            "end": 949
                                                                                        },
                                                                                        "flags": 32,
                                                                                        "start": 946,
                                                                                        "end": 950
                                                                                    }
                                                                                ],
                                                                                "trailingComma": false,
                                                                                "flags": 32,
                                                                                "start": 940,
                                                                                "end": 940
                                                                            },
                                                                            "flags": 268435488,
                                                                            "start": 940,
                                                                            "end": 951
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 934,
                                                                        "end": 951
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 933,
                                                                    "end": 952
                                                                },
                                                                "flags": 32,
                                                                "start": 932,
                                                                "end": 953
                                                            },
                                                            "colonToken": {
                                                                "kind": 21,
                                                                "flags": 64,
                                                                "start": 953,
                                                                "end": 954
                                                            },
                                                            "alternate": {
                                                                "kind": 121,
                                                                "expression": {
                                                                    "kind": 121,
                                                                    "expression": {
                                                                        "kind": 128,
                                                                        "operandToken": {
                                                                            "kind": 196635,
                                                                            "flags": 64,
                                                                            "start": 956,
                                                                            "end": 958
                                                                        },
                                                                        "operand": {
                                                                            "kind": 134299649,
                                                                            "text": "a",
                                                                            "rawText": "a",
                                                                            "flags": 96,
                                                                            "start": 958,
                                                                            "end": 959
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 956,
                                                                        "end": 959
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 955,
                                                                    "end": 960
                                                                },
                                                                "flags": 32,
                                                                "start": 954,
                                                                "end": 961
                                                            },
                                                            "flags": 32,
                                                            "start": 926,
                                                            "end": 961
                                                        },
                                                        "flags": 32,
                                                        "start": 925,
                                                        "end": 962
                                                    },
                                                    "colonToken": {
                                                        "kind": 21,
                                                        "flags": 64,
                                                        "start": 962,
                                                        "end": 963
                                                    },
                                                    "alternate": {
                                                        "kind": 121,
                                                        "expression": {
                                                            "kind": 201392130,
                                                            "text": 0,
                                                            "rawText": "0",
                                                            "flags": 96,
                                                            "start": 964,
                                                            "end": 965
                                                        },
                                                        "flags": 32,
                                                        "start": 963,
                                                        "end": 966
                                                    },
                                                    "flags": 32,
                                                    "start": 909,
                                                    "end": 966
                                                },
                                                "flags": 32,
                                                "start": 896,
                                                "end": 966
                                            },
                                            "flags": 32,
                                            "start": 895,
                                            "end": 967
                                        },
                                        "right": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [
                                                    {
                                                        "kind": 223,
                                                        "ellipsisToken": {
                                                            "kind": 524302,
                                                            "flags": 64,
                                                            "start": 969,
                                                            "end": 972
                                                        },
                                                        "argument": {
                                                            "kind": 134299649,
                                                            "text": "ts",
                                                            "rawText": "ts",
                                                            "flags": 96,
                                                            "start": 972,
                                                            "end": 974
                                                        },
                                                        "flags": 32,
                                                        "start": 969,
                                                        "end": 974
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 969,
                                                "end": 974
                                            },
                                            "flags": 32,
                                            "start": 968,
                                            "end": 975
                                        },
                                        "flags": 32,
                                        "start": 895,
                                        "end": 975
                                    },
                                    {
                                        "kind": 219,
                                        "generatorToken": null,
                                        "left": {
                                            "kind": 194,
                                            "expression": {
                                                "kind": 197,
                                                "shortCircuit": {
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 127,
                                                        "operandToken": {
                                                            "kind": 196636,
                                                            "flags": 64,
                                                            "start": 979,
                                                            "end": 981
                                                        },
                                                        "operand": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 978,
                                                            "end": 979
                                                        },
                                                        "flags": 32,
                                                        "start": 977,
                                                        "end": 981
                                                    },
                                                    "flags": 32,
                                                    "start": 977,
                                                    "end": 982
                                                },
                                                "questionToken": {
                                                    "kind": 134217750,
                                                    "flags": 64,
                                                    "start": 982,
                                                    "end": 983
                                                },
                                                "consequent": {
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 131,
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "async",
                                                            "rawText": "async",
                                                            "flags": 96,
                                                            "start": 984,
                                                            "end": 989
                                                        },
                                                        "argumentList": {
                                                            "kind": 256,
                                                            "elements": [
                                                                {
                                                                    "kind": 223,
                                                                    "ellipsisToken": {
                                                                        "kind": 524302,
                                                                        "flags": 64,
                                                                        "start": 990,
                                                                        "end": 993
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 990,
                                                                    "end": 994
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "start": 984,
                                                            "end": 984
                                                        },
                                                        "flags": 268435488,
                                                        "start": 984,
                                                        "end": 995
                                                    },
                                                    "flags": 32,
                                                    "start": 983,
                                                    "end": 996
                                                },
                                                "colonToken": {
                                                    "kind": 21,
                                                    "flags": 64,
                                                    "start": 996,
                                                    "end": 997
                                                },
                                                "alternate": {
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 131,
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "async",
                                                            "rawText": "async",
                                                            "flags": 96,
                                                            "start": 998,
                                                            "end": 1003
                                                        },
                                                        "argumentList": {
                                                            "kind": 256,
                                                            "elements": [
                                                                {
                                                                    "kind": 223,
                                                                    "ellipsisToken": {
                                                                        "kind": 524302,
                                                                        "flags": 64,
                                                                        "start": 1004,
                                                                        "end": 1007
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 1004,
                                                                    "end": 1008
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "start": 998,
                                                            "end": 998
                                                        },
                                                        "flags": 268435488,
                                                        "start": 998,
                                                        "end": 1009
                                                    },
                                                    "flags": 32,
                                                    "start": 997,
                                                    "end": 1010
                                                },
                                                "flags": 32,
                                                "start": 977,
                                                "end": 1010
                                            },
                                            "flags": 32,
                                            "start": 976,
                                            "end": 1011
                                        },
                                        "right": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [
                                                    {
                                                        "kind": 223,
                                                        "ellipsisToken": {
                                                            "kind": 524302,
                                                            "flags": 64,
                                                            "start": 1013,
                                                            "end": 1016
                                                        },
                                                        "argument": {
                                                            "kind": 134299649,
                                                            "text": "r",
                                                            "rawText": "r",
                                                            "flags": 96,
                                                            "start": 1016,
                                                            "end": 1017
                                                        },
                                                        "flags": 32,
                                                        "start": 1013,
                                                        "end": 1017
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 1013,
                                                "end": 1017
                                            },
                                            "flags": 32,
                                            "start": 1012,
                                            "end": 1018
                                        },
                                        "flags": 32,
                                        "start": 976,
                                        "end": 1018
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 890,
                                "end": 1018
                            },
                            "flags": 48,
                            "start": 889,
                            "end": 1019
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 223,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 1021,
                                            "end": 1024
                                        },
                                        "argument": {
                                            "kind": 134299649,
                                            "text": "x9",
                                            "rawText": "x9",
                                            "flags": 96,
                                            "start": 1024,
                                            "end": 1026
                                        },
                                        "flags": 32,
                                        "start": 1021,
                                        "end": 1026
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 1021,
                                "end": 1026
                            },
                            "flags": 32,
                            "start": 1020,
                            "end": 1027
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 223,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 1029,
                                            "end": 1032
                                        },
                                        "argument": {
                                            "kind": 134299649,
                                            "text": "z0",
                                            "rawText": "z0",
                                            "flags": 96,
                                            "start": 1032,
                                            "end": 1034
                                        },
                                        "flags": 32,
                                        "start": 1029,
                                        "end": 1034
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 1029,
                                "end": 1034
                            },
                            "flags": 32,
                            "start": 1028,
                            "end": 1035
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 223,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 1037,
                                            "end": 1040
                                        },
                                        "argument": {
                                            "kind": 134299649,
                                            "text": "z1",
                                            "rawText": "z1",
                                            "flags": 96,
                                            "start": 1040,
                                            "end": 1042
                                        },
                                        "flags": 32,
                                        "start": 1037,
                                        "end": 1042
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 1037,
                                "end": 1042
                            },
                            "flags": 32,
                            "start": 1036,
                            "end": 1043
                        }
                    ]
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 1049,
                        "end": 1049
                    },
                    "flags": 32,
                    "start": 1047,
                    "end": 1050
                },
                "flags": 34,
                "start": 873,
                "end": 1050
            },
            "flags": 16,
            "start": 873,
            "end": 1051
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 1145,
                    "end": 1148
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 134299649,
                                        "text": "true",
                                        "rawText": "true",
                                        "flags": 96,
                                        "start": 1056,
                                        "end": 1060
                                    },
                                    {
                                        "kind": 219,
                                        "generatorToken": null,
                                        "left": {
                                            "kind": 194,
                                            "expression": {
                                                "kind": 198,
                                                "left": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "async",
                                                        "rawText": "async",
                                                        "flags": 96,
                                                        "start": 1062,
                                                        "end": 1067
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [
                                                            {
                                                                "kind": 223,
                                                                "ellipsisToken": {
                                                                    "kind": 524302,
                                                                    "flags": 64,
                                                                    "start": 1068,
                                                                    "end": 1071
                                                                },
                                                                "flags": 32,
                                                                "start": 1068,
                                                                "end": 1072
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 1062,
                                                        "end": 1062
                                                    },
                                                    "flags": 268435488,
                                                    "start": 1062,
                                                    "end": 1073
                                                },
                                                "operatorToken": {
                                                    "kind": 134251849,
                                                    "flags": 64,
                                                    "start": 1073,
                                                    "end": 1074
                                                },
                                                "right": {
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 128,
                                                        "operandToken": {
                                                            "kind": 196636,
                                                            "flags": 64,
                                                            "start": 1075,
                                                            "end": 1077
                                                        },
                                                        "operand": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 1077,
                                                            "end": 1078
                                                        },
                                                        "flags": 32,
                                                        "start": 1075,
                                                        "end": 1078
                                                    },
                                                    "flags": 32,
                                                    "start": 1074,
                                                    "end": 1079
                                                },
                                                "flags": 32,
                                                "start": 1062,
                                                "end": 1079
                                            },
                                            "flags": 32,
                                            "start": 1061,
                                            "end": 1080
                                        },
                                        "right": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "generatorToken": null,
                                                        "left": {
                                                            "kind": 194,
                                                            "expression": {
                                                                "kind": 121,
                                                                "expression": {
                                                                    "kind": 125,
                                                                    "left": {
                                                                        "kind": 134299649,
                                                                        "text": "b",
                                                                        "rawText": "b",
                                                                        "flags": 96,
                                                                        "start": 1084,
                                                                        "end": 1085
                                                                    },
                                                                    "operatorToken": {
                                                                        "kind": 4125,
                                                                        "flags": 64,
                                                                        "start": 1085,
                                                                        "end": 1087
                                                                    },
                                                                    "right": {
                                                                        "kind": 134299649,
                                                                        "text": "a",
                                                                        "rawText": "a",
                                                                        "flags": 96,
                                                                        "start": 1087,
                                                                        "end": 1089
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 1083,
                                                                    "end": 1089
                                                                },
                                                                "flags": 32,
                                                                "start": 1083,
                                                                "end": 1090
                                                            },
                                                            "flags": 32,
                                                            "start": 1082,
                                                            "end": 1091
                                                        },
                                                        "right": {
                                                            "kind": 220,
                                                            "propertyList": {
                                                                "kind": 218,
                                                                "properties": [
                                                                    {
                                                                        "kind": 219,
                                                                        "generatorToken": null,
                                                                        "left": {
                                                                            "kind": 134299649,
                                                                            "text": "z",
                                                                            "rawText": "z",
                                                                            "flags": 96,
                                                                            "start": 1093,
                                                                            "end": 1094
                                                                        },
                                                                        "right": {
                                                                            "kind": 134299649,
                                                                            "text": "a",
                                                                            "rawText": "a",
                                                                            "flags": 96,
                                                                            "start": 1095,
                                                                            "end": 1096
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 1093,
                                                                        "end": 1096
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 16,
                                                                "start": 1093,
                                                                "end": 1096
                                                            },
                                                            "flags": 48,
                                                            "start": 1092,
                                                            "end": 1097
                                                        },
                                                        "flags": 32,
                                                        "start": 1082,
                                                        "end": 1097
                                                    },
                                                    {
                                                        "kind": 134299649,
                                                        "text": "true",
                                                        "rawText": "true",
                                                        "flags": 96,
                                                        "start": 1098,
                                                        "end": 1102
                                                    },
                                                    {
                                                        "kind": 219,
                                                        "generatorToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "q",
                                                            "rawText": "q",
                                                            "flags": 96,
                                                            "start": 1103,
                                                            "end": 1104
                                                        },
                                                        "right": {
                                                            "kind": 119,
                                                            "elementList": {
                                                                "kind": 270,
                                                                "elements": [
                                                                    {
                                                                        "kind": 223,
                                                                        "ellipsisToken": {
                                                                            "kind": 524302,
                                                                            "flags": 64,
                                                                            "start": 1106,
                                                                            "end": 1109
                                                                        },
                                                                        "argument": {
                                                                            "kind": 134299649,
                                                                            "text": "t",
                                                                            "rawText": "t",
                                                                            "flags": 96,
                                                                            "start": 1109,
                                                                            "end": 1110
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 1106,
                                                                        "end": 1110
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "start": 1106,
                                                                "end": 1110
                                                            },
                                                            "flags": 32,
                                                            "start": 1105,
                                                            "end": 1111
                                                        },
                                                        "flags": 32,
                                                        "start": 1103,
                                                        "end": 1111
                                                    },
                                                    {
                                                        "kind": 219,
                                                        "generatorToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "r",
                                                            "rawText": "r",
                                                            "flags": 96,
                                                            "start": 1112,
                                                            "end": 1113
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "js",
                                                            "rawText": "js",
                                                            "flags": 96,
                                                            "start": 1114,
                                                            "end": 1116
                                                        },
                                                        "flags": 32,
                                                        "start": 1112,
                                                        "end": 1116
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "start": 1082,
                                                "end": 1116
                                            },
                                            "flags": 48,
                                            "start": 1081,
                                            "end": 1117
                                        },
                                        "flags": 32,
                                        "start": 1061,
                                        "end": 1117
                                    },
                                    {
                                        "kind": 219,
                                        "generatorToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "ts",
                                            "rawText": "ts",
                                            "flags": 96,
                                            "start": 1118,
                                            "end": 1120
                                        },
                                        "right": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 224,
                                                        "ellipsisToken": {
                                                            "kind": 524302,
                                                            "flags": 64,
                                                            "start": 1122,
                                                            "end": 1125
                                                        },
                                                        "argument": {
                                                            "kind": 134299649,
                                                            "text": "r",
                                                            "rawText": "r",
                                                            "flags": 96,
                                                            "start": 1125,
                                                            "end": 1126
                                                        },
                                                        "flags": 32,
                                                        "start": 1122,
                                                        "end": 1126
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "start": 1122,
                                                "end": 1126
                                            },
                                            "flags": 48,
                                            "start": 1121,
                                            "end": 1127
                                        },
                                        "flags": 32,
                                        "start": 1118,
                                        "end": 1127
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "true",
                                        "rawText": "true",
                                        "flags": 96,
                                        "start": 1128,
                                        "end": 1132
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 1056,
                                "end": 1132
                            },
                            "flags": 48,
                            "start": 1055,
                            "end": 1133
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 223,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 1135,
                                            "end": 1138
                                        },
                                        "argument": {
                                            "kind": 134299649,
                                            "text": "x9",
                                            "rawText": "x9",
                                            "flags": 96,
                                            "start": 1138,
                                            "end": 1140
                                        },
                                        "flags": 32,
                                        "start": 1135,
                                        "end": 1140
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 1135,
                                "end": 1140
                            },
                            "flags": 32,
                            "start": 1134,
                            "end": 1141
                        },
                        {
                            "kind": 134299649,
                            "text": "z0",
                            "rawText": "z0",
                            "flags": 96,
                            "start": 1142,
                            "end": 1144
                        }
                    ]
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 1150,
                        "end": 1150
                    },
                    "flags": 32,
                    "start": 1148,
                    "end": 1151
                },
                "flags": 34,
                "start": 1051,
                "end": 1151
            },
            "flags": 16,
            "start": 1051,
            "end": 1152
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 1212,
                    "end": 1215
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 223,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 1157,
                                            "end": 1160
                                        },
                                        "argument": {
                                            "kind": 134299649,
                                            "text": "z",
                                            "rawText": "z",
                                            "flags": 96,
                                            "start": 1160,
                                            "end": 1161
                                        },
                                        "flags": 32,
                                        "start": 1157,
                                        "end": 1161
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 1157,
                                "end": 1161
                            },
                            "flags": 32,
                            "start": 1156,
                            "end": 1162
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 223,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 1164,
                                            "end": 1167
                                        },
                                        "argument": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 1167,
                                            "end": 1168
                                        },
                                        "flags": 32,
                                        "start": 1164,
                                        "end": 1168
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 1164,
                                "end": 1168
                            },
                            "flags": 32,
                            "start": 1163,
                            "end": 1169
                        },
                        {
                            "kind": 134299649,
                            "text": "q",
                            "rawText": "q",
                            "flags": 96,
                            "start": 1170,
                            "end": 1171
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 223,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 1173,
                                            "end": 1176
                                        },
                                        "argument": {
                                            "kind": 134299649,
                                            "text": "t",
                                            "rawText": "t",
                                            "flags": 96,
                                            "start": 1176,
                                            "end": 1177
                                        },
                                        "flags": 32,
                                        "start": 1173,
                                        "end": 1177
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 1173,
                                "end": 1177
                            },
                            "flags": 32,
                            "start": 1172,
                            "end": 1178
                        },
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 134299649,
                                        "text": "true",
                                        "rawText": "true",
                                        "flags": 96,
                                        "start": 1180,
                                        "end": 1184
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "true",
                                        "rawText": "true",
                                        "flags": 96,
                                        "start": 1185,
                                        "end": 1189
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 1180,
                                "end": 1189
                            },
                            "flags": 48,
                            "start": 1179,
                            "end": 1190
                        },
                        {
                            "kind": 134299649,
                            "text": "r",
                            "rawText": "r",
                            "flags": 96,
                            "start": 1191,
                            "end": 1192
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 223,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 1194,
                                            "end": 1197
                                        },
                                        "argument": {
                                            "kind": 134299649,
                                            "text": "js",
                                            "rawText": "js",
                                            "flags": 96,
                                            "start": 1197,
                                            "end": 1199
                                        },
                                        "flags": 32,
                                        "start": 1194,
                                        "end": 1199
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 1194,
                                "end": 1199
                            },
                            "flags": 32,
                            "start": 1193,
                            "end": 1200
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 1202,
                                "end": 1202
                            },
                            "flags": 32,
                            "start": 1201,
                            "end": 1203
                        },
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 224,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 1205,
                                            "end": 1208
                                        },
                                        "argument": {
                                            "kind": 134299649,
                                            "text": "ts",
                                            "rawText": "ts",
                                            "flags": 96,
                                            "start": 1208,
                                            "end": 1210
                                        },
                                        "flags": 32,
                                        "start": 1205,
                                        "end": 1210
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 1205,
                                "end": 1210
                            },
                            "flags": 48,
                            "start": 1204,
                            "end": 1211
                        }
                    ]
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 1217,
                        "end": 1217
                    },
                    "flags": 32,
                    "start": 1215,
                    "end": 1218
                },
                "flags": 34,
                "start": 1152,
                "end": 1218
            },
            "flags": 16,
            "start": 1152,
            "end": 1219
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 1582,
                    "end": 1585
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "start": 1222,
                            "end": 1223
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 1225,
                                "end": 1225
                            },
                            "flags": 32,
                            "start": 1224,
                            "end": 1226
                        },
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "generatorToken": null,
                                        "left": {
                                            "kind": 194,
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 198,
                                                    "left": {
                                                        "kind": 121,
                                                        "expression": {
                                                            "kind": 127,
                                                            "operandToken": {
                                                                "kind": 196636,
                                                                "flags": 64,
                                                                "start": 1232,
                                                                "end": 1234
                                                            },
                                                            "operand": {
                                                                "kind": 134299649,
                                                                "text": "a",
                                                                "rawText": "a",
                                                                "flags": 96,
                                                                "start": 1231,
                                                                "end": 1232
                                                            },
                                                            "flags": 32,
                                                            "start": 1230,
                                                            "end": 1234
                                                        },
                                                        "flags": 32,
                                                        "start": 1230,
                                                        "end": 1235
                                                    },
                                                    "operatorToken": {
                                                        "kind": 33339,
                                                        "flags": 64,
                                                        "start": 1235,
                                                        "end": 1237
                                                    },
                                                    "right": {
                                                        "kind": 121,
                                                        "expression": {
                                                            "kind": 126,
                                                            "operandToken": {
                                                                "kind": 65585,
                                                                "flags": 64,
                                                                "start": 1238,
                                                                "end": 1239
                                                            },
                                                            "operand": {
                                                                "kind": 134299649,
                                                                "text": "a",
                                                                "rawText": "a",
                                                                "flags": 96,
                                                                "start": 1239,
                                                                "end": 1240
                                                            },
                                                            "flags": 32,
                                                            "start": 1238,
                                                            "end": 1240
                                                        },
                                                        "flags": 32,
                                                        "start": 1237,
                                                        "end": 1241
                                                    },
                                                    "flags": 32,
                                                    "start": 1230,
                                                    "end": 1241
                                                },
                                                "flags": 32,
                                                "start": 1229,
                                                "end": 1242
                                            },
                                            "flags": 32,
                                            "start": 1228,
                                            "end": 1243
                                        },
                                        "right": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "true",
                                                        "rawText": "true",
                                                        "flags": 96,
                                                        "start": 1245,
                                                        "end": 1249
                                                    },
                                                    {
                                                        "kind": 219,
                                                        "generatorToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 1250,
                                                            "end": 1251
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "q",
                                                            "rawText": "q",
                                                            "flags": 96,
                                                            "start": 1252,
                                                            "end": 1253
                                                        },
                                                        "flags": 32,
                                                        "start": 1250,
                                                        "end": 1253
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "start": 1245,
                                                "end": 1253
                                            },
                                            "flags": 48,
                                            "start": 1244,
                                            "end": 1254
                                        },
                                        "flags": 32,
                                        "start": 1228,
                                        "end": 1254
                                    },
                                    {
                                        "kind": 219,
                                        "generatorToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "t",
                                            "rawText": "t",
                                            "flags": 96,
                                            "start": 1255,
                                            "end": 1256
                                        },
                                        "right": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [
                                                    {
                                                        "kind": 223,
                                                        "ellipsisToken": {
                                                            "kind": 524302,
                                                            "flags": 64,
                                                            "start": 1258,
                                                            "end": 1261
                                                        },
                                                        "argument": {
                                                            "kind": 134299649,
                                                            "text": "r",
                                                            "rawText": "r",
                                                            "flags": 96,
                                                            "start": 1261,
                                                            "end": 1262
                                                        },
                                                        "flags": 32,
                                                        "start": 1258,
                                                        "end": 1262
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 1258,
                                                "end": 1262
                                            },
                                            "flags": 32,
                                            "start": 1257,
                                            "end": 1263
                                        },
                                        "flags": 32,
                                        "start": 1255,
                                        "end": 1263
                                    },
                                    {
                                        "kind": 219,
                                        "generatorToken": null,
                                        "left": {
                                            "kind": 194,
                                            "expression": {
                                                "kind": 197,
                                                "shortCircuit": {
                                                    "kind": 198,
                                                    "left": {
                                                        "kind": 198,
                                                        "left": {
                                                            "kind": 121,
                                                            "expression": {
                                                                "kind": 125,
                                                                "left": {
                                                                    "kind": 134299649,
                                                                    "text": "b",
                                                                    "rawText": "b",
                                                                    "flags": 96,
                                                                    "start": 1266,
                                                                    "end": 1267
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 4125,
                                                                    "flags": 64,
                                                                    "start": 1267,
                                                                    "end": 1269
                                                                },
                                                                "right": {
                                                                    "kind": 134299649,
                                                                    "text": "a",
                                                                    "rawText": "a",
                                                                    "flags": 96,
                                                                    "start": 1269,
                                                                    "end": 1271
                                                                },
                                                                "flags": 32,
                                                                "start": 1265,
                                                                "end": 1271
                                                            },
                                                            "flags": 32,
                                                            "start": 1265,
                                                            "end": 1272
                                                        },
                                                        "operatorToken": {
                                                            "kind": 35379,
                                                            "flags": 64,
                                                            "start": 1272,
                                                            "end": 1273
                                                        },
                                                        "right": {
                                                            "kind": 121,
                                                            "expression": {
                                                                "kind": 121,
                                                                "expression": {
                                                                    "kind": 125,
                                                                    "left": {
                                                                        "kind": 134299649,
                                                                        "text": "b",
                                                                        "rawText": "b",
                                                                        "flags": 96,
                                                                        "start": 1275,
                                                                        "end": 1276
                                                                    },
                                                                    "operatorToken": {
                                                                        "kind": 4125,
                                                                        "flags": 64,
                                                                        "start": 1276,
                                                                        "end": 1278
                                                                    },
                                                                    "right": {
                                                                        "kind": 134299649,
                                                                        "text": "a",
                                                                        "rawText": "a",
                                                                        "flags": 96,
                                                                        "start": 1278,
                                                                        "end": 1280
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 1274,
                                                                    "end": 1280
                                                                },
                                                                "flags": 32,
                                                                "start": 1274,
                                                                "end": 1281
                                                            },
                                                            "flags": 32,
                                                            "start": 1273,
                                                            "end": 1282
                                                        },
                                                        "flags": 32,
                                                        "start": 1265,
                                                        "end": 1282
                                                    },
                                                    "operatorToken": {
                                                        "kind": 33339,
                                                        "flags": 64,
                                                        "start": 1282,
                                                        "end": 1284
                                                    },
                                                    "right": {
                                                        "kind": 198,
                                                        "left": {
                                                            "kind": 201392130,
                                                            "text": 0,
                                                            "rawText": "0",
                                                            "flags": 96,
                                                            "start": 1284,
                                                            "end": 1285
                                                        },
                                                        "operatorToken": {
                                                            "kind": 33594,
                                                            "flags": 64,
                                                            "start": 1285,
                                                            "end": 1287
                                                        },
                                                        "right": {
                                                            "kind": 201392130,
                                                            "text": 0,
                                                            "rawText": "0",
                                                            "flags": 96,
                                                            "start": 1287,
                                                            "end": 1288
                                                        },
                                                        "flags": 32,
                                                        "start": 1285,
                                                        "end": 1288
                                                    },
                                                    "flags": 32,
                                                    "start": 1265,
                                                    "end": 1288
                                                },
                                                "questionToken": {
                                                    "kind": 134217750,
                                                    "flags": 64,
                                                    "start": 1288,
                                                    "end": 1289
                                                },
                                                "consequent": {
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 131,
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "async",
                                                            "rawText": "async",
                                                            "flags": 96,
                                                            "start": 1290,
                                                            "end": 1295
                                                        },
                                                        "argumentList": {
                                                            "kind": 256,
                                                            "elements": [
                                                                {
                                                                    "kind": 223,
                                                                    "ellipsisToken": {
                                                                        "kind": 524302,
                                                                        "flags": 64,
                                                                        "start": 1296,
                                                                        "end": 1299
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 1296,
                                                                    "end": 1300
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "start": 1290,
                                                            "end": 1290
                                                        },
                                                        "flags": 268435488,
                                                        "start": 1290,
                                                        "end": 1301
                                                    },
                                                    "flags": 32,
                                                    "start": 1289,
                                                    "end": 1302
                                                },
                                                "colonToken": {
                                                    "kind": 21,
                                                    "flags": 64,
                                                    "start": 1302,
                                                    "end": 1303
                                                },
                                                "alternate": {
                                                    "kind": 197,
                                                    "shortCircuit": {
                                                        "kind": 121,
                                                        "expression": {
                                                            "kind": 198,
                                                            "left": {
                                                                "kind": 201392130,
                                                                "text": 0,
                                                                "rawText": "0",
                                                                "flags": 96,
                                                                "start": 1304,
                                                                "end": 1305
                                                            },
                                                            "operatorToken": {
                                                                "kind": 35379,
                                                                "flags": 64,
                                                                "start": 1305,
                                                                "end": 1306
                                                            },
                                                            "right": {
                                                                "kind": 201392130,
                                                                "text": 0,
                                                                "rawText": "0",
                                                                "flags": 96,
                                                                "start": 1306,
                                                                "end": 1307
                                                            },
                                                            "flags": 32,
                                                            "start": 1304,
                                                            "end": 1307
                                                        },
                                                        "flags": 32,
                                                        "start": 1303,
                                                        "end": 1308
                                                    },
                                                    "questionToken": {
                                                        "kind": 134217750,
                                                        "flags": 64,
                                                        "start": 1308,
                                                        "end": 1309
                                                    },
                                                    "consequent": {
                                                        "kind": 121,
                                                        "expression": {
                                                            "kind": 197,
                                                            "shortCircuit": {
                                                                "kind": 198,
                                                                "left": {
                                                                    "kind": 201392130,
                                                                    "text": 0,
                                                                    "rawText": "0",
                                                                    "flags": 96,
                                                                    "start": 1310,
                                                                    "end": 1311
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 33339,
                                                                    "flags": 64,
                                                                    "start": 1311,
                                                                    "end": 1313
                                                                },
                                                                "right": {
                                                                    "kind": 201392130,
                                                                    "text": 0,
                                                                    "rawText": "0",
                                                                    "flags": 96,
                                                                    "start": 1313,
                                                                    "end": 1314
                                                                },
                                                                "flags": 32,
                                                                "start": 1310,
                                                                "end": 1314
                                                            },
                                                            "questionToken": {
                                                                "kind": 134217750,
                                                                "flags": 64,
                                                                "start": 1314,
                                                                "end": 1315
                                                            },
                                                            "consequent": {
                                                                "kind": 121,
                                                                "expression": {
                                                                    "kind": 121,
                                                                    "expression": {
                                                                        "kind": 125,
                                                                        "left": {
                                                                            "kind": 134299649,
                                                                            "text": "b",
                                                                            "rawText": "b",
                                                                            "flags": 96,
                                                                            "start": 1317,
                                                                            "end": 1318
                                                                        },
                                                                        "operatorToken": {
                                                                            "kind": 4125,
                                                                            "flags": 64,
                                                                            "start": 1318,
                                                                            "end": 1320
                                                                        },
                                                                        "right": {
                                                                            "kind": 134299649,
                                                                            "text": "a",
                                                                            "rawText": "a",
                                                                            "flags": 96,
                                                                            "start": 1320,
                                                                            "end": 1322
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 1316,
                                                                        "end": 1322
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 1316,
                                                                    "end": 1323
                                                                },
                                                                "flags": 32,
                                                                "start": 1315,
                                                                "end": 1324
                                                            },
                                                            "colonToken": {
                                                                "kind": 21,
                                                                "flags": 64,
                                                                "start": 1324,
                                                                "end": 1325
                                                            },
                                                            "alternate": {
                                                                "kind": 121,
                                                                "expression": {
                                                                    "kind": 121,
                                                                    "expression": {
                                                                        "kind": 127,
                                                                        "operandToken": {
                                                                            "kind": 196636,
                                                                            "flags": 64,
                                                                            "start": 1328,
                                                                            "end": 1330
                                                                        },
                                                                        "operand": {
                                                                            "kind": 134299649,
                                                                            "text": "a",
                                                                            "rawText": "a",
                                                                            "flags": 96,
                                                                            "start": 1327,
                                                                            "end": 1328
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 1326,
                                                                        "end": 1330
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 1326,
                                                                    "end": 1331
                                                                },
                                                                "flags": 32,
                                                                "start": 1325,
                                                                "end": 1332
                                                            },
                                                            "flags": 32,
                                                            "start": 1310,
                                                            "end": 1332
                                                        },
                                                        "flags": 32,
                                                        "start": 1309,
                                                        "end": 1333
                                                    },
                                                    "colonToken": {
                                                        "kind": 21,
                                                        "flags": 64,
                                                        "start": 1333,
                                                        "end": 1334
                                                    },
                                                    "alternate": {
                                                        "kind": 197,
                                                        "shortCircuit": {
                                                            "kind": 198,
                                                            "left": {
                                                                "kind": 121,
                                                                "expression": {
                                                                    "kind": 201392130,
                                                                    "text": 22,
                                                                    "rawText": "22",
                                                                    "flags": 96,
                                                                    "start": 1335,
                                                                    "end": 1337
                                                                },
                                                                "flags": 32,
                                                                "start": 1334,
                                                                "end": 1338
                                                            },
                                                            "operatorToken": {
                                                                "kind": 33594,
                                                                "flags": 64,
                                                                "start": 1338,
                                                                "end": 1340
                                                            },
                                                            "right": {
                                                                "kind": 198,
                                                                "left": {
                                                                    "kind": 221,
                                                                    "text": "/x/",
                                                                    "flags": 96,
                                                                    "start": 1340,
                                                                    "end": 1343
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 34098,
                                                                    "flags": 64,
                                                                    "start": 1343,
                                                                    "end": 1344
                                                                },
                                                                "right": {
                                                                    "kind": 24752947,
                                                                    "flags": 96,
                                                                    "start": 1344,
                                                                    "end": 1348
                                                                },
                                                                "flags": 32,
                                                                "start": 1343,
                                                                "end": 1348
                                                            },
                                                            "flags": 32,
                                                            "start": 1334,
                                                            "end": 1348
                                                        },
                                                        "questionToken": {
                                                            "kind": 134217750,
                                                            "flags": 64,
                                                            "start": 1348,
                                                            "end": 1349
                                                        },
                                                        "consequent": {
                                                            "kind": 121,
                                                            "expression": {
                                                                "kind": 205586437,
                                                                "flags": 96,
                                                                "start": 1350,
                                                                "end": 1355
                                                            },
                                                            "flags": 32,
                                                            "start": 1349,
                                                            "end": 1356
                                                        },
                                                        "colonToken": {
                                                            "kind": 21,
                                                            "flags": 64,
                                                            "start": 1356,
                                                            "end": 1357
                                                        },
                                                        "alternate": {
                                                            "kind": 121,
                                                            "expression": {
                                                                "kind": 131,
                                                                "expression": {
                                                                    "kind": 134299649,
                                                                    "text": "async",
                                                                    "rawText": "async",
                                                                    "flags": 96,
                                                                    "start": 1358,
                                                                    "end": 1363
                                                                },
                                                                "argumentList": {
                                                                    "kind": 256,
                                                                    "elements": [
                                                                        {
                                                                            "kind": 223,
                                                                            "ellipsisToken": {
                                                                                "kind": 524302,
                                                                                "flags": 64,
                                                                                "start": 1364,
                                                                                "end": 1367
                                                                            },
                                                                            "flags": 32,
                                                                            "start": 1364,
                                                                            "end": 1368
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "start": 1358,
                                                                    "end": 1358
                                                                },
                                                                "flags": 268435488,
                                                                "start": 1358,
                                                                "end": 1369
                                                            },
                                                            "flags": 32,
                                                            "start": 1357,
                                                            "end": 1370
                                                        },
                                                        "flags": 32,
                                                        "start": 1334,
                                                        "end": 1370
                                                    },
                                                    "flags": 32,
                                                    "start": 1303,
                                                    "end": 1370
                                                },
                                                "flags": 32,
                                                "start": 1265,
                                                "end": 1370
                                            },
                                            "flags": 32,
                                            "start": 1264,
                                            "end": 1371
                                        },
                                        "right": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "generatorToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "js",
                                                            "rawText": "js",
                                                            "flags": 96,
                                                            "start": 1373,
                                                            "end": 1375
                                                        },
                                                        "right": {
                                                            "kind": 119,
                                                            "elementList": {
                                                                "kind": 270,
                                                                "elements": [
                                                                    {
                                                                        "kind": 223,
                                                                        "ellipsisToken": {
                                                                            "kind": 524302,
                                                                            "flags": 64,
                                                                            "start": 1377,
                                                                            "end": 1380
                                                                        },
                                                                        "argument": {
                                                                            "kind": 134299649,
                                                                            "text": "ts",
                                                                            "rawText": "ts",
                                                                            "flags": 96,
                                                                            "start": 1380,
                                                                            "end": 1382
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 1377,
                                                                        "end": 1382
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "start": 1377,
                                                                "end": 1382
                                                            },
                                                            "flags": 32,
                                                            "start": 1376,
                                                            "end": 1383
                                                        },
                                                        "flags": 32,
                                                        "start": 1373,
                                                        "end": 1383
                                                    },
                                                    {
                                                        "kind": 134299649,
                                                        "text": "true",
                                                        "rawText": "true",
                                                        "flags": 96,
                                                        "start": 1384,
                                                        "end": 1388
                                                    },
                                                    {
                                                        "kind": 219,
                                                        "generatorToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "r",
                                                            "rawText": "r",
                                                            "flags": 96,
                                                            "start": 1389,
                                                            "end": 1390
                                                        },
                                                        "right": {
                                                            "kind": 220,
                                                            "propertyList": {
                                                                "kind": 218,
                                                                "properties": [
                                                                    {
                                                                        "kind": 219,
                                                                        "generatorToken": null,
                                                                        "left": {
                                                                            "kind": 134299649,
                                                                            "text": "x9",
                                                                            "rawText": "x9",
                                                                            "flags": 96,
                                                                            "start": 1392,
                                                                            "end": 1394
                                                                        },
                                                                        "right": {
                                                                            "kind": 134299649,
                                                                            "text": "z0",
                                                                            "rawText": "z0",
                                                                            "flags": 96,
                                                                            "start": 1395,
                                                                            "end": 1397
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 1392,
                                                                        "end": 1397
                                                                    },
                                                                    {
                                                                        "kind": 134299649,
                                                                        "text": "true",
                                                                        "rawText": "true",
                                                                        "flags": 96,
                                                                        "start": 1398,
                                                                        "end": 1402
                                                                    },
                                                                    {
                                                                        "kind": 219,
                                                                        "generatorToken": null,
                                                                        "left": {
                                                                            "kind": 194,
                                                                            "expression": {
                                                                                "kind": 197,
                                                                                "shortCircuit": {
                                                                                    "kind": 198,
                                                                                    "left": {
                                                                                        "kind": 201392130,
                                                                                        "text": 0,
                                                                                        "rawText": "0",
                                                                                        "flags": 96,
                                                                                        "start": 1404,
                                                                                        "end": 1405
                                                                                    },
                                                                                    "operatorToken": {
                                                                                        "kind": 35379,
                                                                                        "flags": 64,
                                                                                        "start": 1405,
                                                                                        "end": 1406
                                                                                    },
                                                                                    "right": {
                                                                                        "kind": 201392130,
                                                                                        "text": 0,
                                                                                        "rawText": "0",
                                                                                        "flags": 96,
                                                                                        "start": 1406,
                                                                                        "end": 1407
                                                                                    },
                                                                                    "flags": 32,
                                                                                    "start": 1404,
                                                                                    "end": 1407
                                                                                },
                                                                                "questionToken": {
                                                                                    "kind": 134217750,
                                                                                    "flags": 64,
                                                                                    "start": 1407,
                                                                                    "end": 1408
                                                                                },
                                                                                "consequent": {
                                                                                    "kind": 121,
                                                                                    "expression": {
                                                                                        "kind": 197,
                                                                                        "shortCircuit": {
                                                                                            "kind": 201392130,
                                                                                            "text": 0,
                                                                                            "rawText": "0",
                                                                                            "flags": 96,
                                                                                            "start": 1409,
                                                                                            "end": 1410
                                                                                        },
                                                                                        "questionToken": {
                                                                                            "kind": 134217750,
                                                                                            "flags": 64,
                                                                                            "start": 1410,
                                                                                            "end": 1411
                                                                                        },
                                                                                        "consequent": {
                                                                                            "kind": 121,
                                                                                            "expression": {
                                                                                                "kind": 201392130,
                                                                                                "text": 0,
                                                                                                "rawText": "0",
                                                                                                "flags": 96,
                                                                                                "start": 1412,
                                                                                                "end": 1413
                                                                                            },
                                                                                            "flags": 32,
                                                                                            "start": 1411,
                                                                                            "end": 1414
                                                                                        },
                                                                                        "colonToken": {
                                                                                            "kind": 21,
                                                                                            "flags": 64,
                                                                                            "start": 1414,
                                                                                            "end": 1415
                                                                                        },
                                                                                        "alternate": {
                                                                                            "kind": 121,
                                                                                            "expression": {
                                                                                                "kind": 201392130,
                                                                                                "text": 0,
                                                                                                "rawText": "0",
                                                                                                "flags": 96,
                                                                                                "start": 1416,
                                                                                                "end": 1417
                                                                                            },
                                                                                            "flags": 32,
                                                                                            "start": 1415,
                                                                                            "end": 1418
                                                                                        },
                                                                                        "flags": 32,
                                                                                        "start": 1409,
                                                                                        "end": 1418
                                                                                    },
                                                                                    "flags": 32,
                                                                                    "start": 1408,
                                                                                    "end": 1419
                                                                                },
                                                                                "colonToken": {
                                                                                    "kind": 21,
                                                                                    "flags": 64,
                                                                                    "start": 1419,
                                                                                    "end": 1420
                                                                                },
                                                                                "alternate": {
                                                                                    "kind": 121,
                                                                                    "expression": {
                                                                                        "kind": 121,
                                                                                        "expression": {
                                                                                            "kind": 127,
                                                                                            "operandToken": {
                                                                                                "kind": 196636,
                                                                                                "flags": 64,
                                                                                                "start": 1423,
                                                                                                "end": 1425
                                                                                            },
                                                                                            "operand": {
                                                                                                "kind": 134299649,
                                                                                                "text": "a",
                                                                                                "rawText": "a",
                                                                                                "flags": 96,
                                                                                                "start": 1422,
                                                                                                "end": 1423
                                                                                            },
                                                                                            "flags": 32,
                                                                                            "start": 1421,
                                                                                            "end": 1425
                                                                                        },
                                                                                        "flags": 32,
                                                                                        "start": 1421,
                                                                                        "end": 1426
                                                                                    },
                                                                                    "flags": 32,
                                                                                    "start": 1420,
                                                                                    "end": 1427
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 1404,
                                                                                "end": 1427
                                                                            },
                                                                            "flags": 32,
                                                                            "start": 1403,
                                                                            "end": 1428
                                                                        },
                                                                        "right": {
                                                                            "kind": 134299649,
                                                                            "text": "z1",
                                                                            "rawText": "z1",
                                                                            "flags": 96,
                                                                            "start": 1429,
                                                                            "end": 1431
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 1403,
                                                                        "end": 1431
                                                                    },
                                                                    {
                                                                        "kind": 134299649,
                                                                        "text": "true",
                                                                        "rawText": "true",
                                                                        "flags": 96,
                                                                        "start": 1432,
                                                                        "end": 1436
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 16,
                                                                "start": 1392,
                                                                "end": 1436
                                                            },
                                                            "flags": 48,
                                                            "start": 1391,
                                                            "end": 1437
                                                        },
                                                        "flags": 32,
                                                        "start": 1389,
                                                        "end": 1437
                                                    },
                                                    {
                                                        "kind": 219,
                                                        "generatorToken": null,
                                                        "left": {
                                                            "kind": 194,
                                                            "expression": {
                                                                "kind": 121,
                                                                "expression": {
                                                                    "kind": 126,
                                                                    "operandToken": {
                                                                        "kind": 65584,
                                                                        "flags": 64,
                                                                        "start": 1440,
                                                                        "end": 1441
                                                                    },
                                                                    "operand": {
                                                                        "kind": 134299649,
                                                                        "text": "a",
                                                                        "rawText": "a",
                                                                        "flags": 96,
                                                                        "start": 1441,
                                                                        "end": 1442
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 1440,
                                                                    "end": 1442
                                                                },
                                                                "flags": 32,
                                                                "start": 1439,
                                                                "end": 1443
                                                            },
                                                            "flags": 32,
                                                            "start": 1438,
                                                            "end": 1444
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "z",
                                                            "rawText": "z",
                                                            "flags": 96,
                                                            "start": 1445,
                                                            "end": 1446
                                                        },
                                                        "flags": 32,
                                                        "start": 1438,
                                                        "end": 1446
                                                    }
                                                ],
                                                "trailingComma": true,
                                                "flags": 16,
                                                "start": 1373,
                                                "end": 1447
                                            },
                                            "flags": 48,
                                            "start": 1372,
                                            "end": 1448
                                        },
                                        "flags": 32,
                                        "start": 1264,
                                        "end": 1448
                                    },
                                    {
                                        "kind": 224,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 1449,
                                            "end": 1452
                                        },
                                        "argument": {
                                            "kind": 134299649,
                                            "text": "z",
                                            "rawText": "z",
                                            "flags": 96,
                                            "start": 1452,
                                            "end": 1453
                                        },
                                        "flags": 32,
                                        "start": 1449,
                                        "end": 1453
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 1228,
                                "end": 1453
                            },
                            "flags": 48,
                            "start": 1227,
                            "end": 1454
                        },
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "generatorToken": null,
                                        "left": {
                                            "kind": 194,
                                            "expression": {
                                                "kind": 221,
                                                "text": "/x/g",
                                                "flags": 96,
                                                "start": 1457,
                                                "end": 1461
                                            },
                                            "flags": 32,
                                            "start": 1456,
                                            "end": 1462
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "qq",
                                            "rawText": "qq",
                                            "flags": 96,
                                            "start": 1463,
                                            "end": 1465
                                        },
                                        "flags": 32,
                                        "start": 1456,
                                        "end": 1465
                                    },
                                    {
                                        "kind": 219,
                                        "generatorToken": null,
                                        "left": {
                                            "kind": 194,
                                            "expression": {
                                                "kind": 221,
                                                "text": "/x/g",
                                                "flags": 96,
                                                "start": 1467,
                                                "end": 1471
                                            },
                                            "flags": 32,
                                            "start": 1466,
                                            "end": 1472
                                        },
                                        "right": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "generatorToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "z5",
                                                            "rawText": "z5",
                                                            "flags": 96,
                                                            "start": 1474,
                                                            "end": 1476
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "z6",
                                                            "rawText": "z6",
                                                            "flags": 96,
                                                            "start": 1477,
                                                            "end": 1479
                                                        },
                                                        "flags": 32,
                                                        "start": 1474,
                                                        "end": 1479
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "start": 1474,
                                                "end": 1479
                                            },
                                            "flags": 48,
                                            "start": 1473,
                                            "end": 1480
                                        },
                                        "flags": 32,
                                        "start": 1466,
                                        "end": 1480
                                    },
                                    {
                                        "kind": 224,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 1481,
                                            "end": 1484
                                        },
                                        "argument": {
                                            "kind": 134299649,
                                            "text": "z7",
                                            "rawText": "z7",
                                            "flags": 96,
                                            "start": 1484,
                                            "end": 1486
                                        },
                                        "flags": 32,
                                        "start": 1481,
                                        "end": 1486
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 1456,
                                "end": 1486
                            },
                            "flags": 48,
                            "start": 1455,
                            "end": 1487
                        },
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 134299649,
                                        "text": "true",
                                        "rawText": "true",
                                        "flags": 96,
                                        "start": 1489,
                                        "end": 1493
                                    },
                                    {
                                        "kind": 224,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 1494,
                                            "end": 1497
                                        },
                                        "argument": {
                                            "kind": 134299649,
                                            "text": "z8",
                                            "rawText": "z8",
                                            "flags": 96,
                                            "start": 1497,
                                            "end": 1499
                                        },
                                        "flags": 32,
                                        "start": 1494,
                                        "end": 1499
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 1489,
                                "end": 1499
                            },
                            "flags": 48,
                            "start": 1488,
                            "end": 1500
                        },
                        {
                            "kind": 134299649,
                            "text": "z9",
                            "rawText": "z9",
                            "flags": 96,
                            "start": 1501,
                            "end": 1503
                        },
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "generatorToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "a0",
                                            "rawText": "a0",
                                            "flags": 96,
                                            "start": 1505,
                                            "end": 1507
                                        },
                                        "right": {
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
                                                                "start": 1509,
                                                                "end": 1512
                                                            },
                                                            "argument": {
                                                                "kind": 134299649,
                                                                "text": "a1",
                                                                "rawText": "a1",
                                                                "flags": 96,
                                                                "start": 1512,
                                                                "end": 1514
                                                            },
                                                            "flags": 32,
                                                            "start": 1509,
                                                            "end": 1514
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 1509,
                                                    "end": 1514
                                                },
                                                "flags": 32,
                                                "start": 1508,
                                                "end": 1515
                                            },
                                            "operatorToken": {
                                                "kind": 4125,
                                                "flags": 64,
                                                "start": 1515,
                                                "end": 1517
                                            },
                                            "right": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 127,
                                                    "operandToken": {
                                                        "kind": 196636,
                                                        "flags": 64,
                                                        "start": 1520,
                                                        "end": 1522
                                                    },
                                                    "operand": {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 96,
                                                        "start": 1519,
                                                        "end": 1520
                                                    },
                                                    "flags": 32,
                                                    "start": 1517,
                                                    "end": 1522
                                                },
                                                "flags": 32,
                                                "start": 1517,
                                                "end": 1523
                                            },
                                            "flags": 32,
                                            "start": 1508,
                                            "end": 1523
                                        },
                                        "flags": 32,
                                        "start": 1505,
                                        "end": 1523
                                    },
                                    {
                                        "kind": 219,
                                        "generatorToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "a2",
                                            "rawText": "a2",
                                            "flags": 96,
                                            "start": 1524,
                                            "end": 1526
                                        },
                                        "right": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "generatorToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "a3",
                                                            "rawText": "a3",
                                                            "flags": 96,
                                                            "start": 1528,
                                                            "end": 1530
                                                        },
                                                        "right": {
                                                            "kind": 220,
                                                            "propertyList": {
                                                                "kind": 218,
                                                                "properties": [
                                                                    {
                                                                        "kind": 219,
                                                                        "generatorToken": null,
                                                                        "left": {
                                                                            "kind": 134299649,
                                                                            "text": "a4",
                                                                            "rawText": "a4",
                                                                            "flags": 96,
                                                                            "start": 1532,
                                                                            "end": 1534
                                                                        },
                                                                        "right": {
                                                                            "kind": 134299649,
                                                                            "text": "a5",
                                                                            "rawText": "a5",
                                                                            "flags": 96,
                                                                            "start": 1535,
                                                                            "end": 1537
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 1532,
                                                                        "end": 1537
                                                                    },
                                                                    {
                                                                        "kind": 219,
                                                                        "generatorToken": null,
                                                                        "left": {
                                                                            "kind": 134299649,
                                                                            "text": "a6",
                                                                            "rawText": "a6",
                                                                            "flags": 96,
                                                                            "start": 1538,
                                                                            "end": 1540
                                                                        },
                                                                        "right": {
                                                                            "kind": 134299649,
                                                                            "text": "a7",
                                                                            "rawText": "a7",
                                                                            "flags": 96,
                                                                            "start": 1541,
                                                                            "end": 1543
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 1538,
                                                                        "end": 1543
                                                                    },
                                                                    {
                                                                        "kind": 219,
                                                                        "generatorToken": null,
                                                                        "left": {
                                                                            "kind": 194,
                                                                            "expression": {
                                                                                "kind": 121,
                                                                                "expression": {
                                                                                    "kind": 128,
                                                                                    "operandToken": {
                                                                                        "kind": 196635,
                                                                                        "flags": 64,
                                                                                        "start": 1546,
                                                                                        "end": 1548
                                                                                    },
                                                                                    "operand": {
                                                                                        "kind": 134299649,
                                                                                        "text": "a",
                                                                                        "rawText": "a",
                                                                                        "flags": 96,
                                                                                        "start": 1548,
                                                                                        "end": 1549
                                                                                    },
                                                                                    "flags": 32,
                                                                                    "start": 1546,
                                                                                    "end": 1549
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 1545,
                                                                                "end": 1550
                                                                            },
                                                                            "flags": 32,
                                                                            "start": 1544,
                                                                            "end": 1551
                                                                        },
                                                                        "right": {
                                                                            "kind": 134299649,
                                                                            "text": "a8",
                                                                            "rawText": "a8",
                                                                            "flags": 96,
                                                                            "start": 1552,
                                                                            "end": 1554
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 1544,
                                                                        "end": 1554
                                                                    },
                                                                    {
                                                                        "kind": 219,
                                                                        "generatorToken": null,
                                                                        "left": {
                                                                            "kind": 134299649,
                                                                            "text": "a9",
                                                                            "rawText": "a9",
                                                                            "flags": 96,
                                                                            "start": 1555,
                                                                            "end": 1557
                                                                        },
                                                                        "right": {
                                                                            "kind": 134299649,
                                                                            "text": "q0",
                                                                            "rawText": "q0",
                                                                            "flags": 96,
                                                                            "start": 1558,
                                                                            "end": 1560
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 1555,
                                                                        "end": 1560
                                                                    },
                                                                    {
                                                                        "kind": 224,
                                                                        "ellipsisToken": {
                                                                            "kind": 524302,
                                                                            "flags": 64,
                                                                            "start": 1561,
                                                                            "end": 1564
                                                                        },
                                                                        "argument": {
                                                                            "kind": 134299649,
                                                                            "text": "q1",
                                                                            "rawText": "q1",
                                                                            "flags": 96,
                                                                            "start": 1564,
                                                                            "end": 1566
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 1561,
                                                                        "end": 1566
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 16,
                                                                "start": 1532,
                                                                "end": 1566
                                                            },
                                                            "flags": 48,
                                                            "start": 1531,
                                                            "end": 1567
                                                        },
                                                        "flags": 32,
                                                        "start": 1528,
                                                        "end": 1567
                                                    },
                                                    {
                                                        "kind": 224,
                                                        "ellipsisToken": {
                                                            "kind": 524302,
                                                            "flags": 64,
                                                            "start": 1568,
                                                            "end": 1571
                                                        },
                                                        "argument": {
                                                            "kind": 134299649,
                                                            "text": "q2",
                                                            "rawText": "q2",
                                                            "flags": 96,
                                                            "start": 1571,
                                                            "end": 1573
                                                        },
                                                        "flags": 32,
                                                        "start": 1568,
                                                        "end": 1573
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "start": 1528,
                                                "end": 1573
                                            },
                                            "flags": 48,
                                            "start": 1527,
                                            "end": 1574
                                        },
                                        "flags": 32,
                                        "start": 1524,
                                        "end": 1574
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "true",
                                        "rawText": "true",
                                        "flags": 96,
                                        "start": 1575,
                                        "end": 1579
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 16,
                                "start": 1505,
                                "end": 1580
                            },
                            "flags": 48,
                            "start": 1504,
                            "end": 1581
                        }
                    ]
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 1587,
                        "end": 1587
                    },
                    "flags": 32,
                    "start": 1585,
                    "end": 1588
                },
                "flags": 34,
                "start": 1219,
                "end": 1588
            },
            "flags": 16,
            "start": 1219,
            "end": 1589
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 1631,
                    "end": 1634
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "generatorToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "z",
                                            "rawText": "z",
                                            "flags": 96,
                                            "start": 1593,
                                            "end": 1594
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 1595,
                                            "end": 1596
                                        },
                                        "flags": 32,
                                        "start": 1593,
                                        "end": 1596
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "true",
                                        "rawText": "true",
                                        "flags": 96,
                                        "start": 1597,
                                        "end": 1601
                                    },
                                    {
                                        "kind": 219,
                                        "generatorToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "q",
                                            "rawText": "q",
                                            "flags": 96,
                                            "start": 1602,
                                            "end": 1603
                                        },
                                        "right": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [
                                                    {
                                                        "kind": 223,
                                                        "ellipsisToken": {
                                                            "kind": 524302,
                                                            "flags": 64,
                                                            "start": 1605,
                                                            "end": 1608
                                                        },
                                                        "argument": {
                                                            "kind": 134299649,
                                                            "text": "t",
                                                            "rawText": "t",
                                                            "flags": 96,
                                                            "start": 1608,
                                                            "end": 1609
                                                        },
                                                        "flags": 32,
                                                        "start": 1605,
                                                        "end": 1609
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 1605,
                                                "end": 1609
                                            },
                                            "flags": 32,
                                            "start": 1604,
                                            "end": 1610
                                        },
                                        "flags": 32,
                                        "start": 1602,
                                        "end": 1610
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 16,
                                "start": 1593,
                                "end": 1611
                            },
                            "flags": 48,
                            "start": 1592,
                            "end": 1612
                        },
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "generatorToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "r",
                                            "rawText": "r",
                                            "flags": 96,
                                            "start": 1614,
                                            "end": 1615
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "js",
                                            "rawText": "js",
                                            "flags": 96,
                                            "start": 1616,
                                            "end": 1618
                                        },
                                        "flags": 32,
                                        "start": 1614,
                                        "end": 1618
                                    },
                                    {
                                        "kind": 219,
                                        "generatorToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "ts",
                                            "rawText": "ts",
                                            "flags": 96,
                                            "start": 1619,
                                            "end": 1621
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "r",
                                            "rawText": "r",
                                            "flags": 96,
                                            "start": 1622,
                                            "end": 1623
                                        },
                                        "flags": 32,
                                        "start": 1619,
                                        "end": 1623
                                    },
                                    {
                                        "kind": 224,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 1624,
                                            "end": 1627
                                        },
                                        "argument": {
                                            "kind": 134299649,
                                            "text": "x9",
                                            "rawText": "x9",
                                            "flags": 96,
                                            "start": 1627,
                                            "end": 1629
                                        },
                                        "flags": 32,
                                        "start": 1624,
                                        "end": 1629
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 1614,
                                "end": 1629
                            },
                            "flags": 48,
                            "start": 1613,
                            "end": 1630
                        }
                    ]
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 1636,
                        "end": 1636
                    },
                    "flags": 32,
                    "start": 1634,
                    "end": 1637
                },
                "flags": 34,
                "start": 1589,
                "end": 1637
            },
            "flags": 16,
            "start": 1589,
            "end": 1638
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 1756,
            "end": 1757
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "start": 1762,
                "end": 1764
            },
            "flags": 16,
            "start": 1762,
            "end": 1765
        },
        {
            "kind": 120,
            "expression": {
                "kind": 536871042,
                "member": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "start": 1765,
                    "end": 1769
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 1770,
                    "end": 1770
                },
                "flags": 32,
                "start": 1765,
                "end": 1773
            },
            "flags": 16,
            "start": 1765,
            "end": 1774
        },
        {
            "kind": 120,
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 1774,
                "end": 1774
            },
            "flags": 16,
            "start": 1774,
            "end": 1778
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 1850,
                    "end": 1850
                },
                "flags": 32,
                "start": 1778,
                "end": 1853
            },
            "flags": 16,
            "start": 1778,
            "end": 1853
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "start": 1856,
                "end": 1858
            },
            "flags": 16,
            "start": 1856,
            "end": 1859
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 1862,
                        "end": 1863
                    },
                    "flags": 32,
                    "start": 1861,
                    "end": 1864
                },
                "flags": 32,
                "start": 1859,
                "end": 1865
            },
            "flags": 16,
            "start": 1859,
            "end": 1865
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "start": 1868,
                "end": 1870
            },
            "flags": 16,
            "start": 1868,
            "end": 1871
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 132,
                        "expressions": [
                            {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 1874,
                                "end": 1875
                            },
                            {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 1876,
                                "end": 1878
                            }
                        ],
                        "flags": 32,
                        "start": 1873,
                        "end": 1879
                    },
                    "flags": 32,
                    "start": 1873,
                    "end": 1879
                },
                "flags": 32,
                "start": 1871,
                "end": 1880
            },
            "flags": 16,
            "start": 1871,
            "end": 1880
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "start": 1883,
                "end": 1885
            },
            "flags": 16,
            "start": 1883,
            "end": 1886
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
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 1888,
                            "end": 1889
                        },
                        {
                            "kind": 121,
                            "expression": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 1892,
                                "end": 1893
                            },
                            "flags": 32,
                            "start": 1890,
                            "end": 1894
                        }
                    ],
                    "flags": 32,
                    "start": 1886,
                    "end": 1894
                },
                "flags": 32,
                "start": 1886,
                "end": 1895
            },
            "flags": 16,
            "start": 1886,
            "end": 1895
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "start": 1898,
                "end": 1900
            },
            "flags": 16,
            "start": 1898,
            "end": 1901
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 132,
                        "expressions": [
                            {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 1904,
                                "end": 1905
                            },
                            {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 1906,
                                "end": 1908
                            },
                            {
                                "kind": 134299649,
                                "text": "z",
                                "rawText": "z",
                                "flags": 96,
                                "start": 1909,
                                "end": 1911
                            }
                        ],
                        "flags": 32,
                        "start": 1903,
                        "end": 1912
                    },
                    "flags": 32,
                    "start": 1903,
                    "end": 1912
                },
                "flags": 32,
                "start": 1901,
                "end": 1913
            },
            "flags": 16,
            "start": 1901,
            "end": 1913
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "start": 1916,
                "end": 1918
            },
            "flags": 16,
            "start": 1916,
            "end": 1919
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
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 1921,
                            "end": 1922
                        },
                        {
                            "kind": 121,
                            "expression": {
                                "kind": 132,
                                "expressions": [
                                    {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "start": 1925,
                                        "end": 1926
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 96,
                                        "start": 1927,
                                        "end": 1929
                                    }
                                ],
                                "flags": 32,
                                "start": 1923,
                                "end": 1930
                            },
                            "flags": 32,
                            "start": 1923,
                            "end": 1930
                        }
                    ],
                    "flags": 32,
                    "start": 1919,
                    "end": 1930
                },
                "flags": 32,
                "start": 1919,
                "end": 1931
            },
            "flags": 16,
            "start": 1919,
            "end": 1931
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "start": 1934,
                "end": 1936
            },
            "flags": 16,
            "start": 1934,
            "end": 1937
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 121,
                            "expression": {
                                "kind": 132,
                                "expressions": [
                                    {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 1940,
                                        "end": 1941
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "start": 1942,
                                        "end": 1944
                                    }
                                ],
                                "flags": 32,
                                "start": 1939,
                                "end": 1945
                            },
                            "flags": 32,
                            "start": 1939,
                            "end": 1945
                        },
                        {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "start": 1946,
                            "end": 1948
                        }
                    ],
                    "flags": 32,
                    "start": 1937,
                    "end": 1948
                },
                "flags": 32,
                "start": 1937,
                "end": 1949
            },
            "flags": 16,
            "start": 1937,
            "end": 1949
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "start": 1952,
                "end": 1954
            },
            "flags": 16,
            "start": 1952,
            "end": 1955
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 2193,
                    "end": 2196
                },
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "eval",
                    "rawText": "eval",
                    "flags": 96,
                    "start": 1955,
                    "end": 2193
                },
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [
                            {
                                "kind": 201392131,
                                "text": "use strict",
                                "rawText": "'use strict'",
                                "flags": 4194400,
                                "start": 2198,
                                "end": 2211
                            }
                        ],
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 96,
                                    "start": 2212,
                                    "end": 2214
                                },
                                "flags": 16,
                                "start": 2212,
                                "end": 2214
                            }
                        ],
                        "flags": 4194336,
                        "start": 2198,
                        "end": 2214
                    },
                    "flags": 32,
                    "start": 2196,
                    "end": 2216
                },
                "flags": 32,
                "start": 1955,
                "end": 2216
            },
            "flags": 16,
            "start": 1955,
            "end": 2217
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 2227,
                    "end": 2230
                },
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "arguments",
                    "rawText": "arguments",
                    "flags": 96,
                    "start": 2217,
                    "end": 2227
                },
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [
                            {
                                "kind": 201392131,
                                "text": "use strict",
                                "rawText": "'use strict'",
                                "flags": 4194400,
                                "start": 2232,
                                "end": 2245
                            }
                        ],
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 96,
                                    "start": 2246,
                                    "end": 2248
                                },
                                "flags": 16,
                                "start": 2246,
                                "end": 2248
                            }
                        ],
                        "flags": 4194336,
                        "start": 2232,
                        "end": 2248
                    },
                    "flags": 32,
                    "start": 2230,
                    "end": 2250
                },
                "flags": 32,
                "start": 2217,
                "end": 2250
            },
            "flags": 16,
            "start": 2217,
            "end": 2251
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 2257,
                    "end": 2260
                },
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "yield",
                    "rawText": "yield",
                    "flags": 96,
                    "start": 2251,
                    "end": 2257
                },
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [
                            {
                                "kind": 201392131,
                                "text": "use strict",
                                "rawText": "'use strict'",
                                "flags": 4194400,
                                "start": 2262,
                                "end": 2275
                            }
                        ],
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 96,
                                    "start": 2276,
                                    "end": 2278
                                },
                                "flags": 16,
                                "start": 2276,
                                "end": 2278
                            }
                        ],
                        "flags": 4194336,
                        "start": 2262,
                        "end": 2278
                    },
                    "flags": 32,
                    "start": 2260,
                    "end": 2280
                },
                "flags": 32,
                "start": 2251,
                "end": 2280
            },
            "flags": 16,
            "start": 2251,
            "end": 2281
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 2291,
                    "end": 2294
                },
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "interface",
                    "rawText": "interface",
                    "flags": 96,
                    "start": 2281,
                    "end": 2291
                },
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [
                            {
                                "kind": 201392131,
                                "text": "use strict",
                                "rawText": "'use strict'",
                                "flags": 4194400,
                                "start": 2296,
                                "end": 2309
                            }
                        ],
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 96,
                                    "start": 2310,
                                    "end": 2312
                                },
                                "flags": 16,
                                "start": 2310,
                                "end": 2312
                            }
                        ],
                        "flags": 4194336,
                        "start": 2296,
                        "end": 2312
                    },
                    "flags": 32,
                    "start": 2294,
                    "end": 2314
                },
                "flags": 32,
                "start": 2281,
                "end": 2314
            },
            "flags": 16,
            "start": 2281,
            "end": 2315
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 2322,
                    "end": 2325
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 134299649,
                        "text": "eval",
                        "rawText": "eval",
                        "flags": 96,
                        "start": 2317,
                        "end": 2321
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [
                            {
                                "kind": 201392131,
                                "text": "use strict",
                                "rawText": "'use strict'",
                                "flags": 4194400,
                                "start": 2327,
                                "end": 2340
                            }
                        ],
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 96,
                                    "start": 2341,
                                    "end": 2343
                                },
                                "flags": 16,
                                "start": 2341,
                                "end": 2343
                            }
                        ],
                        "flags": 4194336,
                        "start": 2327,
                        "end": 2343
                    },
                    "flags": 32,
                    "start": 2325,
                    "end": 2345
                },
                "flags": 32,
                "start": 2315,
                "end": 2345
            },
            "flags": 16,
            "start": 2315,
            "end": 2346
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 2358,
                    "end": 2361
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 134299649,
                        "text": "arguments",
                        "rawText": "arguments",
                        "flags": 96,
                        "start": 2348,
                        "end": 2357
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [
                            {
                                "kind": 201392131,
                                "text": "use strict",
                                "rawText": "'use strict'",
                                "flags": 4194400,
                                "start": 2363,
                                "end": 2376
                            }
                        ],
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 96,
                                    "start": 2377,
                                    "end": 2379
                                },
                                "flags": 16,
                                "start": 2377,
                                "end": 2379
                            }
                        ],
                        "flags": 4194336,
                        "start": 2363,
                        "end": 2379
                    },
                    "flags": 32,
                    "start": 2361,
                    "end": 2381
                },
                "flags": 32,
                "start": 2346,
                "end": 2381
            },
            "flags": 16,
            "start": 2346,
            "end": 2382
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 2390,
                    "end": 2393
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 134299649,
                        "text": "yield",
                        "rawText": "yield",
                        "flags": 96,
                        "start": 2384,
                        "end": 2389
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [
                            {
                                "kind": 201392131,
                                "text": "use strict",
                                "rawText": "'use strict'",
                                "flags": 4194400,
                                "start": 2395,
                                "end": 2408
                            }
                        ],
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 96,
                                    "start": 2409,
                                    "end": 2411
                                },
                                "flags": 16,
                                "start": 2409,
                                "end": 2411
                            }
                        ],
                        "flags": 4194336,
                        "start": 2395,
                        "end": 2411
                    },
                    "flags": 32,
                    "start": 2393,
                    "end": 2413
                },
                "flags": 32,
                "start": 2382,
                "end": 2413
            },
            "flags": 16,
            "start": 2382,
            "end": 2414
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 2426,
                    "end": 2429
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 134299649,
                        "text": "interface",
                        "rawText": "interface",
                        "flags": 96,
                        "start": 2416,
                        "end": 2425
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [
                            {
                                "kind": 201392131,
                                "text": "use strict",
                                "rawText": "'use strict'",
                                "flags": 4194400,
                                "start": 2431,
                                "end": 2444
                            }
                        ],
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 96,
                                    "start": 2445,
                                    "end": 2447
                                },
                                "flags": 16,
                                "start": 2445,
                                "end": 2447
                            }
                        ],
                        "flags": 4194336,
                        "start": 2431,
                        "end": 2447
                    },
                    "flags": 32,
                    "start": 2429,
                    "end": 2449
                },
                "flags": 32,
                "start": 2414,
                "end": 2449
            },
            "flags": 16,
            "start": 2414,
            "end": 2450
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 2462,
                    "end": 2465
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 134299649,
                            "text": "eval",
                            "rawText": "eval",
                            "flags": 96,
                            "start": 2452,
                            "end": 2456
                        },
                        {
                            "kind": 134299649,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 96,
                            "start": 2457,
                            "end": 2461
                        }
                    ]
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [
                            {
                                "kind": 201392131,
                                "text": "use strict",
                                "rawText": "'use strict'",
                                "flags": 4194400,
                                "start": 2467,
                                "end": 2480
                            }
                        ],
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 96,
                                    "start": 2481,
                                    "end": 2483
                                },
                                "flags": 16,
                                "start": 2481,
                                "end": 2483
                            }
                        ],
                        "flags": 4194336,
                        "start": 2467,
                        "end": 2483
                    },
                    "flags": 32,
                    "start": 2465,
                    "end": 2485
                },
                "flags": 32,
                "start": 2450,
                "end": 2485
            },
            "flags": 16,
            "start": 2450,
            "end": 2486
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 2498,
                    "end": 2501
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 134299649,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 96,
                            "start": 2488,
                            "end": 2491
                        },
                        {
                            "kind": 134299649,
                            "text": "eval",
                            "rawText": "eval",
                            "flags": 96,
                            "start": 2492,
                            "end": 2497
                        }
                    ]
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [
                            {
                                "kind": 201392131,
                                "text": "use strict",
                                "rawText": "'use strict'",
                                "flags": 4194400,
                                "start": 2503,
                                "end": 2516
                            }
                        ],
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 96,
                                    "start": 2517,
                                    "end": 2519
                                },
                                "flags": 16,
                                "start": 2517,
                                "end": 2519
                            }
                        ],
                        "flags": 4194336,
                        "start": 2503,
                        "end": 2519
                    },
                    "flags": 32,
                    "start": 2501,
                    "end": 2521
                },
                "flags": 32,
                "start": 2486,
                "end": 2521
            },
            "flags": 16,
            "start": 2486,
            "end": 2522
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 2539,
                    "end": 2542
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 134299649,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 96,
                            "start": 2524,
                            "end": 2527
                        },
                        {
                            "kind": 134299649,
                            "text": "arguments",
                            "rawText": "arguments",
                            "flags": 96,
                            "start": 2528,
                            "end": 2538
                        }
                    ]
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [
                            {
                                "kind": 201392131,
                                "text": "use strict",
                                "rawText": "'use strict'",
                                "flags": 4194400,
                                "start": 2544,
                                "end": 2557
                            }
                        ],
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 96,
                                    "start": 2558,
                                    "end": 2560
                                },
                                "flags": 16,
                                "start": 2558,
                                "end": 2560
                            }
                        ],
                        "flags": 4194336,
                        "start": 2544,
                        "end": 2560
                    },
                    "flags": 32,
                    "start": 2542,
                    "end": 2562
                },
                "flags": 32,
                "start": 2522,
                "end": 2562
            },
            "flags": 16,
            "start": 2522,
            "end": 2563
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 2576,
                    "end": 2579
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 134299649,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 96,
                            "start": 2565,
                            "end": 2568
                        },
                        {
                            "kind": 134299649,
                            "text": "yield",
                            "rawText": "yield",
                            "flags": 96,
                            "start": 2569,
                            "end": 2575
                        }
                    ]
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [
                            {
                                "kind": 201392131,
                                "text": "use strict",
                                "rawText": "'use strict'",
                                "flags": 4194400,
                                "start": 2581,
                                "end": 2594
                            }
                        ],
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 96,
                                    "start": 2595,
                                    "end": 2597
                                },
                                "flags": 16,
                                "start": 2595,
                                "end": 2597
                            }
                        ],
                        "flags": 4194336,
                        "start": 2581,
                        "end": 2597
                    },
                    "flags": 32,
                    "start": 2579,
                    "end": 2599
                },
                "flags": 32,
                "start": 2563,
                "end": 2599
            },
            "flags": 16,
            "start": 2563,
            "end": 2600
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 2617,
                    "end": 2620
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 134299649,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 96,
                            "start": 2602,
                            "end": 2605
                        },
                        {
                            "kind": 134299649,
                            "text": "interface",
                            "rawText": "interface",
                            "flags": 96,
                            "start": 2606,
                            "end": 2616
                        }
                    ]
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [
                            {
                                "kind": 201392131,
                                "text": "use strict",
                                "rawText": "'use strict'",
                                "flags": 4194400,
                                "start": 2622,
                                "end": 2635
                            }
                        ],
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 96,
                                    "start": 2636,
                                    "end": 2638
                                },
                                "flags": 16,
                                "start": 2636,
                                "end": 2638
                            }
                        ],
                        "flags": 4194336,
                        "start": 2622,
                        "end": 2638
                    },
                    "flags": 32,
                    "start": 2620,
                    "end": 2640
                },
                "flags": 32,
                "start": 2600,
                "end": 2640
            },
            "flags": 16,
            "start": 2600,
            "end": 2641
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 32,
                "rawText": "32",
                "flags": 97,
                "start": 2641,
                "end": 2858
            },
            "flags": 16,
            "start": 2641,
            "end": 2858
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 2863,
                "end": 2863
            },
            "flags": 16,
            "start": 2861,
            "end": 2864
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 2864,
            "end": 2865
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 201392130,
                    "text": 32,
                    "rawText": "32",
                    "flags": 96,
                    "start": 2867,
                    "end": 2869
                },
                "flags": 32,
                "start": 2865,
                "end": 2870
            },
            "flags": 16,
            "start": 2865,
            "end": 2870
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 2875,
                "end": 2875
            },
            "flags": 16,
            "start": 2873,
            "end": 2876
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 2876,
            "end": 2877
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
                            "start": 2879,
                            "end": 2880
                        },
                        {
                            "kind": 201392130,
                            "text": 32,
                            "rawText": "32",
                            "flags": 96,
                            "start": 2881,
                            "end": 2884
                        }
                    ],
                    "flags": 32,
                    "start": 2877,
                    "end": 2884
                },
                "flags": 32,
                "start": 2877,
                "end": 2885
            },
            "flags": 16,
            "start": 2877,
            "end": 2885
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 2890,
                "end": 2890
            },
            "flags": 16,
            "start": 2888,
            "end": 2891
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 2891,
            "end": 2892
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 81,
                "start": 2892,
                "end": 2895
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 2895,
                "end": 2895
            },
            "consequent": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 2895,
                    "end": 2895
                },
                "flags": 16,
                "start": 2895,
                "end": 2895
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 16,
            "start": 2892,
            "end": 2895
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 2900,
                "end": 2900
            },
            "flags": 16,
            "start": 2898,
            "end": 2901
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 2901,
            "end": 2902
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 2904,
                    "end": 2904
                },
                "flags": 32,
                "start": 2902,
                "end": 2904
            },
            "flags": 16,
            "start": 2902,
            "end": 2904
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 80,
                "start": 2904,
                "end": 2906
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 2906,
                "end": 2906
            },
            "consequent": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 2907,
                    "end": 2907
                },
                "flags": 16,
                "start": 2907,
                "end": 2907
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 16,
            "start": 2904,
            "end": 2907
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 2912,
                "end": 2912
            },
            "flags": 16,
            "start": 2910,
            "end": 2913
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 2913,
            "end": 2914
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
                            "start": 2916,
                            "end": 2917
                        }
                    ],
                    "flags": 32,
                    "start": 2914,
                    "end": 2918
                },
                "flags": 32,
                "start": 2914,
                "end": 2918
            },
            "flags": 16,
            "start": 2914,
            "end": 2918
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 80,
                "start": 2918,
                "end": 2921
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 2921,
                "end": 2921
            },
            "consequent": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 2922,
                    "end": 2922
                },
                "flags": 16,
                "start": 2922,
                "end": 2922
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 16,
            "start": 2918,
            "end": 2922
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 2927,
                "end": 2927
            },
            "flags": 16,
            "start": 2925,
            "end": 2928
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 2928,
            "end": 2929
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 2929,
                    "end": 2931
                },
                "operatorToken": {
                    "kind": 34098,
                    "flags": 64,
                    "start": 2931,
                    "end": 2933
                },
                "right": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 2935,
                        "end": 2938
                    },
                    "typeParameters": null,
                    "parameters": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 2933,
                        "end": 2935
                    },
                    "asyncKeyword": null,
                    "returnType": null,
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 2940,
                            "end": 2940
                        },
                        "flags": 32,
                        "start": 2938,
                        "end": 2941
                    },
                    "flags": 32,
                    "start": 2933,
                    "end": 2941
                },
                "flags": 32,
                "start": 2929,
                "end": 2941
            },
            "flags": 16,
            "start": 2929,
            "end": 2942
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 2944,
                        "end": 2945
                    },
                    "operatorToken": {
                        "kind": 34098,
                        "flags": 64,
                        "start": 2945,
                        "end": 2947
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 2947,
                        "end": 2949
                    },
                    "flags": 32,
                    "start": 2942,
                    "end": 2949
                },
                "flags": 32,
                "start": 2942,
                "end": 2950
            },
            "flags": 16,
            "start": 2942,
            "end": 2950
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 2955,
                "end": 2955
            },
            "flags": 16,
            "start": 2953,
            "end": 2956
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 2956,
            "end": 2957
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 2968,
                    "end": 2971
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 2959,
                                "end": 2960
                            },
                            "operatorToken": {
                                "kind": 34098,
                                "flags": 64,
                                "start": 2960,
                                "end": 2962
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 2962,
                                "end": 2964
                            },
                            "flags": 32,
                            "start": 2957,
                            "end": 2964
                        },
                        {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "start": 2965,
                            "end": 2967
                        }
                    ]
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 2973,
                        "end": 2973
                    },
                    "flags": 32,
                    "start": 2971,
                    "end": 2974
                },
                "flags": 32,
                "start": 2957,
                "end": 2974
            },
            "flags": 16,
            "start": 2957,
            "end": 2975
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
                            "start": 2977,
                            "end": 2978
                        },
                        {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 2979,
                                "end": 2981
                            },
                            "operatorToken": {
                                "kind": 35379,
                                "flags": 64,
                                "start": 2981,
                                "end": 2983
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "start": 2983,
                                "end": 2985
                            },
                            "flags": 32,
                            "start": 2975,
                            "end": 2985
                        }
                    ],
                    "flags": 32,
                    "start": 2975,
                    "end": 2986
                },
                "flags": 32,
                "start": 2975,
                "end": 2986
            },
            "flags": 16,
            "start": 2975,
            "end": 2986
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 2991,
                "end": 2991
            },
            "flags": 16,
            "start": 2989,
            "end": 2992
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 2992,
            "end": 2993
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "a",
                "rawText": "\"a\"",
                "flags": 97,
                "start": 2993,
                "end": 2997
            },
            "flags": 16,
            "start": 2993,
            "end": 2997
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 3002,
                "end": 3002
            },
            "flags": 16,
            "start": 3000,
            "end": 3003
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 3003,
            "end": 3004
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 201392131,
                    "text": "a",
                    "rawText": "\"a\"",
                    "flags": 96,
                    "start": 3006,
                    "end": 3009
                },
                "flags": 32,
                "start": 3004,
                "end": 3010
            },
            "flags": 16,
            "start": 3004,
            "end": 3010
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 3015,
                "end": 3015
            },
            "flags": 16,
            "start": 3013,
            "end": 3016
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 3016,
            "end": 3017
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 131,
                    "expression": {
                        "kind": 201392131,
                        "text": "a; b) => {};",
                        "rawText": "\"a; b) => {};",
                        "flags": 2097248,
                        "start": 3019,
                        "end": 3032
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 3034,
                                "end": 3035
                            },
                            {
                                "kind": 201392131,
                                "text": "b",
                                "rawText": "\"b\"",
                                "flags": 96,
                                "start": 3036,
                                "end": 3040
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 3034,
                        "end": 3040
                    },
                    "flags": 268435488,
                    "start": 3019,
                    "end": 3041
                },
                "flags": 32,
                "start": 3017,
                "end": 3041
            },
            "flags": 16,
            "start": 3017,
            "end": 3041
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 3046,
                "end": 3046
            },
            "flags": 16,
            "start": 3044,
            "end": 3047
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 3047,
            "end": 3048
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 35379,
                    "flags": 65,
                    "start": 3048,
                    "end": 3050
                },
                "operand": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 3051,
                        "end": 3054
                    },
                    "typeParameters": null,
                    "parameters": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 3050,
                        "end": 3051
                    },
                    "asyncKeyword": null,
                    "returnType": null,
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 3056,
                            "end": 3056
                        },
                        "flags": 32,
                        "start": 3054,
                        "end": 3057
                    },
                    "flags": 32,
                    "start": 3050,
                    "end": 3057
                },
                "flags": 32,
                "start": 3048,
                "end": 3057
            },
            "flags": 16,
            "start": 3048,
            "end": 3058
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 35379,
                        "flags": 64,
                        "start": 3060,
                        "end": 3061
                    },
                    "operand": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 3061,
                        "end": 3062
                    },
                    "flags": 32,
                    "start": 3060,
                    "end": 3062
                },
                "flags": 32,
                "start": 3058,
                "end": 3063
            },
            "flags": 16,
            "start": 3058,
            "end": 3063
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 3068,
                "end": 3068
            },
            "flags": 16,
            "start": 3066,
            "end": 3069
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 3069,
            "end": 3070
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 126,
                            "operandToken": {
                                "kind": 35379,
                                "flags": 64,
                                "start": 3072,
                                "end": 3073
                            },
                            "operand": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 3073,
                                "end": 3074
                            },
                            "flags": 32,
                            "start": 3072,
                            "end": 3074
                        },
                        {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 3075,
                            "end": 3077
                        }
                    ],
                    "flags": 32,
                    "start": 3070,
                    "end": 3077
                },
                "flags": 32,
                "start": 3070,
                "end": 3078
            },
            "flags": 16,
            "start": 3070,
            "end": 3078
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 3083,
                "end": 3083
            },
            "flags": 16,
            "start": 3081,
            "end": 3084
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 3084,
            "end": 3085
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 132,
                        "expressions": [
                            {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 3087,
                                "end": 3088
                            }
                        ],
                        "flags": 32,
                        "start": 3085,
                        "end": 3089
                    },
                    "flags": 32,
                    "start": 3085,
                    "end": 3089
                },
                "operatorToken": {
                    "kind": 35379,
                    "flags": 64,
                    "start": 3089,
                    "end": 3091
                },
                "right": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "start": 3091,
                    "end": 3092
                },
                "flags": 32,
                "start": 3085,
                "end": 3092
            },
            "flags": 16,
            "start": 3085,
            "end": 3092
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 3098,
                "end": 3098
            },
            "flags": 16,
            "start": 3096,
            "end": 3099
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 3099,
            "end": 3100
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 3102,
                "end": 3102
            },
            "flags": 16,
            "start": 3100,
            "end": 3103
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 3108,
                "end": 3108
            },
            "flags": 16,
            "start": 3106,
            "end": 3109
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 3109,
            "end": 3110
        },
        {
            "kind": 120,
            "expression": {
                "kind": 127,
                "operandToken": {
                    "kind": 196635,
                    "flags": 64,
                    "start": 3112,
                    "end": 3114
                },
                "operand": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 3110,
                    "end": 3112
                },
                "flags": 32,
                "start": 3110,
                "end": 3114
            },
            "flags": 16,
            "start": 3110,
            "end": 3114
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 3119,
                "end": 3119
            },
            "flags": 16,
            "start": 3117,
            "end": 3120
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 3120,
            "end": 3121
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 127,
                    "operandToken": {
                        "kind": 196635,
                        "flags": 64,
                        "start": 3124,
                        "end": 3126
                    },
                    "operand": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 3123,
                        "end": 3124
                    },
                    "flags": 32,
                    "start": 3121,
                    "end": 3126
                },
                "flags": 32,
                "start": 3121,
                "end": 3127
            },
            "flags": 16,
            "start": 3121,
            "end": 3127
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 3132,
                "end": 3132
            },
            "flags": 16,
            "start": 3130,
            "end": 3133
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 3133,
            "end": 3134
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 3143,
                    "end": 3146
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 127,
                            "operandToken": {
                                "kind": 196635,
                                "flags": 64,
                                "start": 3137,
                                "end": 3139
                            },
                            "operand": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 3136,
                                "end": 3137
                            },
                            "flags": 32,
                            "start": 3134,
                            "end": 3139
                        },
                        {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 3140,
                            "end": 3142
                        }
                    ]
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 3148,
                        "end": 3148
                    },
                    "flags": 32,
                    "start": 3146,
                    "end": 3149
                },
                "flags": 32,
                "start": 3134,
                "end": 3149
            },
            "flags": 16,
            "start": 3134,
            "end": 3150
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
                            "start": 3152,
                            "end": 3153
                        },
                        {
                            "kind": 127,
                            "operandToken": {
                                "kind": 196635,
                                "flags": 64,
                                "start": 3156,
                                "end": 3158
                            },
                            "operand": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 3154,
                                "end": 3156
                            },
                            "flags": 32,
                            "start": 3150,
                            "end": 3158
                        }
                    ],
                    "flags": 32,
                    "start": 3150,
                    "end": 3159
                },
                "flags": 32,
                "start": 3150,
                "end": 3159
            },
            "flags": 16,
            "start": 3150,
            "end": 3159
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 3164,
                "end": 3164
            },
            "flags": 16,
            "start": 3162,
            "end": 3165
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 3165,
            "end": 3166
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 3168,
                    "end": 3168
                },
                "flags": 32,
                "start": 3166,
                "end": 3169
            },
            "flags": 16,
            "start": 3166,
            "end": 3169
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 3174,
                "end": 3174
            },
            "flags": 16,
            "start": 3172,
            "end": 3175
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 3175,
            "end": 3176
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 197,
                    "shortCircuit": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "start": 3178,
                        "end": 3181
                    },
                    "questionToken": {
                        "kind": 134217750,
                        "flags": 64,
                        "start": 3181,
                        "end": 3183
                    },
                    "consequent": {
                        "kind": 134299649,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 96,
                        "start": 3183,
                        "end": 3187
                    },
                    "colonToken": {
                        "kind": 21,
                        "flags": 64,
                        "start": 3187,
                        "end": 3189
                    },
                    "alternate": {
                        "kind": 134299649,
                        "text": "baz",
                        "rawText": "baz",
                        "flags": 96,
                        "start": 3189,
                        "end": 3193
                    },
                    "flags": 32,
                    "start": 3176,
                    "end": 3193
                },
                "flags": 32,
                "start": 3176,
                "end": 3194
            },
            "flags": 16,
            "start": 3176,
            "end": 3194
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 3199,
                "end": 3199
            },
            "flags": 16,
            "start": 3197,
            "end": 3200
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 3200,
            "end": 3201
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
                            "start": 3203,
                            "end": 3204
                        },
                        {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "start": 3205,
                                "end": 3209
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "start": 3209,
                                "end": 3211
                            },
                            "consequent": {
                                "kind": 134299649,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 96,
                                "start": 3211,
                                "end": 3215
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "start": 3215,
                                "end": 3217
                            },
                            "alternate": {
                                "kind": 134299649,
                                "text": "baz",
                                "rawText": "baz",
                                "flags": 96,
                                "start": 3217,
                                "end": 3221
                            },
                            "flags": 32,
                            "start": 3201,
                            "end": 3221
                        }
                    ],
                    "flags": 32,
                    "start": 3201,
                    "end": 3222
                },
                "flags": 32,
                "start": 3201,
                "end": 3222
            },
            "flags": 16,
            "start": 3201,
            "end": 3222
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 3227,
                "end": 3227
            },
            "flags": 16,
            "start": 3225,
            "end": 3228
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 3228,
            "end": 3229
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 3250,
                    "end": 3253
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "start": 3231,
                                "end": 3234
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "start": 3234,
                                "end": 3236
                            },
                            "consequent": {
                                "kind": 134299649,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 96,
                                "start": 3236,
                                "end": 3240
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "start": 3240,
                                "end": 3242
                            },
                            "alternate": {
                                "kind": 134299649,
                                "text": "baz",
                                "rawText": "baz",
                                "flags": 96,
                                "start": 3242,
                                "end": 3246
                            },
                            "flags": 32,
                            "start": 3229,
                            "end": 3246
                        },
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 3247,
                            "end": 3249
                        }
                    ]
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 3255,
                        "end": 3255
                    },
                    "flags": 32,
                    "start": 3253,
                    "end": 3256
                },
                "flags": 32,
                "start": 3229,
                "end": 3256
            },
            "flags": 16,
            "start": 3229,
            "end": 3257
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 3266,
                    "end": 3269
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 129,
                            "member": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 3259,
                                "end": 3260
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 3261,
                                "end": 3262
                            },
                            "flags": 536870944,
                            "start": 3257,
                            "end": 3262
                        },
                        {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "start": 3263,
                            "end": 3265
                        }
                    ]
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 3271,
                        "end": 3271
                    },
                    "flags": 32,
                    "start": 3269,
                    "end": 3272
                },
                "flags": 32,
                "start": 3257,
                "end": 3272
            },
            "flags": 16,
            "start": 3257,
            "end": 3273
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
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "start": 3275,
                            "end": 3276
                        },
                        {
                            "kind": 129,
                            "member": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 3277,
                                "end": 3279
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 3280,
                                "end": 3281
                            },
                            "flags": 536870944,
                            "start": 3273,
                            "end": 3281
                        }
                    ],
                    "flags": 32,
                    "start": 3273,
                    "end": 3282
                },
                "flags": 32,
                "start": 3273,
                "end": 3282
            },
            "flags": 16,
            "start": 3273,
            "end": 3282
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 3287,
                "end": 3287
            },
            "flags": 16,
            "start": 3285,
            "end": 3288
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 3288,
            "end": 3289
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 3301,
                    "end": 3304
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 536871042,
                            "member": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 3291,
                                "end": 3292
                            },
                            "expression": {
                                "kind": 201392131,
                                "text": "b",
                                "rawText": "'b'",
                                "flags": 4194400,
                                "start": 3293,
                                "end": 3296
                            },
                            "flags": 32,
                            "start": 3289,
                            "end": 3297
                        },
                        {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "start": 3298,
                            "end": 3300
                        }
                    ]
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 3306,
                        "end": 3306
                    },
                    "flags": 32,
                    "start": 3304,
                    "end": 3307
                },
                "flags": 32,
                "start": 3289,
                "end": 3307
            },
            "flags": 16,
            "start": 3289,
            "end": 3308
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
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "start": 3310,
                            "end": 3311
                        },
                        {
                            "kind": 536871042,
                            "member": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 3312,
                                "end": 3314
                            },
                            "expression": {
                                "kind": 201392131,
                                "text": "b",
                                "rawText": "'b'",
                                "flags": 4194400,
                                "start": 3315,
                                "end": 3318
                            },
                            "flags": 32,
                            "start": 3308,
                            "end": 3319
                        }
                    ],
                    "flags": 32,
                    "start": 3308,
                    "end": 3320
                },
                "flags": 32,
                "start": 3308,
                "end": 3320
            },
            "flags": 16,
            "start": 3308,
            "end": 3320
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 3325,
                "end": 3325
            },
            "flags": 16,
            "start": 3323,
            "end": 3326
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 3326,
            "end": 3327
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 3338,
                    "end": 3341
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 215,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 64,
                            "start": 3329,
                            "end": 3332
                        },
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 3332,
                            "end": 3333
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 3335,
                            "end": 3337
                        },
                        "flags": 34,
                        "start": 3329,
                        "end": 3337
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "start": 3341,
                    "end": 3343
                },
                "flags": 32,
                "start": 3327,
                "end": 3343
            },
            "flags": 16,
            "start": 3327,
            "end": 3344
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 132,
                        "flags": 32,
                        "start": 3344,
                        "end": 3354
                    },
                    "flags": 32,
                    "start": 3344,
                    "end": 3354
                },
                "operatorToken": {
                    "kind": 35379,
                    "flags": 64,
                    "start": 3354,
                    "end": 3356
                },
                "right": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 3356,
                    "end": 3358
                },
                "flags": 32,
                "start": 3344,
                "end": 3358
            },
            "flags": 16,
            "start": 3344,
            "end": 3358
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 96,
                "start": 3362,
                "end": 3364
            },
            "flags": 16,
            "start": 3362,
            "end": 3365
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 132,
                        "expressions": [
                            {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 3367,
                                "end": 3368
                            },
                            {
                                "kind": 215,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 64,
                                    "start": 3369,
                                    "end": 3373
                                },
                                "binding": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 3373,
                                    "end": 3374
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 34,
                                "start": 3369,
                                "end": 3374
                            }
                        ],
                        "flags": 32,
                        "start": 3365,
                        "end": 3374
                    },
                    "flags": 32,
                    "start": 3365,
                    "end": 3374
                },
                "operatorToken": {
                    "kind": 35379,
                    "flags": 64,
                    "start": 3374,
                    "end": 3376
                },
                "right": {
                    "kind": 201392130,
                    "text": 10,
                    "rawText": "10",
                    "flags": 96,
                    "start": 3376,
                    "end": 3379
                },
                "flags": 32,
                "start": 3365,
                "end": 3379
            },
            "flags": 16,
            "start": 3365,
            "end": 3379
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 96,
                "start": 3383,
                "end": 3385
            },
            "flags": 16,
            "start": 3383,
            "end": 3386
        }
    ],
    "isModule": false,
    "source": "=> 0;\n=>;\n() =>;\n=> {};\n) => {};\n, => {};\n(,) => {};\nreturn => {};\n() => {'value': 42};\n\n()=>{}/a;\n()=>{} = a;\n()=>{} = x;\n()=>{} + a;\n() => {}();\n(x, y) => {}.x;\n() => {}.x;\n\n([...z],{},{[true]:a,true,q:[...t],},r) => {};\n\n([...z],[...a],q,[...t],{r:{[(a--)]:{true,[(--a)]:js,ts:r,},} = (b = a),...x9},z0,[...z1],[...z],[[...z],...qq]) => {};\n\n(z,[...a],[...q],[...t],{true},[...r] = (--a),[...js]) => {};\n\n([...z],{a:[...q],true,true,true,},t,[...r],[...js],{true,ts:r,...x9},z0,[...z1],{...z}) => {};\n\n ({[async(...x)&&(a--)]:[...z],a:{[22&&true+async(...x)]:[...q],true},t:{[0]:r,true},true},[...js],ts,[...r],[...x9],z0) => {};\n\n ([...z] = (a--)?((b = a)):((b ^= a)&&(!a))^(a--),[...a],[...q],[t,{true,true,...r},...js],{[(a--)?((a--)):((!a)?(22):((b = a)))]:{true,...ts}},[...r],[...x9],{z0:z1,},{...z},{...z}) => {};\n\n ([...t],r,{...js},{true},{...ts},[...r]) => {};\n\n ([...t],r,js,{true,[(!a)?((a--)):((b = a)&&(~a))?((a--)?((false^async(...x))):((++a))):(0)]:[...ts],[(a--)?(async(...x)):(async(...x))]:[...r]},[...x9],[...z0],[...z1]) => {};\n\n ({true,[async(...x)^(--a)]:{[(b = a)]:{z:a},true,q:[...t],r:js},ts:{...r},true},[...x9],z0) => {};\n\n ([...z],[...a],q,[...t],{true,true},r,[...js],[],{...ts}) => {};\n\n(z,[],{[((a--)||(~a))]:{true,a:q},t:[...r],[(b = a)-((b = a))||0&&0?(async(...x)):(0-0)?(0||0?((b = a)):((a--))):(22)&&/x/+true?(false):(async(...x))]:{js:[...ts],true,r:{x9:z0,true,[0-0?(0?(0):(0)):((a--))]:z1,true},[(!a)]:z,},...z},{[/x/g]:qq,[/x/g]:{z5:z6},...z7},{true,...z8},z9,{a0:[...a1] = (a--),a2:{a3:{a4:a5,a6:a7,[(++a)]:a8,a9:q0,...q1},...q2},true,}) => {};\n\n({z:a,true,q:[...t],},{r:js,ts:r,...x9}) => {};\n\n\n// Check that the early return introduced in ParsePrimaryExpression\n// does not accept stray closing parentheses.\n);\n) => 0;\nfoo[()];\n();\n\n// Parameter lists with extra parens should be recognized as errors.\n(()) => 0;\n((x)) => 0;\n((x, y)) => 0;\n(x, (y)) => 0;\n((x, y, z)) => 0;\n(x, (y, z)) => 0;\n((x, y), z) => 0;\n\n// Arrow function formal parameters are parsed as StrictFormalParameters,\n// which confusingly only implies that there are no duplicates.  Words\n// reserved in strict mode, and eval or arguments, are indeed valid in\n// sloppy mode.\neval => { 'use strict'; 0 };\narguments => { 'use strict'; 0 };\nyield => { 'use strict'; 0 };\ninterface => { 'use strict'; 0 };\n(eval) => { 'use strict'; 0 };\n(arguments) => { 'use strict'; 0 };\n(yield) => { 'use strict'; 0 };\n(interface) => { 'use strict'; 0 };\n(eval, bar) => { 'use strict'; 0 };\n(bar, eval) => { 'use strict'; 0 };\n(bar, arguments) => { 'use strict'; 0 };\n(bar, yield) => { 'use strict'; 0 };\n(bar, interface) => { 'use strict'; 0 };\n    // TODO(aperez): Detecting duplicates does not work in PreParser.\n    // \"(bar, bar) => {};\n\n    // The parameter list is parsed as an expression, but only\n    // a comma-separated list of identifier is valid.\n32 => {};\n(32) => {};\n(a, 32) => {};\nif => {};\n(if) => {};\n(a, if) => {};\na + b => {};\n(a + b) => {};\n(a + b, c) => {};\n(a, b - c) => {};\n\"a\" => {};\n(\"a\") => {};\n(\"a; b) => {};\n(a, \"b\") => {};\n-a => {};\n(-a) => {};\n(-a, b) => {};\n(a, -b) => {};\n{} => {};\na++ => {};\n(a++) => {};\n(a++, b) => {};\n(a, b++) => {};\n[] => {};\n(foo ? bar : baz) => {};\n(a, foo ? bar : baz) => {};\n(foo ? bar : baz, a) => {};\n(a.b, c) => {};\n(c, a.b) => {};\n(a['b'], c) => {};\n(c, a['b']) => {};\n(...a = b) => b;\n\n(...rest - a) => b;\n(a, ...b - 10) => b;\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 3387
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Declaration or statement expected - start: 0, end: 2
✖ Declaration or statement expected - start: 5, end: 8
✖ Identifier expected - start: 15, end: 16
✖ Declaration or statement expected - start: 16, end: 19
✖ Declaration or statement expected - start: 23, end: 25
✖ Declaration or statement expected - start: 25, end: 28
✖ Declaration or statement expected - start: 32, end: 34
✖ Declaration or statement expected - start: 34, end: 37
✖ Identifier expected - start: 43, end: 44
✖ Identifier expected - start: 44, end: 45
✖ Arrow parameters can only contain a binding pattern or an identifier - start: 45, end: 48
✖ A return statement can only be used within a function_body - start: 52, end: 59
✖ Identifier expected - start: 59, end: 62
✖ Expected a `;` - start: 81, end: 82
✖ Declaration or statement expected - start: 85, end: 86
✖ Unterminated regular expression - start: 95, end: 98
✖ Expected a `;` - start: 95, end: 98
✖ Expected a `;` - start: 101, end: 103
✖ Declaration or statement expected. This follows a block of statements so if you intended to write a destructuring assignment you might need to wrap the whole assignment in parentheses - start: 107, end: 109
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 117, end: 119
✖ An arrow function can not be part of an operator to the right - start: 129, end: 131
✖ Block body arrows can not be immediately invoked without a group - start: 143, end: 144
✖ Block body arrows can not be immediately accessed without a group - start: 159, end: 160
✖ Block body arrows can not be immediately accessed without a group - start: 171, end: 172
✖ Property definition expected. Did you mean to use a ':'? - start: 201, end: 202
✖ Property definition expected. Did you mean to use a ':'? - start: 265, end: 266
✖ Property definition expected. Did you mean to use a ':'? - start: 374, end: 375
✖ Property definition expected. Did you mean to use a ':'? - start: 430, end: 431
✖ Property definition expected. Did you mean to use a ':'? - start: 435, end: 436
✖ Property definition expected. Did you mean to use a ':'? - start: 440, end: 441
✖ Property definition expected. Did you mean to use a ':'? - start: 465, end: 466
✖ Property definition expected. Did you mean to use a ':'? - start: 573, end: 574
✖ Property definition expected. Did you mean to use a ':'? - start: 588, end: 589
✖ Property definition expected. Did you mean to use a ':'? - start: 594, end: 595
✖ Property definition expected. Did you mean to use a ':'? - start: 706, end: 707
✖ Property definition expected. Did you mean to use a ':'? - start: 711, end: 712
✖ Property definition expected. Did you mean to use a ':'? - start: 769, end: 770
✖ Property definition expected. Did you mean to use a ':'? - start: 849, end: 850
✖ Property definition expected. Did you mean to use a ':'? - start: 894, end: 895
✖ Property definition expected. Did you mean to use a ':'? - start: 1060, end: 1061
✖ Property definition expected. Did you mean to use a ':'? - start: 1102, end: 1103
✖ Property definition expected. Did you mean to use a ':'? - start: 1132, end: 1133
✖ Property definition expected. Did you mean to use a ':'? - start: 1184, end: 1185
✖ Property definition expected. Did you mean to use a ':'? - start: 1189, end: 1190
✖ Property definition expected. Did you mean to use a ':'? - start: 1249, end: 1250
✖ Property definition expected. Did you mean to use a ':'? - start: 1388, end: 1389
✖ Property definition expected. Did you mean to use a ':'? - start: 1402, end: 1403
✖ Property definition expected. Did you mean to use a ':'? - start: 1436, end: 1437
✖ Property definition expected. Did you mean to use a ':'? - start: 1493, end: 1494
✖ Property definition expected. Did you mean to use a ':'? - start: 1579, end: 1580
✖ Property definition expected. Did you mean to use a ':'? - start: 1601, end: 1602
✖ Declaration or statement expected - start: 1638, end: 1756
✖ Declaration or statement expected - start: 1757, end: 1759
✖ Declaration or statement expected - start: 1759, end: 1762
✖ Expression expected - start: 1772, end: 1773
✖ Expression expected - start: 1777, end: 1778
✖ Expression expected - start: 1852, end: 1853
✖ Arrow parameters can only contain a binding pattern or an identifier - start: 1853, end: 1856
✖ Arrow parameters can only contain a binding pattern or an identifier - start: 1865, end: 1868
✖ Arrow parameters can only contain a binding pattern or an identifier - start: 1880, end: 1883
✖ Expected a `;` - start: 1895, end: 1898
✖ Arrow parameters can only contain a binding pattern or an identifier - start: 1913, end: 1916
✖ Expected a `;` - start: 1931, end: 1934
✖ Arrow parameters can only contain a binding pattern or an identifier - start: 1949, end: 1952
✖ Expected a `;` - start: 2858, end: 2861
✖ Arrow parameters can only contain a binding pattern or an identifier - start: 2870, end: 2873
✖ Expected a `;` - start: 2885, end: 2888
✖ Missing an opening parentheses - '( - start: 2895, end: 2898
✖ Identifier expected - start: 2904, end: 2906
✖ Missing an opening parentheses - '( - start: 2906, end: 2907
✖ Identifier expected - start: 2907, end: 2910
✖ Expected a ')' to match the '(' token here - start: 2918, end: 2921
✖ Missing an opening parentheses - '( - start: 2921, end: 2922
✖ Identifier expected - start: 2922, end: 2925
✖ Expected a `;` - start: 2935, end: 2938
✖ Expected a `;` - start: 2950, end: 2953
✖ The left hand side of the arrow is not destructible  - start: 2968, end: 2971
✖ Expected a `;` - start: 2986, end: 2989
✖ Expected a `;` - start: 2997, end: 3000
✖ Arrow parameters can only contain a binding pattern or an identifier - start: 3010, end: 3013
✖ Unterminated string literal - start: 3019, end: 3032
✖ Expected a ')' to match the '(' token here - start: 3041, end: 3044
✖ Arrow parameters can only contain a binding pattern or an identifier - start: 3041, end: 3044
✖ Arrow parameters can only contain a binding pattern or an identifier - start: 3063, end: 3066
✖ Arrow parameters can only contain a binding pattern or an identifier - start: 3078, end: 3081
✖ Expected a ')' to match the '(' token here - start: 3089, end: 3091
✖ Expected a `;` - start: 3092, end: 3093
✖ Declaration or statement expected - start: 3093, end: 3096
✖ Declaration or statement expected - start: 3103, end: 3106
✖ Expected a `;` - start: 3114, end: 3117
✖ Expected a `;` - start: 3127, end: 3130
✖ The left hand side of the arrow is not destructible  - start: 3143, end: 3146
✖ Expected a `;` - start: 3159, end: 3162
✖ Expected a `;` - start: 3169, end: 3172
✖ Expected a `;` - start: 3194, end: 3197
✖ Expected a `;` - start: 3222, end: 3225
✖ The left hand side of the arrow is not destructible  - start: 3266, end: 3269
✖ Expected a `;` - start: 3282, end: 3285
✖ The left hand side of the arrow is not destructible  - start: 3301, end: 3304
✖ Expected a `;` - start: 3320, end: 3323
✖ A rest element cannot have an initializer - start: 3335, end: 3337
✖ Expected a ')' to match the '(' token here - start: 3354, end: 3356
✖ Expected a `;` - start: 3358, end: 3359
✖ Declaration or statement expected - start: 3359, end: 3362
✖ Expected a ')' to match the '(' token here - start: 3374, end: 3376
✖ Expected a `;` - start: 3379, end: 3380
✖ Declaration or statement expected - start: 3380, end: 3383

```

