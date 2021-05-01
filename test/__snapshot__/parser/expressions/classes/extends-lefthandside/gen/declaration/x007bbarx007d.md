# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: declaration
> :: case: {bar}
## Input

`````js
class A extends {bar} {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "original": "A",
                "text": "A",
                "rawText": " A",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 279,
                "extendsKeyword": {
                    "kind": 4194391,
                    "flags": 0,
                    "start": 7,
                    "end": 15
                },
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 134299649,
                                "original": "bar",
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 96,
                                "start": 17,
                                "end": 20
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 17,
                        "end": 20
                    },
                    "flags": 32,
                    "start": 15,
                    "end": 21
                },
                "typeParameter": null,
                "flags": 16,
                "start": 15,
                "end": 21
            },
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 32,
                "start": 23,
                "end": 24
            },
            "flags": 16,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "class A extends {bar} {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
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

