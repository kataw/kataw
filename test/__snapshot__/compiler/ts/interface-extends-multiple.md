# Kataw parser test case

## Input

`````js
interface Foo extends Bar,Baz {

}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "interface Foo extends Bar,Baz {\n\n}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 8311,
                "name": {
                    "kind": 196712,
                    "text": "Foo",
                    "rawText": "Foo",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 13
                },
                "typeParameters": null,
                "heritageClauses": {
                    "kind": 8294,
                    "clauses": [
                        {
                            "kind": 8293,
                            "type": {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "Bar",
                                    "rawText": "Bar",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 21,
                                    "end": 25
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 21,
                                "end": 26
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 21,
                            "end": 25
                        },
                        {
                            "kind": 8293,
                            "type": {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "Baz",
                                    "rawText": "Baz",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 26,
                                    "end": 29
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 26,
                                "end": 31
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 26,
                            "end": 29
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 21,
                    "end": 29
                },
                "objectTypeMembers": {
                    "kind": 169,
                    "members": [],
                    "multiline": true,
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 31,
                    "end": 31
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 0,
                "end": 34
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 34
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 34
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

