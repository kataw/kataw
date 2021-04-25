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
    "directives": [],
    "statements": [
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 768,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 134299649,
                "text": "j",
                "rawText": "j",
                "flags": 768,
                "start": 9,
                "end": 10
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 768,
                "start": 3,
                "end": 8
            },
            "statement": {
                "kind": 168,
                "flags": 128,
                "start": 2,
                "end": 3
            },
            "flags": 128,
            "start": 0,
            "end": 11
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 768,
                "start": 11,
                "end": 14
            },
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "flags": 128,
                    "start": 15,
                    "end": 15
                },
                "flags": 128,
                "start": 14,
                "end": 16
            },
            "catchClause": null,
            "finallyKeyword": {
                "kind": 37757016,
                "flags": 768,
                "start": 16,
                "end": 23
            },
            "finallyBlock": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "flags": 128,
                    "start": 24,
                    "end": 24
                },
                "flags": 128,
                "start": 23,
                "end": 25
            },
            "flags": 128,
            "start": 11,
            "end": 25
        }
    ],
    "isModule": false,
    "text": "do;while(j)try{}finally{}",
    "fileName": "__root__",
    "flags": 0,
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
@{x2714}@ No errors
```

