# Kataw parser test case

## Input

`````js
var obj: {str:string; i:number; j:boolean} = {str: "...", i: "...", k: false};
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
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 96,
                            "start": 3,
                            "end": 7
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234353,
                                "properties": [
                                    {
                                        "kind": 193,
                                        "protoKeyword": null,
                                        "staticToken": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "str",
                                            "rawText": "str",
                                            "flags": 96,
                                            "start": 10,
                                            "end": 13
                                        },
                                        "optionalToken": null,
                                        "value": {
                                            "kind": 134234347,
                                            "flags": 2097216,
                                            "start": 14,
                                            "end": 20
                                        },
                                        "flags": 2097152,
                                        "start": 10,
                                        "end": 21
                                    },
                                    {
                                        "kind": 193,
                                        "protoKeyword": null,
                                        "staticToken": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "i",
                                            "rawText": "i",
                                            "flags": 96,
                                            "start": 21,
                                            "end": 23
                                        },
                                        "optionalToken": null,
                                        "value": {
                                            "kind": 134234345,
                                            "flags": 2097216,
                                            "start": 24,
                                            "end": 30
                                        },
                                        "flags": 2097152,
                                        "start": 21,
                                        "end": 31
                                    },
                                    {
                                        "kind": 193,
                                        "protoKeyword": null,
                                        "staticToken": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "j",
                                            "rawText": "j",
                                            "flags": 96,
                                            "start": 31,
                                            "end": 33
                                        },
                                        "optionalToken": null,
                                        "value": {
                                            "kind": 134234254,
                                            "flags": 2097216,
                                            "start": 34,
                                            "end": 41
                                        },
                                        "flags": 2097152,
                                        "start": 31,
                                        "end": 41
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "start": 8,
                                "end": 42
                            },
                            "flags": 2097152,
                            "start": 7,
                            "end": 42
                        },
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "generatorToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "str",
                                            "rawText": "str",
                                            "flags": 96,
                                            "start": 46,
                                            "end": 49
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "...",
                                            "rawText": "\"...\"",
                                            "flags": 96,
                                            "start": 50,
                                            "end": 56
                                        },
                                        "flags": 32,
                                        "start": 46,
                                        "end": 56
                                    },
                                    {
                                        "kind": 219,
                                        "generatorToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "i",
                                            "rawText": "i",
                                            "flags": 96,
                                            "start": 57,
                                            "end": 59
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "...",
                                            "rawText": "\"...\"",
                                            "flags": 96,
                                            "start": 60,
                                            "end": 66
                                        },
                                        "flags": 32,
                                        "start": 57,
                                        "end": 66
                                    },
                                    {
                                        "kind": 219,
                                        "generatorToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "k",
                                            "rawText": "k",
                                            "flags": 96,
                                            "start": 67,
                                            "end": 69
                                        },
                                        "right": {
                                            "kind": 205586437,
                                            "flags": 96,
                                            "start": 70,
                                            "end": 76
                                        },
                                        "flags": 32,
                                        "start": 67,
                                        "end": 76
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 46,
                                "end": 76
                            },
                            "flags": 48,
                            "start": 44,
                            "end": 77
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 77
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 77
            },
            "flags": 16,
            "start": 0,
            "end": 78
        }
    ],
    "isModule": false,
    "source": "var obj: {str:string; i:number; j:boolean} = {str: \"...\", i: \"...\", k: false};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 78
}
```

### Printed

```javascript

var obj = { str: "\"...\"", i: "\"...\"", k: false };
```

### Diagnostics

```javascript
✔ No errors
```

