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
            "decorators": null,
            "classKeyword": {
                "kind": 37814352,
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "name": null,
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 256,
                "start": 0,
                "end": 0
            },
            "flags": 128,
            "start": 0,
            "end": 5
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 768,
                "start": 5,
                "end": 12
            },
            "fromClause": {
                "kind": 16637,
                "text": "",
                "autofix": 0,
                "flags": 12,
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
                        "autofix": 0,
                        "flags": 0,
                        "start": 14,
                        "end": 14
                    },
                    "autofix": 0,
                    "flags": 128,
                    "start": 12,
                    "end": 15
                },
                "autofix": 0,
                "flags": 128,
                "start": 12,
                "end": 15
            },
            "flags": 128,
            "start": 12,
            "end": 15
        }
    ],
    "isModule": false,
    "text": "class import {}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 5,
            "end": 12
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 15,
            "end": 15
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 15,
            "end": 15
        },
        {
            "kind": 2,
            "source": 2,
            "code": 59,
            "error": "The `import` keyword can only be used with the module goal",
            "start": 15,
            "end": 15
        }
    ],
    "start": 0,
    "end": 15
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: as class name
> :: case: import
## Input

`````js
class import {}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: as class name
> :: case: import
## Input

`````js
class import {}
`````
```

