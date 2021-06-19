# Kataw parser test case

## Input

`````js
let {[a]: x, b: x} = obj;

let {[a]: x, [b]: x} = obj;

let {a: x, b: x} = obj;

let {a: x, b: x} = obj;

let {x, x} = obj;

let {a: x, c: {b: x}} = obj;

let x, {a: {b: x}} = obj;

let x, {a: {x}} = obj;

let {a: x, ...{x}} = obj;

let {a: x, ...x} = obj;

let x, {x} = obj;

let x = a; let x = b;
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 329,
                                        "ellipsisToken": null,
                                        "key": {
                                            "kind": 194,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 6,
                                                "end": 7
                                            },
                                            "flags": 32,
                                            "start": 5,
                                            "end": 8
                                        },
                                        "value": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 9,
                                            "end": 11
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 5,
                                        "end": 11
                                    },
                                    {
                                        "kind": 329,
                                        "ellipsisToken": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "start": 12,
                                            "end": 14
                                        },
                                        "value": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 15,
                                            "end": 17
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 12,
                                        "end": 17
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 5,
                                "end": 17
                            },
                            "flags": 32,
                            "start": 3,
                            "end": 18
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 96,
                            "start": 20,
                            "end": 24
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 24
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 24
            },
            "flags": 33554448,
            "start": 0,
            "end": 25
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "start": 25,
                "end": 30
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 329,
                                        "ellipsisToken": null,
                                        "key": {
                                            "kind": 194,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 33,
                                                "end": 34
                                            },
                                            "flags": 32,
                                            "start": 32,
                                            "end": 35
                                        },
                                        "value": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 36,
                                            "end": 38
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 32,
                                        "end": 38
                                    },
                                    {
                                        "kind": 329,
                                        "ellipsisToken": null,
                                        "key": {
                                            "kind": 194,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "start": 41,
                                                "end": 42
                                            },
                                            "flags": 32,
                                            "start": 39,
                                            "end": 43
                                        },
                                        "value": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 44,
                                            "end": 46
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 39,
                                        "end": 46
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 32,
                                "end": 46
                            },
                            "flags": 32,
                            "start": 30,
                            "end": 47
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 96,
                            "start": 49,
                            "end": 53
                        },
                        "flags": 16,
                        "start": 30,
                        "end": 53
                    }
                ],
                "flags": 17,
                "start": 30,
                "end": 53
            },
            "flags": 33554448,
            "start": 25,
            "end": 54
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "start": 54,
                "end": 59
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 329,
                                        "ellipsisToken": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 61,
                                            "end": 62
                                        },
                                        "value": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 63,
                                            "end": 65
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 61,
                                        "end": 65
                                    },
                                    {
                                        "kind": 329,
                                        "ellipsisToken": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "start": 66,
                                            "end": 68
                                        },
                                        "value": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 69,
                                            "end": 71
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 66,
                                        "end": 71
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 61,
                                "end": 71
                            },
                            "flags": 32,
                            "start": 59,
                            "end": 72
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 96,
                            "start": 74,
                            "end": 78
                        },
                        "flags": 16,
                        "start": 59,
                        "end": 78
                    }
                ],
                "flags": 17,
                "start": 59,
                "end": 78
            },
            "flags": 33554448,
            "start": 54,
            "end": 79
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "start": 79,
                "end": 84
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 329,
                                        "ellipsisToken": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 86,
                                            "end": 87
                                        },
                                        "value": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 88,
                                            "end": 90
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 86,
                                        "end": 90
                                    },
                                    {
                                        "kind": 329,
                                        "ellipsisToken": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "start": 91,
                                            "end": 93
                                        },
                                        "value": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 94,
                                            "end": 96
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 91,
                                        "end": 96
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 86,
                                "end": 96
                            },
                            "flags": 32,
                            "start": 84,
                            "end": 97
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 96,
                            "start": 99,
                            "end": 103
                        },
                        "flags": 16,
                        "start": 84,
                        "end": 103
                    }
                ],
                "flags": 17,
                "start": 84,
                "end": 103
            },
            "flags": 33554448,
            "start": 79,
            "end": 104
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "start": 104,
                "end": 109
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 111,
                                        "end": 112
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 113,
                                        "end": 115
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 111,
                                "end": 115
                            },
                            "flags": 32,
                            "start": 109,
                            "end": 116
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 96,
                            "start": 118,
                            "end": 122
                        },
                        "flags": 16,
                        "start": 109,
                        "end": 122
                    }
                ],
                "flags": 17,
                "start": 109,
                "end": 122
            },
            "flags": 33554448,
            "start": 104,
            "end": 123
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "start": 123,
                "end": 128
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 329,
                                        "ellipsisToken": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 130,
                                            "end": 131
                                        },
                                        "value": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 132,
                                            "end": 134
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 130,
                                        "end": 134
                                    },
                                    {
                                        "kind": 329,
                                        "ellipsisToken": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 96,
                                            "start": 135,
                                            "end": 137
                                        },
                                        "value": {
                                            "kind": 212,
                                            "propertyList": {
                                                "kind": 213,
                                                "properties": [
                                                    {
                                                        "kind": 329,
                                                        "ellipsisToken": null,
                                                        "key": {
                                                            "kind": 134299649,
                                                            "text": "b",
                                                            "rawText": "b",
                                                            "flags": 96,
                                                            "start": 140,
                                                            "end": 141
                                                        },
                                                        "value": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 142,
                                                            "end": 144
                                                        },
                                                        "initializer": null,
                                                        "flags": 32,
                                                        "start": 140,
                                                        "end": 144
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 140,
                                                "end": 144
                                            },
                                            "flags": 32,
                                            "start": 138,
                                            "end": 145
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 135,
                                        "end": 145
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 130,
                                "end": 145
                            },
                            "flags": 32,
                            "start": 128,
                            "end": 146
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 96,
                            "start": 148,
                            "end": 152
                        },
                        "flags": 16,
                        "start": 128,
                        "end": 152
                    }
                ],
                "flags": 17,
                "start": 128,
                "end": 152
            },
            "flags": 33554448,
            "start": 123,
            "end": 153
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "start": 153,
                "end": 158
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 158,
                            "end": 160
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 158,
                        "end": 160
                    },
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 329,
                                        "ellipsisToken": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 163,
                                            "end": 164
                                        },
                                        "value": {
                                            "kind": 212,
                                            "propertyList": {
                                                "kind": 213,
                                                "properties": [
                                                    {
                                                        "kind": 329,
                                                        "ellipsisToken": null,
                                                        "key": {
                                                            "kind": 134299649,
                                                            "text": "b",
                                                            "rawText": "b",
                                                            "flags": 96,
                                                            "start": 167,
                                                            "end": 168
                                                        },
                                                        "value": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 169,
                                                            "end": 171
                                                        },
                                                        "initializer": null,
                                                        "flags": 32,
                                                        "start": 167,
                                                        "end": 171
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 167,
                                                "end": 171
                                            },
                                            "flags": 32,
                                            "start": 165,
                                            "end": 172
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 163,
                                        "end": 172
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 163,
                                "end": 172
                            },
                            "flags": 32,
                            "start": 161,
                            "end": 173
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 96,
                            "start": 175,
                            "end": 179
                        },
                        "flags": 16,
                        "start": 161,
                        "end": 179
                    }
                ],
                "flags": 17,
                "start": 158,
                "end": 179
            },
            "flags": 33554448,
            "start": 153,
            "end": 180
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "start": 180,
                "end": 185
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 185,
                            "end": 187
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 185,
                        "end": 187
                    },
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 329,
                                        "ellipsisToken": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 190,
                                            "end": 191
                                        },
                                        "value": {
                                            "kind": 212,
                                            "propertyList": {
                                                "kind": 213,
                                                "properties": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 194,
                                                        "end": 195
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 194,
                                                "end": 195
                                            },
                                            "flags": 32,
                                            "start": 192,
                                            "end": 196
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 190,
                                        "end": 196
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 190,
                                "end": 196
                            },
                            "flags": 32,
                            "start": 188,
                            "end": 197
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 96,
                            "start": 199,
                            "end": 203
                        },
                        "flags": 16,
                        "start": 188,
                        "end": 203
                    }
                ],
                "flags": 17,
                "start": 185,
                "end": 203
            },
            "flags": 33554448,
            "start": 180,
            "end": 204
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "start": 204,
                "end": 209
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 329,
                                        "ellipsisToken": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 211,
                                            "end": 212
                                        },
                                        "value": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 213,
                                            "end": 215
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 211,
                                        "end": 215
                                    },
                                    {
                                        "kind": 329,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 216,
                                            "end": 220
                                        },
                                        "key": {
                                            "kind": 16637,
                                            "text": "",
                                            "rawText": "",
                                            "flags": 64,
                                            "start": 220,
                                            "end": 220
                                        },
                                        "value": {
                                            "kind": 212,
                                            "propertyList": {
                                                "kind": 213,
                                                "properties": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 221,
                                                        "end": 222
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 221,
                                                "end": 222
                                            },
                                            "flags": 32,
                                            "start": 220,
                                            "end": 223
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 216,
                                        "end": 223
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 211,
                                "end": 223
                            },
                            "flags": 32,
                            "start": 209,
                            "end": 224
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 96,
                            "start": 226,
                            "end": 230
                        },
                        "flags": 16,
                        "start": 209,
                        "end": 230
                    }
                ],
                "flags": 17,
                "start": 209,
                "end": 230
            },
            "flags": 33554448,
            "start": 204,
            "end": 231
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "start": 231,
                "end": 236
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 329,
                                        "ellipsisToken": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 238,
                                            "end": 239
                                        },
                                        "value": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 240,
                                            "end": 242
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 238,
                                        "end": 242
                                    },
                                    {
                                        "kind": 281,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 243,
                                            "end": 247
                                        },
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 247,
                                            "end": 248
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": null,
                                        "flags": 0,
                                        "start": 243,
                                        "end": 248
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 238,
                                "end": 248
                            },
                            "flags": 32,
                            "start": 236,
                            "end": 249
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 96,
                            "start": 251,
                            "end": 255
                        },
                        "flags": 16,
                        "start": 236,
                        "end": 255
                    }
                ],
                "flags": 17,
                "start": 236,
                "end": 255
            },
            "flags": 33554448,
            "start": 231,
            "end": 256
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "start": 256,
                "end": 261
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 261,
                            "end": 263
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 261,
                        "end": 263
                    },
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 266,
                                        "end": 267
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 266,
                                "end": 267
                            },
                            "flags": 32,
                            "start": 264,
                            "end": 268
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 96,
                            "start": 270,
                            "end": 274
                        },
                        "flags": 16,
                        "start": 264,
                        "end": 274
                    }
                ],
                "flags": 17,
                "start": 261,
                "end": 274
            },
            "flags": 33554448,
            "start": 256,
            "end": 275
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "start": 275,
                "end": 280
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 280,
                            "end": 282
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 284,
                            "end": 286
                        },
                        "flags": 16,
                        "start": 280,
                        "end": 286
                    }
                ],
                "flags": 17,
                "start": 280,
                "end": 286
            },
            "flags": 33554448,
            "start": 275,
            "end": 287
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 80,
                "start": 287,
                "end": 291
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 291,
                            "end": 293
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 295,
                            "end": 297
                        },
                        "flags": 16,
                        "start": 291,
                        "end": 297
                    }
                ],
                "flags": 16,
                "start": 291,
                "end": 297
            },
            "flags": 33554448,
            "start": 287,
            "end": 298
        }
    ],
    "isModule": false,
    "source": "let {[a]: x, b: x} = obj;\n\nlet {[a]: x, [b]: x} = obj;\n\nlet {a: x, b: x} = obj;\n\nlet {a: x, b: x} = obj;\n\nlet {x, x} = obj;\n\nlet {a: x, c: {b: x}} = obj;\n\nlet x, {a: {b: x}} = obj;\n\nlet x, {a: {x}} = obj;\n\nlet {a: x, ...{x}} = obj;\n\nlet {a: x, ...x} = obj;\n\nlet x, {x} = obj;\n\nlet x = a; let x = b;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 298
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Duplicate identifier - start: 15, end: 17
✖ Duplicate identifier - start: 36, end: 38
✖ Duplicate identifier - start: 44, end: 46
✖ Duplicate identifier - start: 63, end: 65
✖ Duplicate identifier - start: 69, end: 71
✖ Duplicate identifier - start: 88, end: 90
✖ Duplicate identifier - start: 94, end: 96
✖ Duplicate identifier - start: 112, end: 113
✖ Duplicate identifier - start: 115, end: 116
✖ Duplicate identifier - start: 132, end: 134
✖ Duplicate identifier - start: 142, end: 144
✖ Duplicate identifier - start: 158, end: 160
✖ Duplicate identifier - start: 169, end: 171
✖ Duplicate identifier - start: 185, end: 187
✖ Duplicate identifier - start: 195, end: 196
✖ Duplicate identifier - start: 213, end: 215
✖ Identifier expected - start: 220, end: 221
✖ Duplicate identifier - start: 222, end: 223
✖ Duplicate identifier - start: 240, end: 242
✖ Duplicate identifier - start: 248, end: 249
✖ Duplicate identifier - start: 261, end: 263
✖ Duplicate identifier - start: 267, end: 268
✖ Duplicate identifier - start: 280, end: 282
✖ Duplicate identifier - start: 291, end: 293

```

