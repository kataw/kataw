# Kataw parser test case

## Input

`````js
()=>{}
{x}
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
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 1
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 4
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 5
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 6
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 6
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 6
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 9
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 8,
                        "end": 9
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 8,
                "end": 9
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 6,
            "end": 10
        }
    ],
    "isModule": false,
    "source": "()=>{}\n{x}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 10
}
```

### Printed

```javascript
() => {};
{
  x;
}

```

### Diagnostics

```javascript
✔ No errors
```

