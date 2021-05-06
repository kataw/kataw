# Kataw parser test case

## Input

`````js
 {if (false) {} else ;}
`````

## Output

### CST

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
                        "kind": 164,
                        "ifKeyword": {
                            "kind": 37757019,
                            "flags": 0,
                            "start": 2,
                            "end": 4
                        },
                        "expression": {
                            "kind": 134,
                            "text": false,
                            "flags": 96,
                            "start": 6,
                            "end": 11
                        },
                        "consequent": {
                            "kind": 249,
                            "block": {
                                "kind": 124,
                                "statements": [],
                                "flags": 16,
                                "start": 14,
                                "end": 14
                            },
                            "flags": 16,
                            "start": 12,
                            "end": 15
                        },
                        "elseKeyword": {
                            "kind": 4194389,
                            "flags": 64,
                            "start": 15,
                            "end": 20
                        },
                        "alternate": {
                            "kind": 168,
                            "flags": 16,
                            "start": 20,
                            "end": 22
                        },
                        "flags": 16,
                        "start": 2,
                        "end": 22
                    }
                ],
                "flags": 16,
                "start": 2,
                "end": 22
            },
            "flags": 16,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "source": " {if (false) {} else ;}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
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

