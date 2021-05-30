# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-30
- From: kataw7/test\__snapshot__/parser/expressions/classes/special_keys/autogen.md
- Path: kataw7/test\__snapshot__\parser\expressions\classes\special_keys\gen\as_class_name
> :: test: as class name
> :: case: class
## Input

`````js
class class {}
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
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 80,
                "start": 5,
                "end": 11
            },
            "name": null,
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 262,
                    "elements": [],
                    "flags": 32,
                    "start": 13,
                    "end": 13
                },
                "flags": 11,
                "start": 32,
                "end": 14
            },
            "flags": 16,
            "start": 5,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "class class {}",
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
✖ A class declaration without the 'default' modifier must have a name. - start: 11, end: 13

```

