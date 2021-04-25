# Kataw parser test case

## Input

`````js
if(0) break;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 768,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 134299649,
                "text": 0,
                "rawText": "0",
                "flags": 768,
                "start": 3,
                "end": 4
            },
            "consequent": {
                "kind": 150,
                "breakKeyword": {
                    "kind": 37757005,
                    "flags": 768,
                    "start": 5,
                    "end": 11
                },
                "label": null,
                "flags": 128,
                "start": 5,
                "end": 12
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 128,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "text": "if(0) break;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 12
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

