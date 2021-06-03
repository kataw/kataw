# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-03
- From: kataw8/test\__snapshot__/parser/expressions/classes/special_keys/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\classes\special_keys\gen\as_class_name
> :: test: as class name
> :: case: return
## Input

`````js
class return {}
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
            "kind": 161,
            "returnKeyword": {
                "kind": 37757022,
                "flags": 80,
                "start": 5,
                "end": 12
            },
            "expression": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [],
                    "trailingComma": false,
                    "flags": 16,
                    "start": 14,
                    "end": 14
                },
                "flags": 48,
                "start": 12,
                "end": 15
            },
            "flags": 16,
            "start": 0,
            "end": 5
        }
    ],
    "isModule": false,
    "source": "class return {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Binding identifier expected - start: 5, end: 12
✖ A return statement can only be used within a function_body - start: 5, end: 12

```

