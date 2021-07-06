# Kataw parser test case

## Input

`````js
`a ${async ()=>{}} b`
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 227,
                "spans": [
                    {
                        "kind": 65764,
                        "rawText": "a ",
                        "text": "a ",
                        "expression": {
                            "kind": 271,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 10
                            },
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 12,
                                "end": 12
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 15
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 16,
                                    "end": 16
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 15,
                                "end": 17
                            },
                            "flags": 288,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 17
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 17
                    }
                ],
                "tail": {
                    "kind": 458761,
                    "text": " b",
                    "rawText": " b",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 21
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 21
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "`a ${async ()=>{}} b`",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

`a ${async () => {}} b`;
```

### Diagnostics

```javascript
✔ No errors
```

