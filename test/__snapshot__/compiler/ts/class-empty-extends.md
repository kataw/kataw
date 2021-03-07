# Kataw parser test case

## Input

`````js
class Foo extends {

}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "class Foo extends {\n\n}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "Foo",
                    "rawText": "Foo",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 5,
                    "end": 9
                },
                "typeParameters": null,
                "classHeritage": {
                    "kind": 52,
                    "expression": {
                        "kind": 67224232,
                        "propertyList": {
                            "kind": 65722,
                            "properties": [],
                            "trailingComma": false,
                            "multiline": true,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 19
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 17,
                        "end": 22
                    },
                    "typeArguments": null,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 22
                },
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
                "flags": 2,
                "intersects": false,
                "transformFlags": 1,
                "start": 0,
                "end": 22
            }
        ],
        "transformFlags": 0,
        "flags": 2,
        "intersects": false,
        "start": 0,
        "end": 22
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 21,
            "length": 0
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 22
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

