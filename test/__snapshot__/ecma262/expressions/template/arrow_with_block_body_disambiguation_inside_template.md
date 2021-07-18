# Kataw parser test case

## Input

`````js
`a ${(k)=>{x}} b`
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
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 134299649,
                                        "text": "k",
                                        "rawText": "k",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 6,
                                        "end": 7
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 6,
                                "end": 8
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 10
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
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 11,
                                                "end": 12
                                            },
                                            "flags": 16,
                                            "transformFlags": 4096,
                                            "start": 11,
                                            "end": 12
                                        }
                                    ],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 11,
                                    "end": 12
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 10,
                                "end": 13
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 13
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 13
                    }
                ],
                "tail": {
                    "kind": 458761,
                    "text": " b",
                    "rawText": " b",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 17
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 17
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "`a ${(k)=>{x}} b`",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript
`a ${(k) => {
  x;
}} b`;
```

### Diagnostics

```javascript
✔ No errors
```

