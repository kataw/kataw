# Kataw parser test case

## Input

`````js
const a = async (foo: string = "") => {}
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
                "kind": 37757004,
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 768,
                            "start": 5,
                            "end": 7
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 768,
                                "start": 34,
                                "end": 37
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 215,
                                    "ellipsisToken": null,
                                    "binding": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 768,
                                        "start": 17,
                                        "end": 20
                                    },
                                    "optionalToken": null,
                                    "type": {
                                        "kind": 139,
                                        "type": {
                                            "kind": 134234347,
                                            "flags": 768,
                                            "start": 21,
                                            "end": 28
                                        },
                                        "flags": 0,
                                        "start": 20,
                                        "end": 28
                                    },
                                    "initializer": {
                                        "kind": 201392131,
                                        "text": "",
                                        "rawText": "",
                                        "flags": 768,
                                        "start": 30,
                                        "end": 33
                                    },
                                    "flags": 256,
                                    "start": 17,
                                    "end": 33
                                }
                            ],
                            "asyncToken": {
                                "kind": 82031,
                                "flags": 768,
                                "start": 9,
                                "end": 15
                            },
                            "returnType": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 39,
                                    "end": 39
                                },
                                "flags": 256,
                                "start": 37,
                                "end": 40
                            },
                            "flags": 2304,
                            "start": 9,
                            "end": 40
                        },
                        "flags": 128,
                        "start": 5,
                        "end": 40
                    }
                ],
                "flags": 160,
                "start": 5,
                "end": 40
            },
            "flags": 128,
            "start": 0,
            "end": 40
        }
    ],
    "isModule": false,
    "text": "const a = async (foo: string = \"\") => {}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 40
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

