# Kataw parser test case

## Input

`````js
do
  if(x=>{});
while(y)
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 2
            },
            "statement": {
                "kind": 164,
                "ifKeyword": {
                    "kind": 37757019,
                    "flags": 81,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 7
                },
                "expression": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 9
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 9,
                        "end": 11
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 12
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 11,
                        "end": 13
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 13
                },
                "consequent": {
                    "kind": 168,
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 15
                },
                "elseKeyword": null,
                "alternate": null,
                "flags": 81,
                "transformFlags": 0,
                "start": 2,
                "end": 15
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 81,
                "transformFlags": 0,
                "start": 15,
                "end": 21
            },
            "expression": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 96,
                "transformFlags": 0,
                "start": 22,
                "end": 23
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "do\n  if(x=>{});\nwhile(y)",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript
do  if (x => {});
while (y);
```

### Diagnostics

```javascript
✔ No errors
```

