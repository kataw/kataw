# Kataw parser test case

## Input

`````js
{debugger;}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 171,
                        "flags": 128,
                        "start": 1,
                        "end": 10
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 10
            },
            "flags": 128,
            "start": 0,
            "end": 11
        }
    ],
    "isModule": false,
    "text": "{debugger;}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 11
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

