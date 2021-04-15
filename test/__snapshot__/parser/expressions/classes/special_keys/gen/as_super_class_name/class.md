# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: as super class name
> :: case: class
## Input

`````js
class x extends class {}
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
                "kind": 37814352,
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 279,
                "extendsToken": {
                    "kind": 4194391,
                    "flags": 768,
                    "start": 7,
                    "end": 15
                },
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37814352,
                        "flags": 768,
                        "start": 15,
                        "end": 21
                    },
                    "name": null,
                    "typeParameters": null,
                    "classHeritage": null,
                    "members": {
                        "kind": 277,
                        "elements": [],
                        "flags": 256,
                        "start": 23,
                        "end": 24
                    },
                    "flags": 256,
                    "start": 15,
                    "end": 24
                },
                "typeParameter": null,
                "flags": 128,
                "start": 15,
                "end": 24
            },
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 256,
                "start": 0,
                "end": 0
            },
            "flags": 128,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "text": "class x extends class {}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 24,
            "end": 24
        }
    ],
    "start": 0,
    "end": 24
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

