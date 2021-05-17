# Kataw parser test case

## Input

`````js
class x extends a-- {}
`````

## Output

### CST

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
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "members": {
                "kind": 277,
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 0,
                        "start": 7,
                        "end": 15
                    },
                    "expression": {
                        "kind": 127,
                        "operandToken": {
                            "kind": 196636,
                            "flags": 64,
                            "start": 17,
                            "end": 19
                        },
                        "operand": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 15,
                            "end": 17
                        },
                        "flags": 32,
                        "start": 15,
                        "end": 19
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "start": 15,
                    "end": 19
                },
                "elements": [],
                "flags": 32,
                "start": 7,
                "end": 22
            },
            "flags": 16,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "class x extends a-- {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

class x  {}
```

### Diagnostics

```javascript
✔ No errors
```

