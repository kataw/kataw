# Kataw parser test case

## Input

`````js
const enum Foo {
    foo = 1,
    bar
}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "const enum Foo {\n    foo = 1,\n    bar\n}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 8263,
                "name": {
                    "kind": 196712,
                    "text": "Foo",
                    "rawText": "Foo",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 14
                },
                "members": {
                    "kind": 8265,
                    "enumMembersList": [
                        {
                            "kind": 8264,
                            "name": {
                                "kind": 196711,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 16,
                                "end": 24
                            },
                            "initializer": {
                                "kind": 4261540,
                                "text": 1,
                                "rawText": "1",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 26,
                                "end": 28
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 16,
                            "end": 28
                        },
                        {
                            "kind": 8264,
                            "name": {
                                "kind": 196711,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 29,
                                "end": 37
                            },
                            "initializer": null,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 29,
                            "end": 37
                        }
                    ],
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 16,
                    "end": 37
                },
                "isConst": true,
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 0,
                "end": 39
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 39
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 39
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

