# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-30
- From: kataw7/test\__snapshot__/parser/expressions/classes/special_keys/autogen.md
- Path: kataw7/test\__snapshot__\parser\expressions\classes\special_keys\gen\as_class_name
> :: test: as class name
> :: case: false
## Input

`````js
class false {}
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
                "flags": 80,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 5,
                "end": 5
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 262,
                    "elements": [],
                    "flags": 32,
                    "start": 5,
                    "end": 5
                },
                "flags": 5,
                "start": 32,
                "end": 5
            },
            "flags": 16,
            "start": 0,
            "end": 5
        },
        {
            "kind": 120,
            "expression": {
                "kind": 205586437,
                "flags": 96,
                "start": 5,
                "end": 11
            },
            "flags": 16,
            "start": 5,
            "end": 11
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 13,
                "end": 13
            },
            "flags": 16,
            "start": 11,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "class false {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Binding identifier expected - start: 5, end: 11
✖ Expected a `;` - start: 11, end: 13

```

