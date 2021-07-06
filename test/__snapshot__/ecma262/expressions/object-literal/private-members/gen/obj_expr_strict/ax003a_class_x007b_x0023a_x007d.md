# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/object-literal/private-members/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/object-literal/private-members/gen/obj_expr_strict
> :: test: obj_expr_strict
> :: case: a: class { #a }
## Options

`````js
{}
`````
## Input

`````js
'use strict'; ({ a: class { #a } });
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "'use strict'",
            "flags": 4194400,
            "transformFlags": 0,
            "start": 0,
            "end": 12
        }
    ],
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
                                    "start": 16,
                                    "end": 18
                                },
                                "right": {
                                    "kind": 189,
                                    "decorators": null,
                                    "classKeyword": {
                                        "kind": 37822544,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 19,
                                        "end": 25
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
                                                        "start": 27,
                                                        "end": 30
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "initializer": null,
                                                    "flags": 32,
                                                    "transformFlags": 128,
                                                    "start": 27,
                                                    "end": 30
                                                }
                                            ],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 27,
                                            "end": 30
                                        },
                                        "flags": 25,
                                        "transformFlags": 0,
                                        "start": 32,
                                        "end": 32
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 19,
                                    "end": 32
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 16,
                                "end": 32
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 16,
                        "end": 32
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 15,
                    "end": 34
                },
                "flags": 13,
                "transformFlags": 0,
                "start": 34,
                "end": 35
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 13,
            "end": 36
        }
    ],
    "isModule": false,
    "source": "'use strict'; ({ a: class { #a } });",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript

"'use strict'";
({ a: class  {
      #a;
    } });
```

### Diagnostics

```javascript
✔ No errors
```

