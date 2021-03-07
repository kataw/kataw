# Kataw parser test case

## Input

`````js
{
    function foo();
    function bar() { }
}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "{\n    function foo();\n    function bar() { }\n}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2099237,
                "block": {
                    "kind": 2084,
                    "statements": [
                        {
                            "kind": 264284,
                            "name": {
                                "kind": 131102,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 14,
                                "end": 18
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 20
                            },
                            "type": null,
                            "contents": null,
                            "typeParameters": null,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 1,
                            "end": 21
                        },
                        {
                            "kind": 264284,
                            "name": {
                                "kind": 131102,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 34,
                                "end": 38
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 39,
                                "end": 40
                            },
                            "type": null,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 42,
                                    "end": 42
                                },
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 40,
                                "end": 44
                            },
                            "typeParameters": null,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 256,
                            "start": 21,
                            "end": 44
                        }
                    ],
                    "multiline": true,
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 44
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 46
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 46
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 46
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

