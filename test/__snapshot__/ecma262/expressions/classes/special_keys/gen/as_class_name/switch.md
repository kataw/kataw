# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/classes/special_keys/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/classes/special_keys/gen/as_class_name
> :: test: as class name
> :: case: switch
## Options

`````js
{}
`````
## Input

`````js
class switch {}
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
            "name": null,
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
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 80,
                "transformFlags": 0,
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
                    "transformFlags": 0,
                    "start": 14,
                    "end": 14
                },
                "flags": 48,
                "transformFlags": 8,
                "start": 12,
                "end": 15
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 15,
                "end": 15
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 5,
            "end": 15
        }
    ],
    "isModule": false,
    "source": "class switch {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing an opening brace - '{ - start: 6, end: 12
✖ Missing an opening parentheses - '( - start: 13, end: 14
✖ Declaration or statement expected - start: 14, end: 15

```

