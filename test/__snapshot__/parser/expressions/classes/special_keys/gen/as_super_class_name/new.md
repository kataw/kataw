# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: as super class name
> :: case: new
## Input

`````js
class x extends new {}
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
            "classHeritage": {
                "kind": 279,
                "extendsKeyword": {
                    "kind": 4194391,
                    "flags": 0,
                    "start": 7,
                    "end": 15
                },
                "expression": {
                    "kind": 210,
                    "newKeyword": {
                        "kind": 138477661,
                        "flags": 0,
                        "start": 15,
                        "end": 19
                    },
                    "expression": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 21,
                            "end": 21
                        },
                        "flags": 32,
                        "start": 19,
                        "end": 22
                    },
                    "argumentList": null,
                    "flags": 32,
                    "start": 15,
                    "end": 22
                },
                "typeParameter": null,
                "flags": 16,
                "start": 15,
                "end": 22
            },
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 32,
                "start": 0,
                "end": 0
            },
            "flags": 16,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "class x extends new {}",
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

