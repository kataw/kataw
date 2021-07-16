# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/declarations/class/special_keys/autogen.md
- Path: kataw/test/__snapshot__/ecma262/declarations/class/special_keys/gen/as_class_name
> :: test: as class name
> :: case: in
## Options

`````js
{}
`````
## Input

`````js
class in {}
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
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "transformFlags": 0,
                "start": 5,
                "end": 5
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 5
                },
                "flags": 5,
                "transformFlags": 0,
                "start": 32,
                "end": 5
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 5
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 5
                },
                "operatorToken": {
                    "kind": 21006388,
                    "flags": 96,
                    "transformFlags": 8192,
                    "start": 5,
                    "end": 8
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 10,
                        "end": 10
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 8,
                    "end": 11
                },
                "flags": 96,
                "transformFlags": 5120,
                "start": 5,
                "end": 11
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 5,
            "end": 11
        }
    ],
    "isModule": false,
    "source": "class in {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 11
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Binding identifier expected - start: 5, end: 8

```

