# Kataw parser test case

## Input

`````js
do;while(j)try{}finally{}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 169,
            "expression": {
                "kind": 81921,
                "value": "j",
                "autofix": 0,
                "flags": 768,
                "start": 9,
                "end": 10
            },
            "statement": {
                "kind": 168,
                "autofix": 0,
                "flags": 128,
                "start": 2,
                "end": 3
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 11
        },
        {
            "kind": 159,
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "autofix": 0,
                    "flags": 128,
                    "start": 15,
                    "end": 15
                },
                "autofix": 0,
                "flags": 128,
                "start": 14,
                "end": 16
            },
            "catchClause": null,
            "finallyBlock": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "autofix": 0,
                    "flags": 128,
                    "start": 24,
                    "end": 24
                },
                "autofix": 0,
                "flags": 128,
                "start": 23,
                "end": 25
            },
            "autofix": 0,
            "flags": 128,
            "start": 11,
            "end": 25
        }
    ],
    "isModule": false,
    "text": "do;while(j)try{}finally{}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 25
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

