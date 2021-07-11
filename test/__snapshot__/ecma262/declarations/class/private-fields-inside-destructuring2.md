# Kataw parser test case

## Input

`````js
 class Foo {
   #a
   #b
   #c
   #d
   #e
   #f
   foo() {
     [
{x: this.#a},
[[, this.#b, ,]],
{y: this.#c = 3},
{x: this.x, y: this.y, ...this.#d},
[, , ...this.#e],
[{x: [{y: [this.#f]}]}],
     ] = [
{x: 1},
[[1, 2, 3]],
{},
{x: 2, y: 3, z: 4, w: 5},
[4, 5, 6, 7, 8],
[{x: [{y: [9]}]}],
     ]
     return JSON.stringify([
this.#a,
this.#b,
this.#c,
this.#d,
this.#e,
this.#f,
     ])
   }
 }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 80,
                "start": 0,
                "end": 6
            },
            "name": {
                "kind": 134299649,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 96,
                "start": 6,
                "end": 10
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "#a",
                                "rawText": "#a",
                                "flags": 97,
                                "start": 12,
                                "end": 18
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "start": 12,
                            "end": 18
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "#b",
                                "rawText": "#b",
                                "flags": 97,
                                "start": 18,
                                "end": 24
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "start": 18,
                            "end": 24
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "#c",
                                "rawText": "#c",
                                "flags": 97,
                                "start": 24,
                                "end": 30
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "start": 24,
                            "end": 30
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "#d",
                                "rawText": "#d",
                                "flags": 97,
                                "start": 30,
                                "end": 36
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "start": 30,
                            "end": 36
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "#e",
                                "rawText": "#e",
                                "flags": 97,
                                "start": 36,
                                "end": 42
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "start": 36,
                            "end": 42
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "#f",
                                "rawText": "#f",
                                "flags": 97,
                                "start": 42,
                                "end": 48
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "start": 42,
                            "end": 48
                        },
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
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 97,
                                    "start": 48,
                                    "end": 55
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 56,
                                    "end": 57
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
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 119,
                                                        "elementList": {
                                                            "kind": 270,
                                                            "elements": [
                                                                {
                                                                    "kind": 220,
                                                                    "propertyList": {
                                                                        "kind": 218,
                                                                        "properties": [
                                                                            {
                                                                                "kind": 219,
                                                                                "asteriskToken": null,
                                                                                "left": {
                                                                                    "kind": 134299649,
                                                                                    "text": "x",
                                                                                    "rawText": "x",
                                                                                    "flags": 96,
                                                                                    "start": 68,
                                                                                    "end": 69
                                                                                },
                                                                                "right": {
                                                                                    "kind": 129,
                                                                                    "member": {
                                                                                        "kind": 4276321,
                                                                                        "flags": 96,
                                                                                        "start": 70,
                                                                                        "end": 75
                                                                                    },
                                                                                    "expression": {
                                                                                        "kind": 67191035,
                                                                                        "text": "#a",
                                                                                        "rawText": "#a",
                                                                                        "flags": 96,
                                                                                        "start": 76,
                                                                                        "end": 78
                                                                                    },
                                                                                    "flags": 96,
                                                                                    "start": 68,
                                                                                    "end": 78
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 68,
                                                                                "end": 78
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 16,
                                                                        "start": 68,
                                                                        "end": 78
                                                                    },
                                                                    "flags": 49,
                                                                    "start": 66,
                                                                    "end": 79
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
                                                                                            "kind": 230,
                                                                                            "flags": 96,
                                                                                            "start": 83,
                                                                                            "end": 83
                                                                                        },
                                                                                        {
                                                                                            "kind": 129,
                                                                                            "member": {
                                                                                                "kind": 4276321,
                                                                                                "flags": 96,
                                                                                                "start": 84,
                                                                                                "end": 89
                                                                                            },
                                                                                            "expression": {
                                                                                                "kind": 67191035,
                                                                                                "text": "#b",
                                                                                                "rawText": "#b",
                                                                                                "flags": 96,
                                                                                                "start": 90,
                                                                                                "end": 92
                                                                                            },
                                                                                            "flags": 96,
                                                                                            "start": 84,
                                                                                            "end": 92
                                                                                        },
                                                                                        {
                                                                                            "kind": 230,
                                                                                            "flags": 96,
                                                                                            "start": 93,
                                                                                            "end": 93
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": true,
                                                                                    "flags": 32,
                                                                                    "start": 83,
                                                                                    "end": 95
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 82,
                                                                                "end": 96
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "start": 82,
                                                                        "end": 96
                                                                    },
                                                                    "flags": 33,
                                                                    "start": 80,
                                                                    "end": 97
                                                                },
                                                                {
                                                                    "kind": 220,
                                                                    "propertyList": {
                                                                        "kind": 218,
                                                                        "properties": [
                                                                            {
                                                                                "kind": 219,
                                                                                "asteriskToken": null,
                                                                                "left": {
                                                                                    "kind": 134299649,
                                                                                    "text": "y",
                                                                                    "rawText": "y",
                                                                                    "flags": 96,
                                                                                    "start": 100,
                                                                                    "end": 101
                                                                                },
                                                                                "right": {
                                                                                    "kind": 125,
                                                                                    "left": {
                                                                                        "kind": 129,
                                                                                        "member": {
                                                                                            "kind": 4276321,
                                                                                            "flags": 96,
                                                                                            "start": 102,
                                                                                            "end": 107
                                                                                        },
                                                                                        "expression": {
                                                                                            "kind": 67191035,
                                                                                            "text": "#c",
                                                                                            "rawText": "#c",
                                                                                            "flags": 96,
                                                                                            "start": 108,
                                                                                            "end": 110
                                                                                        },
                                                                                        "flags": 96,
                                                                                        "start": 100,
                                                                                        "end": 110
                                                                                    },
                                                                                    "operatorToken": {
                                                                                        "kind": 4125,
                                                                                        "flags": 96,
                                                                                        "start": 110,
                                                                                        "end": 112
                                                                                    },
                                                                                    "right": {
                                                                                        "kind": 201392130,
                                                                                        "text": 3,
                                                                                        "rawText": "3",
                                                                                        "flags": 96,
                                                                                        "start": 112,
                                                                                        "end": 114
                                                                                    },
                                                                                    "flags": 32,
                                                                                    "start": 100,
                                                                                    "end": 114
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 100,
                                                                                "end": 114
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 16,
                                                                        "start": 100,
                                                                        "end": 114
                                                                    },
                                                                    "flags": 49,
                                                                    "start": 98,
                                                                    "end": 115
                                                                },
                                                                {
                                                                    "kind": 220,
                                                                    "propertyList": {
                                                                        "kind": 218,
                                                                        "properties": [
                                                                            {
                                                                                "kind": 219,
                                                                                "asteriskToken": null,
                                                                                "left": {
                                                                                    "kind": 134299649,
                                                                                    "text": "x",
                                                                                    "rawText": "x",
                                                                                    "flags": 96,
                                                                                    "start": 118,
                                                                                    "end": 119
                                                                                },
                                                                                "right": {
                                                                                    "kind": 129,
                                                                                    "member": {
                                                                                        "kind": 4276321,
                                                                                        "flags": 96,
                                                                                        "start": 120,
                                                                                        "end": 125
                                                                                    },
                                                                                    "expression": {
                                                                                        "kind": 134299649,
                                                                                        "text": "x",
                                                                                        "rawText": "x",
                                                                                        "flags": 96,
                                                                                        "start": 126,
                                                                                        "end": 127
                                                                                    },
                                                                                    "flags": 96,
                                                                                    "start": 118,
                                                                                    "end": 127
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 118,
                                                                                "end": 127
                                                                            },
                                                                            {
                                                                                "kind": 219,
                                                                                "asteriskToken": null,
                                                                                "left": {
                                                                                    "kind": 134299649,
                                                                                    "text": "y",
                                                                                    "rawText": "y",
                                                                                    "flags": 96,
                                                                                    "start": 128,
                                                                                    "end": 130
                                                                                },
                                                                                "right": {
                                                                                    "kind": 129,
                                                                                    "member": {
                                                                                        "kind": 4276321,
                                                                                        "flags": 96,
                                                                                        "start": 131,
                                                                                        "end": 136
                                                                                    },
                                                                                    "expression": {
                                                                                        "kind": 134299649,
                                                                                        "text": "y",
                                                                                        "rawText": "y",
                                                                                        "flags": 96,
                                                                                        "start": 137,
                                                                                        "end": 138
                                                                                    },
                                                                                    "flags": 96,
                                                                                    "start": 128,
                                                                                    "end": 138
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 128,
                                                                                "end": 138
                                                                            },
                                                                            {
                                                                                "kind": 224,
                                                                                "ellipsisToken": {
                                                                                    "kind": 524302,
                                                                                    "flags": 64,
                                                                                    "start": 139,
                                                                                    "end": 143
                                                                                },
                                                                                "argument": {
                                                                                    "kind": 129,
                                                                                    "member": {
                                                                                        "kind": 4276321,
                                                                                        "flags": 96,
                                                                                        "start": 143,
                                                                                        "end": 147
                                                                                    },
                                                                                    "expression": {
                                                                                        "kind": 67191035,
                                                                                        "text": "#d",
                                                                                        "rawText": "#d",
                                                                                        "flags": 96,
                                                                                        "start": 148,
                                                                                        "end": 150
                                                                                    },
                                                                                    "flags": 96,
                                                                                    "start": 143,
                                                                                    "end": 150
                                                                                },
                                                                                "flags": 1073741856,
                                                                                "start": 139,
                                                                                "end": 150
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 16,
                                                                        "start": 118,
                                                                        "end": 150
                                                                    },
                                                                    "flags": 49,
                                                                    "start": 116,
                                                                    "end": 151
                                                                },
                                                                {
                                                                    "kind": 119,
                                                                    "elementList": {
                                                                        "kind": 270,
                                                                        "elements": [
                                                                            {
                                                                                "kind": 230,
                                                                                "flags": 96,
                                                                                "start": 154,
                                                                                "end": 154
                                                                            },
                                                                            {
                                                                                "kind": 230,
                                                                                "flags": 96,
                                                                                "start": 155,
                                                                                "end": 155
                                                                            },
                                                                            {
                                                                                "kind": 223,
                                                                                "ellipsisToken": {
                                                                                    "kind": 524302,
                                                                                    "flags": 64,
                                                                                    "start": 157,
                                                                                    "end": 161
                                                                                },
                                                                                "argument": {
                                                                                    "kind": 129,
                                                                                    "member": {
                                                                                        "kind": 4276321,
                                                                                        "flags": 96,
                                                                                        "start": 161,
                                                                                        "end": 165
                                                                                    },
                                                                                    "expression": {
                                                                                        "kind": 67191035,
                                                                                        "text": "#e",
                                                                                        "rawText": "#e",
                                                                                        "flags": 96,
                                                                                        "start": 166,
                                                                                        "end": 168
                                                                                    },
                                                                                    "flags": 96,
                                                                                    "start": 161,
                                                                                    "end": 168
                                                                                },
                                                                                "flags": 1073741856,
                                                                                "start": 157,
                                                                                "end": 168
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "start": 154,
                                                                        "end": 168
                                                                    },
                                                                    "flags": 33,
                                                                    "start": 152,
                                                                    "end": 169
                                                                },
                                                                {
                                                                    "kind": 119,
                                                                    "elementList": {
                                                                        "kind": 270,
                                                                        "elements": [
                                                                            {
                                                                                "kind": 220,
                                                                                "propertyList": {
                                                                                    "kind": 218,
                                                                                    "properties": [
                                                                                        {
                                                                                            "kind": 219,
                                                                                            "asteriskToken": null,
                                                                                            "left": {
                                                                                                "kind": 134299649,
                                                                                                "text": "x",
                                                                                                "rawText": "x",
                                                                                                "flags": 96,
                                                                                                "start": 173,
                                                                                                "end": 174
                                                                                            },
                                                                                            "right": {
                                                                                                "kind": 119,
                                                                                                "elementList": {
                                                                                                    "kind": 270,
                                                                                                    "elements": [
                                                                                                        {
                                                                                                            "kind": 220,
                                                                                                            "propertyList": {
                                                                                                                "kind": 218,
                                                                                                                "properties": [
                                                                                                                    {
                                                                                                                        "kind": 219,
                                                                                                                        "asteriskToken": null,
                                                                                                                        "left": {
                                                                                                                            "kind": 134299649,
                                                                                                                            "text": "y",
                                                                                                                            "rawText": "y",
                                                                                                                            "flags": 96,
                                                                                                                            "start": 178,
                                                                                                                            "end": 179
                                                                                                                        },
                                                                                                                        "right": {
                                                                                                                            "kind": 119,
                                                                                                                            "elementList": {
                                                                                                                                "kind": 270,
                                                                                                                                "elements": [
                                                                                                                                    {
                                                                                                                                        "kind": 129,
                                                                                                                                        "member": {
                                                                                                                                            "kind": 4276321,
                                                                                                                                            "flags": 96,
                                                                                                                                            "start": 182,
                                                                                                                                            "end": 186
                                                                                                                                        },
                                                                                                                                        "expression": {
                                                                                                                                            "kind": 67191035,
                                                                                                                                            "text": "#f",
                                                                                                                                            "rawText": "#f",
                                                                                                                                            "flags": 96,
                                                                                                                                            "start": 187,
                                                                                                                                            "end": 189
                                                                                                                                        },
                                                                                                                                        "flags": 96,
                                                                                                                                        "start": 182,
                                                                                                                                        "end": 189
                                                                                                                                    }
                                                                                                                                ],
                                                                                                                                "trailingComma": false,
                                                                                                                                "flags": 32,
                                                                                                                                "start": 182,
                                                                                                                                "end": 189
                                                                                                                            },
                                                                                                                            "flags": 32,
                                                                                                                            "start": 180,
                                                                                                                            "end": 190
                                                                                                                        },
                                                                                                                        "flags": 32,
                                                                                                                        "start": 178,
                                                                                                                        "end": 190
                                                                                                                    }
                                                                                                                ],
                                                                                                                "trailingComma": false,
                                                                                                                "flags": 16,
                                                                                                                "start": 178,
                                                                                                                "end": 190
                                                                                                            },
                                                                                                            "flags": 48,
                                                                                                            "start": 177,
                                                                                                            "end": 191
                                                                                                        }
                                                                                                    ],
                                                                                                    "trailingComma": false,
                                                                                                    "flags": 32,
                                                                                                    "start": 177,
                                                                                                    "end": 191
                                                                                                },
                                                                                                "flags": 32,
                                                                                                "start": 175,
                                                                                                "end": 192
                                                                                            },
                                                                                            "flags": 32,
                                                                                            "start": 173,
                                                                                            "end": 192
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "flags": 16,
                                                                                    "start": 173,
                                                                                    "end": 192
                                                                                },
                                                                                "flags": 48,
                                                                                "start": 172,
                                                                                "end": 193
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "start": 172,
                                                                        "end": 193
                                                                    },
                                                                    "flags": 33,
                                                                    "start": 170,
                                                                    "end": 194
                                                                }
                                                            ],
                                                            "trailingComma": true,
                                                            "flags": 33,
                                                            "start": 66,
                                                            "end": 195
                                                        },
                                                        "flags": 33,
                                                        "start": 59,
                                                        "end": 202
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 96,
                                                        "start": 202,
                                                        "end": 204
                                                    },
                                                    "right": {
                                                        "kind": 119,
                                                        "elementList": {
                                                            "kind": 270,
                                                            "elements": [
                                                                {
                                                                    "kind": 220,
                                                                    "propertyList": {
                                                                        "kind": 218,
                                                                        "properties": [
                                                                            {
                                                                                "kind": 219,
                                                                                "asteriskToken": null,
                                                                                "left": {
                                                                                    "kind": 134299649,
                                                                                    "text": "x",
                                                                                    "rawText": "x",
                                                                                    "flags": 96,
                                                                                    "start": 208,
                                                                                    "end": 209
                                                                                },
                                                                                "right": {
                                                                                    "kind": 201392130,
                                                                                    "text": 1,
                                                                                    "rawText": "1",
                                                                                    "flags": 96,
                                                                                    "start": 210,
                                                                                    "end": 212
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 208,
                                                                                "end": 212
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 16,
                                                                        "start": 208,
                                                                        "end": 212
                                                                    },
                                                                    "flags": 49,
                                                                    "start": 206,
                                                                    "end": 213
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
                                                                                            "kind": 201392130,
                                                                                            "text": 1,
                                                                                            "rawText": "1",
                                                                                            "flags": 96,
                                                                                            "start": 217,
                                                                                            "end": 218
                                                                                        },
                                                                                        {
                                                                                            "kind": 201392130,
                                                                                            "text": 2,
                                                                                            "rawText": "2",
                                                                                            "flags": 96,
                                                                                            "start": 219,
                                                                                            "end": 221
                                                                                        },
                                                                                        {
                                                                                            "kind": 201392130,
                                                                                            "text": 3,
                                                                                            "rawText": "3",
                                                                                            "flags": 96,
                                                                                            "start": 222,
                                                                                            "end": 224
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "flags": 32,
                                                                                    "start": 217,
                                                                                    "end": 224
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 216,
                                                                                "end": 225
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "start": 216,
                                                                        "end": 225
                                                                    },
                                                                    "flags": 33,
                                                                    "start": 214,
                                                                    "end": 226
                                                                },
                                                                {
                                                                    "kind": 220,
                                                                    "propertyList": {
                                                                        "kind": 218,
                                                                        "properties": [],
                                                                        "trailingComma": false,
                                                                        "flags": 16,
                                                                        "start": 229,
                                                                        "end": 229
                                                                    },
                                                                    "flags": 49,
                                                                    "start": 227,
                                                                    "end": 230
                                                                },
                                                                {
                                                                    "kind": 220,
                                                                    "propertyList": {
                                                                        "kind": 218,
                                                                        "properties": [
                                                                            {
                                                                                "kind": 219,
                                                                                "asteriskToken": null,
                                                                                "left": {
                                                                                    "kind": 134299649,
                                                                                    "text": "x",
                                                                                    "rawText": "x",
                                                                                    "flags": 96,
                                                                                    "start": 233,
                                                                                    "end": 234
                                                                                },
                                                                                "right": {
                                                                                    "kind": 201392130,
                                                                                    "text": 2,
                                                                                    "rawText": "2",
                                                                                    "flags": 96,
                                                                                    "start": 235,
                                                                                    "end": 237
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 233,
                                                                                "end": 237
                                                                            },
                                                                            {
                                                                                "kind": 219,
                                                                                "asteriskToken": null,
                                                                                "left": {
                                                                                    "kind": 134299649,
                                                                                    "text": "y",
                                                                                    "rawText": "y",
                                                                                    "flags": 96,
                                                                                    "start": 238,
                                                                                    "end": 240
                                                                                },
                                                                                "right": {
                                                                                    "kind": 201392130,
                                                                                    "text": 3,
                                                                                    "rawText": "3",
                                                                                    "flags": 96,
                                                                                    "start": 241,
                                                                                    "end": 243
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 238,
                                                                                "end": 243
                                                                            },
                                                                            {
                                                                                "kind": 219,
                                                                                "asteriskToken": null,
                                                                                "left": {
                                                                                    "kind": 134299649,
                                                                                    "text": "z",
                                                                                    "rawText": "z",
                                                                                    "flags": 96,
                                                                                    "start": 244,
                                                                                    "end": 246
                                                                                },
                                                                                "right": {
                                                                                    "kind": 201392130,
                                                                                    "text": 4,
                                                                                    "rawText": "4",
                                                                                    "flags": 96,
                                                                                    "start": 247,
                                                                                    "end": 249
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 244,
                                                                                "end": 249
                                                                            },
                                                                            {
                                                                                "kind": 219,
                                                                                "asteriskToken": null,
                                                                                "left": {
                                                                                    "kind": 134299649,
                                                                                    "text": "w",
                                                                                    "rawText": "w",
                                                                                    "flags": 96,
                                                                                    "start": 250,
                                                                                    "end": 252
                                                                                },
                                                                                "right": {
                                                                                    "kind": 201392130,
                                                                                    "text": 5,
                                                                                    "rawText": "5",
                                                                                    "flags": 96,
                                                                                    "start": 253,
                                                                                    "end": 255
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 250,
                                                                                "end": 255
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 16,
                                                                        "start": 233,
                                                                        "end": 255
                                                                    },
                                                                    "flags": 49,
                                                                    "start": 231,
                                                                    "end": 256
                                                                },
                                                                {
                                                                    "kind": 119,
                                                                    "elementList": {
                                                                        "kind": 270,
                                                                        "elements": [
                                                                            {
                                                                                "kind": 201392130,
                                                                                "text": 4,
                                                                                "rawText": "4",
                                                                                "flags": 96,
                                                                                "start": 259,
                                                                                "end": 260
                                                                            },
                                                                            {
                                                                                "kind": 201392130,
                                                                                "text": 5,
                                                                                "rawText": "5",
                                                                                "flags": 96,
                                                                                "start": 261,
                                                                                "end": 263
                                                                            },
                                                                            {
                                                                                "kind": 201392130,
                                                                                "text": 6,
                                                                                "rawText": "6",
                                                                                "flags": 96,
                                                                                "start": 264,
                                                                                "end": 266
                                                                            },
                                                                            {
                                                                                "kind": 201392130,
                                                                                "text": 7,
                                                                                "rawText": "7",
                                                                                "flags": 96,
                                                                                "start": 267,
                                                                                "end": 269
                                                                            },
                                                                            {
                                                                                "kind": 201392130,
                                                                                "text": 8,
                                                                                "rawText": "8",
                                                                                "flags": 96,
                                                                                "start": 270,
                                                                                "end": 272
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "start": 259,
                                                                        "end": 272
                                                                    },
                                                                    "flags": 33,
                                                                    "start": 257,
                                                                    "end": 273
                                                                },
                                                                {
                                                                    "kind": 119,
                                                                    "elementList": {
                                                                        "kind": 270,
                                                                        "elements": [
                                                                            {
                                                                                "kind": 220,
                                                                                "propertyList": {
                                                                                    "kind": 218,
                                                                                    "properties": [
                                                                                        {
                                                                                            "kind": 219,
                                                                                            "asteriskToken": null,
                                                                                            "left": {
                                                                                                "kind": 134299649,
                                                                                                "text": "x",
                                                                                                "rawText": "x",
                                                                                                "flags": 96,
                                                                                                "start": 277,
                                                                                                "end": 278
                                                                                            },
                                                                                            "right": {
                                                                                                "kind": 119,
                                                                                                "elementList": {
                                                                                                    "kind": 270,
                                                                                                    "elements": [
                                                                                                        {
                                                                                                            "kind": 220,
                                                                                                            "propertyList": {
                                                                                                                "kind": 218,
                                                                                                                "properties": [
                                                                                                                    {
                                                                                                                        "kind": 219,
                                                                                                                        "asteriskToken": null,
                                                                                                                        "left": {
                                                                                                                            "kind": 134299649,
                                                                                                                            "text": "y",
                                                                                                                            "rawText": "y",
                                                                                                                            "flags": 96,
                                                                                                                            "start": 282,
                                                                                                                            "end": 283
                                                                                                                        },
                                                                                                                        "right": {
                                                                                                                            "kind": 119,
                                                                                                                            "elementList": {
                                                                                                                                "kind": 270,
                                                                                                                                "elements": [
                                                                                                                                    {
                                                                                                                                        "kind": 201392130,
                                                                                                                                        "text": 9,
                                                                                                                                        "rawText": "9",
                                                                                                                                        "flags": 96,
                                                                                                                                        "start": 286,
                                                                                                                                        "end": 287
                                                                                                                                    }
                                                                                                                                ],
                                                                                                                                "trailingComma": false,
                                                                                                                                "flags": 32,
                                                                                                                                "start": 286,
                                                                                                                                "end": 287
                                                                                                                            },
                                                                                                                            "flags": 32,
                                                                                                                            "start": 284,
                                                                                                                            "end": 288
                                                                                                                        },
                                                                                                                        "flags": 32,
                                                                                                                        "start": 282,
                                                                                                                        "end": 288
                                                                                                                    }
                                                                                                                ],
                                                                                                                "trailingComma": false,
                                                                                                                "flags": 16,
                                                                                                                "start": 282,
                                                                                                                "end": 288
                                                                                                            },
                                                                                                            "flags": 48,
                                                                                                            "start": 281,
                                                                                                            "end": 289
                                                                                                        }
                                                                                                    ],
                                                                                                    "trailingComma": false,
                                                                                                    "flags": 32,
                                                                                                    "start": 281,
                                                                                                    "end": 289
                                                                                                },
                                                                                                "flags": 32,
                                                                                                "start": 279,
                                                                                                "end": 290
                                                                                            },
                                                                                            "flags": 32,
                                                                                            "start": 277,
                                                                                            "end": 290
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "flags": 16,
                                                                                    "start": 277,
                                                                                    "end": 290
                                                                                },
                                                                                "flags": 48,
                                                                                "start": 276,
                                                                                "end": 291
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "start": 276,
                                                                        "end": 291
                                                                    },
                                                                    "flags": 33,
                                                                    "start": 274,
                                                                    "end": 292
                                                                }
                                                            ],
                                                            "trailingComma": true,
                                                            "flags": 33,
                                                            "start": 206,
                                                            "end": 293
                                                        },
                                                        "flags": 32,
                                                        "start": 204,
                                                        "end": 300
                                                    },
                                                    "flags": 32,
                                                    "start": 59,
                                                    "end": 300
                                                },
                                                "flags": 16,
                                                "start": 59,
                                                "end": 300
                                            },
                                            {
                                                "kind": 161,
                                                "returnKeyword": {
                                                    "kind": 37757022,
                                                    "flags": 81,
                                                    "start": 300,
                                                    "end": 312
                                                },
                                                "expression": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 134299649,
                                                            "text": "JSON",
                                                            "rawText": "JSON",
                                                            "flags": 96,
                                                            "start": 312,
                                                            "end": 317
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "stringify",
                                                            "rawText": "stringify",
                                                            "flags": 96,
                                                            "start": 318,
                                                            "end": 327
                                                        },
                                                        "flags": 96,
                                                        "start": 312,
                                                        "end": 327
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [
                                                            {
                                                                "kind": 119,
                                                                "elementList": {
                                                                    "kind": 270,
                                                                    "elements": [
                                                                        {
                                                                            "kind": 129,
                                                                            "member": {
                                                                                "kind": 4276321,
                                                                                "flags": 97,
                                                                                "start": 329,
                                                                                "end": 334
                                                                            },
                                                                            "expression": {
                                                                                "kind": 67191035,
                                                                                "text": "#a",
                                                                                "rawText": "#a",
                                                                                "flags": 96,
                                                                                "start": 335,
                                                                                "end": 337
                                                                            },
                                                                            "flags": 97,
                                                                            "start": 329,
                                                                            "end": 337
                                                                        },
                                                                        {
                                                                            "kind": 129,
                                                                            "member": {
                                                                                "kind": 4276321,
                                                                                "flags": 97,
                                                                                "start": 338,
                                                                                "end": 343
                                                                            },
                                                                            "expression": {
                                                                                "kind": 67191035,
                                                                                "text": "#b",
                                                                                "rawText": "#b",
                                                                                "flags": 96,
                                                                                "start": 344,
                                                                                "end": 346
                                                                            },
                                                                            "flags": 97,
                                                                            "start": 338,
                                                                            "end": 346
                                                                        },
                                                                        {
                                                                            "kind": 129,
                                                                            "member": {
                                                                                "kind": 4276321,
                                                                                "flags": 97,
                                                                                "start": 347,
                                                                                "end": 352
                                                                            },
                                                                            "expression": {
                                                                                "kind": 67191035,
                                                                                "text": "#c",
                                                                                "rawText": "#c",
                                                                                "flags": 96,
                                                                                "start": 353,
                                                                                "end": 355
                                                                            },
                                                                            "flags": 97,
                                                                            "start": 347,
                                                                            "end": 355
                                                                        },
                                                                        {
                                                                            "kind": 129,
                                                                            "member": {
                                                                                "kind": 4276321,
                                                                                "flags": 97,
                                                                                "start": 356,
                                                                                "end": 361
                                                                            },
                                                                            "expression": {
                                                                                "kind": 67191035,
                                                                                "text": "#d",
                                                                                "rawText": "#d",
                                                                                "flags": 96,
                                                                                "start": 362,
                                                                                "end": 364
                                                                            },
                                                                            "flags": 97,
                                                                            "start": 356,
                                                                            "end": 364
                                                                        },
                                                                        {
                                                                            "kind": 129,
                                                                            "member": {
                                                                                "kind": 4276321,
                                                                                "flags": 97,
                                                                                "start": 365,
                                                                                "end": 370
                                                                            },
                                                                            "expression": {
                                                                                "kind": 67191035,
                                                                                "text": "#e",
                                                                                "rawText": "#e",
                                                                                "flags": 96,
                                                                                "start": 371,
                                                                                "end": 373
                                                                            },
                                                                            "flags": 97,
                                                                            "start": 365,
                                                                            "end": 373
                                                                        },
                                                                        {
                                                                            "kind": 129,
                                                                            "member": {
                                                                                "kind": 4276321,
                                                                                "flags": 97,
                                                                                "start": 374,
                                                                                "end": 379
                                                                            },
                                                                            "expression": {
                                                                                "kind": 67191035,
                                                                                "text": "#f",
                                                                                "rawText": "#f",
                                                                                "flags": 96,
                                                                                "start": 380,
                                                                                "end": 382
                                                                            },
                                                                            "flags": 97,
                                                                            "start": 374,
                                                                            "end": 382
                                                                        }
                                                                    ],
                                                                    "trailingComma": true,
                                                                    "flags": 33,
                                                                    "start": 329,
                                                                    "end": 383
                                                                },
                                                                "flags": 32,
                                                                "start": 328,
                                                                "end": 390
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 328,
                                                        "end": 390
                                                    },
                                                    "flags": 268435488,
                                                    "start": 312,
                                                    "end": 391
                                                },
                                                "flags": 81,
                                                "start": 300,
                                                "end": 391
                                            }
                                        ],
                                        "flags": 33,
                                        "start": 59,
                                        "end": 391
                                    },
                                    "flags": 32,
                                    "start": 57,
                                    "end": 396
                                },
                                "flags": 0,
                                "start": 55,
                                "end": 396
                            },
                            "flags": 0,
                            "start": 48,
                            "end": 396
                        }
                    ],
                    "flags": 32,
                    "start": 12,
                    "end": 396
                },
                "flags": 10,
                "start": 32,
                "end": 399
            },
            "flags": 16,
            "start": 0,
            "end": 399
        }
    ],
    "isModule": false,
    "source": " class Foo {\n   #a\n   #b\n   #c\n   #d\n   #e\n   #f\n   foo() {\n     [\n{x: this.#a},\n[[, this.#b, ,]],\n{y: this.#c = 3},\n{x: this.x, y: this.y, ...this.#d},\n[, , ...this.#e],\n[{x: [{y: [this.#f]}]}],\n     ] = [\n{x: 1},\n[[1, 2, 3]],\n{},\n{x: 2, y: 3, z: 4, w: 5},\n[4, 5, 6, 7, 8],\n[{x: [{y: [9]}]}],\n     ]\n     return JSON.stringify([\nthis.#a,\nthis.#b,\nthis.#c,\nthis.#d,\nthis.#e,\nthis.#f,\n     ])\n   }\n }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 399
}
```

### Printed

```javascript

class Foo {
  #a
  #b
  #c
  #d
  #e
  #f
  foo() {
    [
      { x: this.#a },
      [ [ , this.#b, , ], ],
      { y: this.#c = 3 },
      { x: this.x, y: this.y, ...this.#d },
      [ , , ...this.#e ],
      [ { x: [ { y: [ this.#f, ] }, ] }, ],
    ] = [
      { x: 1 },
      [ [ 1, 2, 3, ], ],
      {},
      { x: 2, y: 3, z: 4, w: 5 },
      [ 4, 5, 6, 7, 8, ],
      [ { x: [ { y: [ 9, ] }, ] }, ],
    ];
    return JSON.stringify( [
      this.#a,
      this.#b,
      this.#c,
      this.#d,
      this.#e,
      this.#f,
    ] );
  }
}

```

### Diagnostics

```javascript
✔ No errors
```

