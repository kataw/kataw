# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: as class name
> :: case: import
## Input

`````js
class import {}
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
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 5,
                "end": 5
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 32,
                "start": 0,
                "end": 0
            },
            "flags": 16,
            "start": 0,
            "end": 5
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 0,
                "start": 5,
                "end": 12
            },
            "fromClause": {
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 15,
                "end": 15
            },
            "moduleSpecifier": null,
            "importClause": {
                "kind": 262,
                "defaultBinding": null,
                "nameSpaceImport": null,
                "namedImports": {
                    "kind": 267,
                    "importsList": {
                        "kind": 265,
                        "specifiers": [],
                        "flags": 0,
                        "start": 14,
                        "end": 14
                    },
                    "flags": 16,
                    "start": 12,
                    "end": 15
                },
                "flags": 16,
                "start": 12,
                "end": 15
            },
            "flags": 16,
            "start": 12,
            "end": 15
        }
    ],
    "isModule": false,
    "text": "class import {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Binding identifier expected - start: 5, end: 12
✖ Expression expected - start: 15, end: 15
✖ The `import` keyword can only be used with the module goal - start: 15, end: 15

```

