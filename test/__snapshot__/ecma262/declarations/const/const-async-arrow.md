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

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 80,
                "transformFlags": 0,
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
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 7
                        },
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 15
                            },
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 17,
                                            "end": 20
                                        },
                                        "optionalToken": null,
                                        "type": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234347,
                                                "flags": 2097216,
                                                "transformFlags": 0,
                                                "start": 21,
                                                "end": 28
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 21,
                                            "end": 28
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "",
                                            "rawText": "\"\"",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 30,
                                            "end": 33
                                        },
                                        "flags": 32,
                                        "transformFlags": 4096,
                                        "start": 17,
                                        "end": 33
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 17,
                                "end": 34
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 34,
                                "end": 37
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 39,
                                    "end": 39
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 37,
                                "end": 40
                            },
                            "flags": 288,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 40
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 5,
                        "end": 40
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 5,
                "end": 40
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "const a = async (foo: string = \"\") => {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript
const a = async (foo: string = "\"\"") => {};
```

### Diagnostics

```javascript
✔ No errors
```

