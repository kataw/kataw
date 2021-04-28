# Kataw parser test case

## Input

`````js
{debugger}
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
                        "kind": 171,
                        "debuggerKeyword": {
                            "kind": 37757010,
                            "flags": 768,
                            "start": 1,
                            "end": 9
                        },
                        "flags": 1,
                        "start": 128,
                        "end": 9
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 9
            },
            "flags": 128,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": false,
    "text": "{debugger}",
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
✔ No errors
```

