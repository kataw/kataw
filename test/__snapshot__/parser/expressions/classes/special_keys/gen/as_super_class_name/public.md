# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: as super class name
> :: case: public
## Input

`````js
class x extends public {}
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
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 279,
                "extendsKeyword": {
                    "kind": 4194391,
                    "flags": 7,
                    "start": 0,
                    "end": 15
                },
                "expression": {
                    "kind": 134299649,
                    "text": "public",
                    "rawText": "public",
                    "flags": 768,
                    "start": 15,
                    "end": 22
                },
                "typeParameter": null,
                "flags": 128,
                "start": 15,
                "end": 22
            },
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 256,
                "start": 24,
                "end": 25
            },
            "flags": 128,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "text": "class x extends public {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Identifier expected. Reserved word in strict mode - start: 15, end: 22

```

