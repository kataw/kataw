# Kataw parser test case

## Input

`````js
async () => {return}
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
            "arrowPatameterList": [],
            "returnType": null,
            "arrowToken": {
                "kind": 10,
                "flags": 64,
                "start": 8,
                "end": 11
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 80,
                                "start": 13,
                                "end": 19
                            },
                            "expression": null,
                            "flags": 80,
                            "start": 13,
                            "end": 19
                        }
                    ],
                    "flags": 32,
                    "start": 13,
                    "end": 19
                },
                "flags": 32,
                "start": 11,
                "end": 20
            },
            "flags": 288,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "async () => {return}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript

async () =>  {
  return ;
}
```

### Diagnostics

```javascript
✔ No errors
```

