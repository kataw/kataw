# Kataw parser test case

## Input

`````js
 {if (false) {} else ;}
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
                        "kind": 164,
                        "ifKeyword": {
                            "kind": 37757019,
                            "flags": 768,
                            "start": 2,
                            "end": 4
                        },
                        "expression": {
                            "kind": 134,
                            "text": false,
                            "flags": 768,
                            "start": 6,
                            "end": 11
                        },
                        "consequent": {
                            "kind": 249,
                            "block": {
                                "kind": 124,
                                "statements": [],
                                "multiLine": false,
                                "flags": 128,
                                "start": 14,
                                "end": 14
                            },
                            "flags": 128,
                            "start": 12,
                            "end": 15
                        },
                        "elseKeyword": {
                            "kind": 4194389,
                            "flags": 768,
                            "start": 15,
                            "end": 20
                        },
                        "alternate": {
                            "kind": 168,
                            "flags": 128,
                            "start": 20,
                            "end": 22
                        },
                        "flags": 128,
                        "start": 2,
                        "end": 22
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 2,
                "end": 22
            },
            "flags": 128,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "text": " {if (false) {} else ;}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 23
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

