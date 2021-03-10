# Kataw parser test case

## Input

`````js
declare function assertIsString(value: unknown): asserts value is string;
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "declare function assertIsString(value: unknown): asserts value is string;",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 264284,
                "name": {
                    "kind": 131102,
                    "text": "assertIsString",
                    "rawText": "assertIsString",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 16,
                    "end": 31
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [
                        {
                            "kind": 89,
                            "ellipsis": false,
                            "binding": {
                                "kind": 131102,
                                "text": "value",
                                "rawText": "value",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 32,
                                "end": 37
                            },
                            "isOptional": false,
                            "type": {
                                "kind": 4202738,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 38,
                                "end": 46
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 32,
                            "end": 46
                        }
                    ],
                    "trailingComma": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 47
                },
                "type": {
                    "kind": 8426,
                    "asserts": true,
                    "parameterName": {
                        "kind": 196712,
                        "text": "value",
                        "rawText": "value",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 56,
                        "end": 62
                    },
                    "type": {
                        "kind": 4202702,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 65,
                        "end": 72
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 48,
                    "end": 72
                },
                "contents": null,
                "typeParameters": null,
                "flags": 201326592,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 7,
                "end": 73
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 73
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 73
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```
