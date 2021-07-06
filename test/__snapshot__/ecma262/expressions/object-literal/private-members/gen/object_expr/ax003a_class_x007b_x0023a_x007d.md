# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/object-literal/private-members/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/object-literal/private-members/gen/object_expr
> :: test: object_expr
> :: case: a: class { #a }
## Options

`````js
{}
`````
## Input

`````js
({ a: class { #a } })
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 4
                                },
                                "right": {
                                    "kind": 189,
                                    "decorators": null,
                                    "classKeyword": {
                                        "kind": 37822544,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 5,
                                        "end": 11
                                    },
                                    "name": null,
                                    "typeParameters": null,
                                    "tail": {
                                        "kind": 277,
                                        "classHeritage": null,
                                        "body": {
                                            "kind": 303,
                                            "elements": [
                                                {
                                                    "kind": 280,
                                                    "decorators": null,
                                                    "declaredToken": null,
                                                    "staticKeyword": null,
                                                    "asyncKeyword": null,
                                                    "key": {
                                                        "kind": 134299649,
                                                        "text": "#a",
                                                        "rawText": "#a",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 13,
                                                        "end": 16
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "initializer": null,
                                                    "flags": 32,
                                                    "transformFlags": 128,
                                                    "start": 13,
                                                    "end": 16
                                                }
                                            ],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 13,
                                            "end": 16
                                        },
                                        "flags": 11,
                                        "transformFlags": 0,
                                        "start": 32,
                                        "end": 18
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 5,
                                    "end": 18
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 2,
                                "end": 18
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 18
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 1,
                    "end": 20
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 34,
                "end": 21
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "({ a: class { #a } })",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

({ a: class  {
      #a;
    } });
```

### Diagnostics

```javascript
✔ No errors
```

