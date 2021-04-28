# Kataw parser test case

## Input

`````js
let hello = (greeting:string = ' world') : string => {
  console.log('hello' + greeting);
};

hello();
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 768,
                "start": 0,
                "end": 3
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "hello",
                            "rawText": "hello",
                            "flags": 768,
                            "start": 3,
                            "end": 9
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 768,
                                "start": 49,
                                "end": 52
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 215,
                                    "ellipsisToken": null,
                                    "binding": {
                                        "kind": 134299649,
                                        "text": "greeting",
                                        "rawText": "greeting",
                                        "flags": 768,
                                        "start": 13,
                                        "end": 21
                                    },
                                    "optionalToken": null,
                                    "type": {
                                        "kind": 139,
                                        "type": {
                                            "kind": 134234347,
                                            "flags": 768,
                                            "start": 22,
                                            "end": 28
                                        },
                                        "flags": 0,
                                        "start": 21,
                                        "end": 28
                                    },
                                    "initializer": {
                                        "kind": 201392131,
                                        "text": " world",
                                        "rawText": " world",
                                        "flags": 67109632,
                                        "start": 30,
                                        "end": 39
                                    },
                                    "flags": 256,
                                    "start": 11,
                                    "end": 39
                                }
                            ],
                            "asyncToken": null,
                            "returnType": {
                                "kind": 139,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 768,
                                    "start": 42,
                                    "end": 49
                                },
                                "flags": 0,
                                "start": 40,
                                "end": 49
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
                                                "kind": 131,
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 134299649,
                                                        "text": "console",
                                                        "rawText": "console",
                                                        "flags": 768,
                                                        "start": 54,
                                                        "end": 64
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "log",
                                                        "rawText": "log",
                                                        "flags": 768,
                                                        "start": 65,
                                                        "end": 68
                                                    },
                                                    "flags": 256,
                                                    "start": 54,
                                                    "end": 68
                                                },
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [
                                                        {
                                                            "kind": 198,
                                                            "left": {
                                                                "kind": 201392131,
                                                                "text": "hello",
                                                                "rawText": "hello",
                                                                "flags": 67109632,
                                                                "start": 69,
                                                                "end": 76
                                                            },
                                                            "operatorToken": {
                                                                "kind": 34098,
                                                                "flags": 768,
                                                                "start": 76,
                                                                "end": 78
                                                            },
                                                            "right": {
                                                                "kind": 134299649,
                                                                "text": "greeting",
                                                                "rawText": "greeting",
                                                                "flags": 768,
                                                                "start": 78,
                                                                "end": 87
                                                            },
                                                            "flags": 256,
                                                            "start": 69,
                                                            "end": 87
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 256,
                                                    "start": 69,
                                                    "end": 87
                                                },
                                                "flags": 256,
                                                "start": 54,
                                                "end": 88
                                            },
                                            "flags": 128,
                                            "start": 54,
                                            "end": 89
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 256,
                                    "start": 54,
                                    "end": 89
                                },
                                "flags": 256,
                                "start": 52,
                                "end": 91
                            },
                            "flags": 256,
                            "start": 11,
                            "end": 91
                        },
                        "flags": 128,
                        "start": 3,
                        "end": 91
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 91
            },
            "flags": 128,
            "start": 0,
            "end": 92
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "hello",
                    "rawText": "hello",
                    "flags": 768,
                    "start": 92,
                    "end": 99
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 100,
                    "end": 100
                },
                "flags": 256,
                "start": 92,
                "end": 101
            },
            "flags": 128,
            "start": 92,
            "end": 102
        }
    ],
    "isModule": false,
    "text": "let hello = (greeting:string = ' world') : string => {\n  console.log('hello' + greeting);\n};\n\nhello();",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 102
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

