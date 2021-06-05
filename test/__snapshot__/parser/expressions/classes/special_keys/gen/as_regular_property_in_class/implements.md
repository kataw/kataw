# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-05
- From: kataw8/test\__snapshot__/parser/expressions/classes/special_keys/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\classes\special_keys\gen\as_regular_property_in_class
> :: test: as regular property in class
> :: case: implements
## Input

`````js
class x {implements: x}
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
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 262,
                    "elements": [
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticToken": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "implements",
                                "rawText": "implements",
                                "flags": 96,
                                "start": 9,
                                "end": 19
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "start": 9,
                            "end": 19
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 19
                },
                "flags": 7,
                "start": 32,
                "end": 19
            },
            "flags": 16,
            "start": 0,
            "end": 19
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 20,
                "end": 22
            },
            "flags": 16,
            "start": 20,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "class x {implements: x}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The parser expected to find a '}' to match the '{' token here - start: 19, end: 20
✖ Declaration or statement expected - start: 22, end: 23

```

