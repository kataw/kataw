# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/classes/extends-lefthandside/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/classes/extends-lefthandside/gen/new_arg
> :: test: new arg
> :: case: super.foo
## Options

`````js
{}
`````
## Input

`````js
new super.foo
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
                "kind": 129,
                "member": {
                    "kind": 210,
                    "newKeyword": {
                        "kind": 138477661,
                        "flags": 96,
                        "start": 0,
                        "end": 3
                    },
                    "expression": {
                        "kind": 4259935,
                        "flags": 96,
                        "start": 3,
                        "end": 9
                    },
                    "argumentList": null,
                    "flags": 96,
                    "start": 0,
                    "end": 9
                },
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "start": 10,
                    "end": 13
                },
                "flags": 96,
                "start": 0,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "source": "new super.foo",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 3, end: 10

```

