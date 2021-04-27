# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: as super class name
> :: case: implements
## Input

`````js
class x extends implements {}
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
                "extendsKeyword": {
                    "kind": 4194391,
                    "flags": 768,
                    "start": 7,
                    "end": 15
                },
                "expression": {
                    "kind": 134299649,
                    "text": "implements",
                    "rawText": "implements",
                    "flags": 768,
                    "start": 15,
                    "end": 26
                },
                "typeParameter": null,
                "flags": 128,
                "start": 15,
                "end": 26
            },
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 256,
                "start": 28,
                "end": 29
            },
            "flags": 128,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "text": "class x extends implements {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Identifier expected. Reserved word in strict mode - start: 15, end: 26

```

