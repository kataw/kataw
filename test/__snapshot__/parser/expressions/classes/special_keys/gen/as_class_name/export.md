# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: as class name
> :: case: export
## Input

`````js
class export {}
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
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 0,
                "start": 5,
                "end": 12
            },
            "declaration": null,
            "namedExports": {
                "kind": 266,
                "exportsList": {
                    "kind": 261,
                    "specifiers": [],
                    "flags": 16,
                    "start": 14,
                    "end": 14
                },
                "flags": 0,
                "start": 12,
                "end": 15
            },
            "exportFromClause": null,
            "fromClause": null,
            "flags": 16,
            "start": 5,
            "end": 15
        }
    ],
    "isModule": false,
    "source": "class export {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript

class {}
 {};
```

### Diagnostics

```javascript
✖ Binding identifier expected - start: 5, end: 12
✖ The `export` keyword can only be used with the module goal - start: 5, end: 12

```

