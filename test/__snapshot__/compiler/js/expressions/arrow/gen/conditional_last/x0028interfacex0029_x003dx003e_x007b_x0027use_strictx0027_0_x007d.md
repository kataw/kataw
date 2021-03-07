# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/arrow/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\arrow\gen\conditional_last
> :: test: conditional_last
> :: case: (interface) => { 'use strict'; 0 }
## Input

`````js
bar, (interface) => { 'use strict'; 0 };
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "bar, (interface) => { 'use strict'; 0 };",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65590,
                    "expressions": [
                        {
                            "kind": 196712,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 3
                        },
                        {
                            "kind": 67592,
                            "typeParameters": null,
                            "arrowParameters": {
                                "kind": 65545,
                                "elements": [
                                    {
                                        "kind": 89,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 4325406,
                                            "text": "interface",
                                            "rawText": "interface",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 6,
                                            "end": 15
                                        },
                                        "isOptional": false,
                                        "type": null,
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 4,
                                        "end": 16
                                    }
                                ],
                                "type": null,
                                "accessModifier": null,
                                "trailingComma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 4,
                                "end": 16
                            },
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [
                                        {
                                            "kind": 2097233,
                                            "expression": {
                                                "kind": 4261583,
                                                "text": "use strict",
                                                "rawText": "use strict",
                                                "flags": 16777216,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 21,
                                                "end": 34
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 21,
                                            "end": 35
                                        },
                                        {
                                            "kind": 2097233,
                                            "expression": {
                                                "kind": 4261540,
                                                "text": 0,
                                                "rawText": "0",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 35,
                                                "end": 37
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 35,
                                            "end": 37
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 21,
                                    "end": 37
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 39
                            },
                            "flags": 536870912,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 4,
                            "end": 39
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 39
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 40
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 40
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 40
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

