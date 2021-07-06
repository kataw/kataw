# Kataw parser test case

## Input

`````js
async (...args: any) => {};
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
            "kind": 271,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "typeParameters": null,
            "arrowPatameterList": {
                "kind": 342,
                "parameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 10
                        },
                        "left": {
                            "kind": 134299649,
                            "text": "args",
                            "rawText": "args",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 10,
                            "end": 14
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234252,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 15,
                                "end": 19
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 19
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 7,
                        "end": 19
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "transformFlags": 0,
                "start": 7,
                "end": 20
            },
            "returnType": null,
            "arrowToken": {
                "kind": 10,
                "flags": 64,
                "transformFlags": 0,
                "start": 20,
                "end": 23
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 25,
                    "end": 25
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 23,
                "end": 26
            },
            "flags": 290,
            "transformFlags": 0,
            "start": 0,
            "end": 26
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 26,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "async (...args: any) => {};",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

async (...args: any) => {}
```

### Diagnostics

```javascript
✔ No errors
```

