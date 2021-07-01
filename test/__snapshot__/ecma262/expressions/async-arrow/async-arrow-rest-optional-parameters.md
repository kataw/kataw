# Kataw parser test case

## Input

`````js
async (...args?: any) => {};
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
                        "optionalToken": {
                            "kind": 134217750,
                            "flags": 64,
                            "start": 14,
                            "end": 15
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234252,
                                "flags": 2097216,
                                "start": 16,
                                "end": 20
                            },
                            "flags": 2097152,
                            "start": 16,
                            "end": 20
                        },
                        "right": null,
                        "flags": 32,
                        "start": 7,
                        "end": 20
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 7,
                "end": 21
            },
            "returnType": null,
            "arrowToken": {
                "kind": 10,
                "flags": 64,
                "start": 21,
                "end": 24
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 26,
                    "end": 26
                },
                "flags": 32,
                "start": 24,
                "end": 27
            },
            "flags": 290,
            "start": 0,
            "end": 27
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 27,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "async (...args?: any) => {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

async (...args?: any) =>  {}
;

```

### Diagnostics

```javascript
✔ No errors
```

