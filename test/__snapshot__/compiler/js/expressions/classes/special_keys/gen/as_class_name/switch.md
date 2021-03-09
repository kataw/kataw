# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/classes/special_keys/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\classes\special_keys\gen\as_class_name
> :: test: as class name
> :: case: switch
## Input

`````js
class switch {}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "class switch {}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 48,
                "name": null,
                "typeParameters": null,
                "classHeritage": null,
                "implementClauses": null,
                "members": {
                    "kind": 50,
                    "elements": [],
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 0,
                    "end": 0
                },
                "decorators": null,
                "isAbstract": false,
                "flags": 2,
                "intersects": false,
                "transformFlags": 1,
                "start": 0,
                "end": 5
            },
            {
                "kind": 2097362,
                "expression": {
                    "kind": 67224232,
                    "propertyList": {
                        "kind": 65722,
                        "properties": [],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 14,
                        "end": 14
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 15
                },
                "caseBlock": {
                    "kind": 2093,
                    "clauses": [],
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 15
                },
                "flags": 2,
                "intersects": false,
                "transformFlags": 0,
                "start": 5,
                "end": 15
            }
        ],
        "transformFlags": 0,
        "flags": 2,
        "intersects": false,
        "start": 0,
        "end": 15
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 6,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 13,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 14,
            "length": 0
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 15
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

