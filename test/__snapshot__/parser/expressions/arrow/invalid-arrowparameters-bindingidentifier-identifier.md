# Kataw parser test case

## Input

`````js
var af = switch => 1;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 768,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "af",
                            "rawText": "af",
                            "flags": 768,
                            "start": 3,
                            "end": 6
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 16637,
                            "text": "",
                            "autofix": 0,
                            "flags": 12,
                            "start": 8,
                            "end": 8
                        },
                        "flags": 128,
                        "start": 3,
                        "end": 8
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 8
            },
            "flags": 128,
            "start": 0,
            "end": 8
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 768,
                "start": 8,
                "end": 15
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "autofix": 0,
                "flags": 12,
                "start": 15,
                "end": 15
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [],
                "flags": 128,
                "start": 15,
                "end": 15
            },
            "flags": 128,
            "start": 8,
            "end": 15
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1,
                "rawText": "1",
                "flags": 768,
                "start": 18,
                "end": 20
            },
            "flags": 128,
            "start": 18,
            "end": 21
        }
    ],
    "isModule": false,
    "text": "var af = switch => 1;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Expression expected - start: 8, end: 15
@{x2716}@ ',' expected - start: 8, end: 15
@{x2716}@ Expression expected - start: 15, end: 18
@{x2716}@ Statement expected - start: 15, end: 18

```

