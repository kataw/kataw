  # Kataw parser test case

## Input

`````js
var a = false ? 1 : null;
var b = false ? undefined : 0;
var c = false ? 1 : 0;
var d = false ? false : true;
var e = false ? "foo" : "bar";
var f = false ? null : undefined;
var g = true ? {g:5} : null;
var h = [{h:5}, null];
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 205586437,
                                "flags": 96,
                                "start": 7,
                                "end": 13
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "start": 13,
                                "end": 15
                            },
                            "consequent": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 15,
                                "end": 17
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "start": 17,
                                "end": 19
                            },
                            "alternate": {
                                "kind": 138477575,
                                "flags": 96,
                                "start": 19,
                                "end": 24
                            },
                            "flags": 32,
                            "start": 7,
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
            "flags": 16,
            "start": 0,
            "end": 25
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 25,
                "end": 29
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 29,
                            "end": 31
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 205586437,
                                "flags": 96,
                                "start": 33,
                                "end": 39
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "start": 39,
                                "end": 41
                            },
                            "consequent": {
                                "kind": 134299649,
                                "text": "undefined",
                                "rawText": "undefined",
                                "flags": 96,
                                "start": 41,
                                "end": 51
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "start": 51,
                                "end": 53
                            },
                            "alternate": {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "start": 53,
                                "end": 55
                            },
                            "flags": 32,
                            "start": 33,
                            "end": 55
                        },
                        "flags": 16,
                        "start": 29,
                        "end": 55
                    }
                ],
                "flags": 16,
                "start": 29,
                "end": 55
            },
            "flags": 16,
            "start": 25,
            "end": 56
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 56,
                "end": 60
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "start": 60,
                            "end": 62
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 205586437,
                                "flags": 96,
                                "start": 64,
                                "end": 70
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "start": 70,
                                "end": 72
                            },
                            "consequent": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 72,
                                "end": 74
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "start": 74,
                                "end": 76
                            },
                            "alternate": {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "start": 76,
                                "end": 78
                            },
                            "flags": 32,
                            "start": 64,
                            "end": 78
                        },
                        "flags": 16,
                        "start": 60,
                        "end": 78
                    }
                ],
                "flags": 16,
                "start": 60,
                "end": 78
            },
            "flags": 16,
            "start": 56,
            "end": 79
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 79,
                "end": 83
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "d",
                            "rawText": "d",
                            "flags": 96,
                            "start": 83,
                            "end": 85
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 205586437,
                                "flags": 96,
                                "start": 87,
                                "end": 93
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "start": 93,
                                "end": 95
                            },
                            "consequent": {
                                "kind": 205586437,
                                "flags": 96,
                                "start": 95,
                                "end": 101
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "start": 101,
                                "end": 103
                            },
                            "alternate": {
                                "kind": 24752947,
                                "flags": 96,
                                "start": 103,
                                "end": 108
                            },
                            "flags": 32,
                            "start": 87,
                            "end": 108
                        },
                        "flags": 16,
                        "start": 83,
                        "end": 108
                    }
                ],
                "flags": 16,
                "start": 83,
                "end": 108
            },
            "flags": 16,
            "start": 79,
            "end": 109
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 109,
                "end": 113
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
                            "start": 113,
                            "end": 115
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 205586437,
                                "flags": 96,
                                "start": 117,
                                "end": 123
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "start": 123,
                                "end": 125
                            },
                            "consequent": {
                                "kind": 201392131,
                                "text": "foo",
                                "rawText": "\"foo\"",
                                "flags": 96,
                                "start": 125,
                                "end": 131
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "start": 131,
                                "end": 133
                            },
                            "alternate": {
                                "kind": 201392131,
                                "text": "bar",
                                "rawText": "\"bar\"",
                                "flags": 96,
                                "start": 133,
                                "end": 139
                            },
                            "flags": 32,
                            "start": 117,
                            "end": 139
                        },
                        "flags": 16,
                        "start": 113,
                        "end": 139
                    }
                ],
                "flags": 16,
                "start": 113,
                "end": 139
            },
            "flags": 16,
            "start": 109,
            "end": 140
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 140,
                "end": 144
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 144,
                            "end": 146
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 205586437,
                                "flags": 96,
                                "start": 148,
                                "end": 154
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "start": 154,
                                "end": 156
                            },
                            "consequent": {
                                "kind": 138477575,
                                "flags": 96,
                                "start": 156,
                                "end": 161
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "start": 161,
                                "end": 163
                            },
                            "alternate": {
                                "kind": 134299649,
                                "text": "undefined",
                                "rawText": "undefined",
                                "flags": 96,
                                "start": 163,
                                "end": 173
                            },
                            "flags": 32,
                            "start": 148,
                            "end": 173
                        },
                        "flags": 16,
                        "start": 144,
                        "end": 173
                    }
                ],
                "flags": 16,
                "start": 144,
                "end": 173
            },
            "flags": 16,
            "start": 140,
            "end": 174
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 174,
                "end": 178
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "g",
                            "rawText": "g",
                            "flags": 96,
                            "start": 178,
                            "end": 180
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 24752947,
                                "flags": 96,
                                "start": 182,
                                "end": 187
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "start": 187,
                                "end": 189
                            },
                            "consequent": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 219,
                                            "generatorToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "g",
                                                "rawText": "g",
                                                "flags": 96,
                                                "start": 191,
                                                "end": 192
                                            },
                                            "right": {
                                                "kind": 201392130,
                                                "text": 5,
                                                "rawText": "5",
                                                "flags": 96,
                                                "start": 193,
                                                "end": 194
                                            },
                                            "flags": 32,
                                            "start": 191,
                                            "end": 194
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 191,
                                    "end": 194
                                },
                                "flags": 48,
                                "start": 189,
                                "end": 195
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "start": 195,
                                "end": 197
                            },
                            "alternate": {
                                "kind": 138477575,
                                "flags": 96,
                                "start": 197,
                                "end": 202
                            },
                            "flags": 32,
                            "start": 182,
                            "end": 202
                        },
                        "flags": 16,
                        "start": 178,
                        "end": 202
                    }
                ],
                "flags": 16,
                "start": 178,
                "end": 202
            },
            "flags": 16,
            "start": 174,
            "end": 203
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 203,
                "end": 207
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "h",
                            "rawText": "h",
                            "flags": 96,
                            "start": 207,
                            "end": 209
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
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
                                                    "generatorToken": null,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "h",
                                                        "rawText": "h",
                                                        "flags": 96,
                                                        "start": 214,
                                                        "end": 215
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 5,
                                                        "rawText": "5",
                                                        "flags": 96,
                                                        "start": 216,
                                                        "end": 217
                                                    },
                                                    "flags": 32,
                                                    "start": 214,
                                                    "end": 217
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "start": 214,
                                            "end": 217
                                        },
                                        "flags": 48,
                                        "start": 213,
                                        "end": 218
                                    },
                                    {
                                        "kind": 138477575,
                                        "flags": 96,
                                        "start": 219,
                                        "end": 224
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 213,
                                "end": 224
                            },
                            "flags": 32,
                            "start": 211,
                            "end": 225
                        },
                        "flags": 16,
                        "start": 207,
                        "end": 225
                    }
                ],
                "flags": 16,
                "start": 207,
                "end": 225
            },
            "flags": 16,
            "start": 203,
            "end": 226
        }
    ],
    "isModule": false,
    "source": "var a = false ? 1 : null;\nvar b = false ? undefined : 0;\nvar c = false ? 1 : 0;\nvar d = false ? false : true;\nvar e = false ? \"foo\" : \"bar\";\nvar f = false ? null : undefined;\nvar g = true ? {g:5} : null;\nvar h = [{h:5}, null];",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 226
}
```

### Printed

```javascript

var a = false ? 1 : null;
var b = false ? undefined : 0;
var c = false ? 1 : 0;
var d = false ? false : true;
var e = false ? "\"foo\"" : "\"bar\"";
var f = false ? null : undefined;
var g = true ? { g: 5 } : null;
var h = [{ h: 5 }, null];
```

### Diagnostics

```javascript
✔ No errors
```

