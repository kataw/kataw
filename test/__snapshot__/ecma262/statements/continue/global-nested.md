# Kataw parser test case

## Input

`````js
do     if (x) continue   ; while(true);
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
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 9
                },
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 12
                },
                "consequent": {
                    "kind": 172,
                    "continueKeyword": {
                        "kind": 37757009,
                        "flags": 80,
                        "transformFlags": 0,
                        "start": 13,
                        "end": 22
                    },
                    "label": null,
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 26
                },
                "elseKeyword": null,
                "alternate": null,
                "flags": 80,
                "transformFlags": 0,
                "start": 2,
                "end": 26
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 80,
                "transformFlags": 0,
                "start": 26,
                "end": 32
            },
            "expression": {
                "kind": 24752947,
                "flags": 96,
                "transformFlags": 0,
                "start": 33,
                "end": 37
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 39
        }
    ],
    "isModule": false,
    "source": "do     if (x) continue   ; while(true);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript
do  if (x) continue;
while (true);
```

### Diagnostics

```javascript
✔ No errors
```

