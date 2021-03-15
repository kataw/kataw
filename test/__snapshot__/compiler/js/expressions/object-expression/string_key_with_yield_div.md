# Kataw parser test case

## Input

`````js
function *f(){   s = {"foo": yield / x}   }
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "function *f(){   s = {\"foo\": yield / x}   }",
    "filename": "",
    "statements": [
        {
            "kind": 788576,
            "name": {
                "kind": 131102,
                "text": "f",
                "rawText": "f",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 10,
                "end": 11
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 12,
                "end": 13
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 2097233,
                            "expression": {
                                "kind": 65550,
                                "left": {
                                    "kind": 196712,
                                    "text": "s",
                                    "rawText": "s",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 14,
                                    "end": 18
                                },
                                "operator": "=",
                                "right": {
                                    "kind": 98984,
                                    "propertyList": {
                                        "kind": 65722,
                                        "properties": [
                                            {
                                                "kind": 65721,
                                                "left": {
                                                    "kind": 4261583,
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 22,
                                                    "end": 27
                                                },
                                                "right": {
                                                    "kind": 65785,
                                                    "delegate": false,
                                                    "expression": {
                                                        "kind": 4260544,
                                                        "text": "/ x}   }",
                                                        "flags": 1048576,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 34,
                                                        "end": 43
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 16393,
                                                    "start": 28,
                                                    "end": 43
                                                },
                                                "accessModifier": null,
                                                "decorators": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 22,
                                                "end": 43
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 1,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 22,
                                        "end": 43
                                    },
                                    "flags": 1,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 20,
                                    "end": 43
                                },
                                "flags": 1,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 43
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 43
                        }
                    ],
                    "multiline": false,
                    "flags": 1,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 43
                },
                "flags": 1,
                "intersects": false,
                "transformFlags": 0,
                "start": 13,
                "end": 43
            },
            "typeParameters": null,
            "flags": 1,
            "intersects": false,
            "transformFlags": 384,
            "start": 0,
            "end": 43
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 0,
            "message": "Unterminated regular expression literal",
            "start": 43,
            "length": 1
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 35,
            "length": 0
        }
    ],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 43
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

