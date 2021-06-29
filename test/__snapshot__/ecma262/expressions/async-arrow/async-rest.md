# Kataw parser test case

## Input

`````js
async (...args: any[]) : any => {}
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
                            "start": 7,
                            "end": 10
                        },
                        "left": {
                            "kind": 134299649,
                            "text": "args",
                            "rawText": "args",
                            "flags": 96,
                            "start": 10,
                            "end": 14
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 136,
                                "type": {
                                    "kind": 134234252,
                                    "flags": 2097216,
                                    "start": 15,
                                    "end": 19
                                },
                                "flags": 2097152,
                                "start": 15,
                                "end": 21
                            },
                            "flags": 2097152,
                            "start": 15,
                            "end": 21
                        },
                        "right": null,
                        "flags": 32,
                        "start": 7,
                        "end": 21
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 7,
                "end": 28
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234252,
                    "flags": 2097216,
                    "start": 24,
                    "end": 28
                },
                "flags": 2097152,
                "start": 24,
                "end": 28
            },
            "arrowToken": {
                "kind": 10,
                "flags": 64,
                "start": 28,
                "end": 31
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 33,
                    "end": 33
                },
                "flags": 32,
                "start": 31,
                "end": 34
            },
            "flags": 290,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "async (...args: any[]) : any => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript

async  =>  {}
```

### Diagnostics

```javascript
✔ No errors
```

