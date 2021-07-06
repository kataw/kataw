# Kataw parser test case

## Input

`````js
async ()=>{}
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
                "parameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 7,
                "end": 7
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
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 11
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 10,
                "end": 12
            },
            "flags": 288,
            "transformFlags": 0,
            "start": 0,
            "end": 12
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
                            "start": 14,
                            "end": 15
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 14,
                        "end": 15
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 14,
                "end": 15
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 12,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "async ()=>{}\n{x}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript

async () => {}
{
  x;
}

```

### Diagnostics

```javascript
✔ No errors
```

