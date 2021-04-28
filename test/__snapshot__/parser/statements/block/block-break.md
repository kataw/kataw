# Kataw parser test case

## Input

`````js
{ break; }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 150,
                        "breakKeyword": {
                            "kind": 37757005,
                            "flags": 1,
                            "start": 0,
                            "end": 7
                        },
                        "label": null,
                        "flags": 128,
                        "start": 1,
                        "end": 8
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 8
            },
            "flags": 128,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": false,
    "text": "{ break; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 10
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ A 'break' statement can only be used within an enclosing iteration or switch statement. - start: 7, end: 8

```

