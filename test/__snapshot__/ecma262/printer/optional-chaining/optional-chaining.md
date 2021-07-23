# Kataw parser test case

## Input

`````js
obj?.aaa?.bbb;
obj?.aaa.bbb;
(obj?.aaa)?.bbb;
(obj?.aaa).bbb;
obj.aaa.bbb;
obj.aaa?.bbb;
func?.()?.bbb;
func?.().bbb;
(func?.())?.bbb;
(func?.()).bbb;
obj?.aaa?.();
obj?.aaa();
(obj?.aaa)?.();
(obj?.aaa)();
(obj?.aaa?.bbb.ccc?.ddd)?.eee;
((obj?.aaa?.bbb.ccc)?.ddd)?.eee;
function testBasicSuccessCases() {
    shouldBe(undefined?.valueOf(), undefined);
    shouldBe(null?.valueOf(), undefined);
    shouldBe(true?.valueOf(), true);
    shouldBe(false?.valueOf(), false);
    shouldBe(0?.valueOf(), 0);
    shouldBe(1?.valueOf(), 1);
    shouldBe(''?.valueOf(), '');
    shouldBe('hi'?.valueOf(), 'hi');
    shouldBe({}?.constructor, Object);
    shouldBe({ x: 'hi' }?.x, 'hi');
    shouldBe([]?.length, 0);
    shouldBe(['hi']?.length, 1);
    shouldBe(masquerader?.foo, 3);
    shouldBe(undefined?.['valueOf'](), undefined);
    shouldBe(null?.['valueOf'](), undefined);
    shouldBe(true?.['valueOf'](), true);
    shouldBe(false?.['valueOf'](), false);
    shouldBe(0?.['valueOf'](), 0);
    shouldBe(1?.['valueOf'](), 1);
    shouldBe(''?.['valueOf'](), '');
    shouldBe('hi'?.['valueOf'](), 'hi');
    shouldBe({}?.['constructor'], Object);
    shouldBe({ x: 'hi' }?.['x'], 'hi');
    shouldBe([]?.['length'], 0);
    shouldBe(['hi']?.[0], 'hi');
    shouldBe(masquerader?.['foo'], 3);
    shouldBe(undefined?.(), undefined);
    shouldBe(null?.(), undefined);
    shouldBe((() => 3)?.(), 3);
}
noInline(testBasicSuccessCases);
function testBasicFailureCases() {
    shouldThrowTypeError(() => true?.(), 'true is not a function');
    shouldThrowTypeError(() => false?.(), 'false is not a function');
    shouldThrowTypeError(() => 0?.(), '0 is not a function');
    shouldThrowTypeError(() => 1?.(), '1 is not a function');
    shouldThrowTypeError(() => ''?.(), '\'\' is not a function');
    shouldThrowTypeError(() => 'hi'?.(), '\'hi\' is not a function');
    shouldThrowTypeError(() => ({}?.()), '({}) is not a function');
    shouldThrowTypeError(() => ({ x: 'hi' }?.()), '({ x: \'hi\' }) is not a function');
    shouldThrowTypeError(() => []?.(), '[] is not a function');
    shouldThrowTypeError(() => ['hi']?.(), '[\'hi\'] is not a function');
    shouldThrowTypeError(() => masquerader?.(), 'masquerader is not a function');
}
noInline(testBasicFailureCases);
for (let i = 0; i < 100000; i++)
    testBasicSuccessCases();
for (let i = 0; i < 100; i++)
    testBasicFailureCases();
shouldThrowTypeError(() => ({}?.i()), '({})?.i is not a function');
shouldBe({}.i?.(), undefined);
shouldBe({}?.i?.(), undefined);
shouldThrowTypeError(() => ({}?.['i']()), '({})?.[\'i\'] is not a function');
shouldBe({}['i']?.(), undefined);
shouldBe({}?.['i']?.(), undefined);
shouldThrowTypeError(() => ({}?.a['b']), 'undefined is not an object');
shouldBe({}?.a?.['b'], undefined);
shouldBe(null?.a['b']().c, undefined);
shouldThrowTypeError(() => ({}?.['a'].b), 'undefined is not an object');
shouldBe({}?.['a']?.b, undefined);
shouldBe(null?.['a'].b()['c'], undefined);
shouldThrowTypeError(() => (() => {
})?.()(), '(() => {})?.() is not a function');
shouldBe((() => {
})?.()?.(), undefined);
shouldBe(null?.()().a['b'], undefined);
const o0 = {
    a: {
        b() {
            return this._b.bind(this);
        },
        _b() {
            return this.__b;
        },
        __b: { c: 42 }
    }
};
shouldBe(o0?.a?.['b']?.()?.()?.c, 42);
shouldBe(o0?.i?.['j']?.()?.()?.k, undefined);
shouldBe((o0.a?._b)?.().c, 42);
shouldBe((o0.a?._b)().c, 42);
shouldBe({ undefined: 3 }?.[null?.a], 3);
shouldBe((() => 3)?.(null?.a), 3);
const o1 = {
    count: 0,
    get x() {
        this.count++;
        return () => {
        };
    }
};
o1.x?.y;
shouldBe(o1.count, 1);
o1.x?.['y'];
shouldBe(o1.count, 2);
o1.x?.();
shouldBe(o1.count, 3);
null?.(o1.x);
shouldBe(o1.count, 3);
shouldBe(delete undefined?.foo, true);
shouldBe(delete null?.foo, true);
shouldBe(delete undefined?.['foo'], true);
shouldBe(delete null?.['foo'], true);
shouldBe(delete undefined?.(), true);
shouldBe(delete null?.(), true);
const o2 = {
    x: 0,
    y: 0,
    z() {
    }
};
shouldBe(delete o2?.x, true);
shouldBe(o2.x, undefined);
shouldBe(delete o2?.x, true);
shouldBe(delete o2?.['y'], true);
shouldBe(o2.y, undefined);
shouldBe(delete o2?.['y'], true);
shouldBe(delete o2.z?.(), true);
function greet(name) {
    return `hey, ${ name }${ this.suffix ?? '.' }`;
}
shouldBe(eval?.('greet("world")'), 'hey, world.');
shouldBe(greet?.call({ suffix: '!' }, 'world'), 'hey, world!');
shouldBe(greet.call?.({ suffix: '!' }, 'world'), 'hey, world!');
shouldBe(null?.call({ suffix: '!' }, 'world'), undefined);
shouldBe({}.call?.({ suffix: '!' }, 'world'), undefined);
shouldBe(greet?.apply({ suffix: '?' }, ['world']), 'hey, world?');
shouldBe(greet.apply?.({ suffix: '?' }, ['world']), 'hey, world?');
shouldBe(null?.apply({ suffix: '?' }, ['world']), undefined);
shouldBe({}.apply?.({ suffix: '?' }, ['world']), undefined);
shouldBe(false ? 0.4 : 5, 5);
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
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 10
                },
                "member": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 5
                    },
                    "member": {
                        "kind": 134299649,
                        "text": "obj",
                        "rawText": "obj",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 3
                    },
                    "chain": {
                        "kind": 302,
                        "chain": {
                            "kind": 202,
                            "chain": null,
                            "expression": {
                                "kind": 134299649,
                                "text": "aaa",
                                "rawText": "aaa",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 8
                            },
                            "flags": 32,
                            "transformFlags": 2,
                            "start": 5,
                            "end": 8
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 8
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 8
                },
                "chain": {
                    "kind": 302,
                    "chain": {
                        "kind": 202,
                        "chain": null,
                        "expression": {
                            "kind": 134299649,
                            "text": "bbb",
                            "rawText": "bbb",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 10,
                            "end": 13
                        },
                        "flags": 32,
                        "transformFlags": 2,
                        "start": 10,
                        "end": 13
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 13
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 13
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 14
        },
        {
            "kind": 120,
            "expression": {
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 20
                },
                "member": {
                    "kind": 134299649,
                    "text": "obj",
                    "rawText": "obj",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 18
                },
                "chain": {
                    "kind": 202,
                    "chain": {
                        "kind": 302,
                        "chain": {
                            "kind": 202,
                            "chain": null,
                            "expression": {
                                "kind": 134299649,
                                "text": "aaa",
                                "rawText": "aaa",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 23
                            },
                            "flags": 32,
                            "transformFlags": 2,
                            "start": 20,
                            "end": 23
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 20,
                        "end": 23
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "bbb",
                        "rawText": "bbb",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 24,
                        "end": 27
                    },
                    "flags": 32,
                    "transformFlags": 2,
                    "start": 23,
                    "end": 27
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 14,
                "end": 27
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 14,
            "end": 28
        },
        {
            "kind": 120,
            "expression": {
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 39,
                    "end": 41
                },
                "member": {
                    "kind": 121,
                    "expression": {
                        "kind": 205,
                        "chainToken": {
                            "kind": 393240,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 33,
                            "end": 35
                        },
                        "member": {
                            "kind": 134299649,
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 30,
                            "end": 33
                        },
                        "chain": {
                            "kind": 302,
                            "chain": {
                                "kind": 202,
                                "chain": null,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "aaa",
                                    "rawText": "aaa",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 35,
                                    "end": 38
                                },
                                "flags": 32,
                                "transformFlags": 2,
                                "start": 35,
                                "end": 38
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 35,
                            "end": 38
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 28,
                        "end": 38
                    },
                    "flags": 28,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 39
                },
                "chain": {
                    "kind": 302,
                    "chain": {
                        "kind": 202,
                        "chain": null,
                        "expression": {
                            "kind": 134299649,
                            "text": "bbb",
                            "rawText": "bbb",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 41,
                            "end": 44
                        },
                        "flags": 32,
                        "transformFlags": 2,
                        "start": 41,
                        "end": 44
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 41,
                    "end": 44
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 28,
                "end": 44
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 28,
            "end": 45
        },
        {
            "kind": 120,
            "expression": {
                "kind": 129,
                "member": {
                    "kind": 121,
                    "expression": {
                        "kind": 205,
                        "chainToken": {
                            "kind": 393240,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 50,
                            "end": 52
                        },
                        "member": {
                            "kind": 134299649,
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 47,
                            "end": 50
                        },
                        "chain": {
                            "kind": 302,
                            "chain": {
                                "kind": 202,
                                "chain": null,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "aaa",
                                    "rawText": "aaa",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 52,
                                    "end": 55
                                },
                                "flags": 32,
                                "transformFlags": 2,
                                "start": 52,
                                "end": 55
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 52,
                            "end": 55
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 45,
                        "end": 55
                    },
                    "flags": 45,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 56
                },
                "expression": {
                    "kind": 134299649,
                    "text": "bbb",
                    "rawText": "bbb",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 57,
                    "end": 60
                },
                "flags": 45,
                "transformFlags": 2,
                "start": 45,
                "end": 60
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 45,
            "end": 61
        },
        {
            "kind": 120,
            "expression": {
                "kind": 129,
                "member": {
                    "kind": 129,
                    "member": {
                        "kind": 134299649,
                        "text": "obj",
                        "rawText": "obj",
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 61,
                        "end": 65
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "aaa",
                        "rawText": "aaa",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 66,
                        "end": 69
                    },
                    "flags": 97,
                    "transformFlags": 2,
                    "start": 61,
                    "end": 69
                },
                "expression": {
                    "kind": 134299649,
                    "text": "bbb",
                    "rawText": "bbb",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 70,
                    "end": 73
                },
                "flags": 97,
                "transformFlags": 2,
                "start": 61,
                "end": 73
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 61,
            "end": 74
        },
        {
            "kind": 120,
            "expression": {
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 82,
                    "end": 84
                },
                "member": {
                    "kind": 129,
                    "member": {
                        "kind": 134299649,
                        "text": "obj",
                        "rawText": "obj",
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 74,
                        "end": 78
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "aaa",
                        "rawText": "aaa",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 79,
                        "end": 82
                    },
                    "flags": 97,
                    "transformFlags": 2,
                    "start": 74,
                    "end": 82
                },
                "chain": {
                    "kind": 302,
                    "chain": {
                        "kind": 202,
                        "chain": null,
                        "expression": {
                            "kind": 134299649,
                            "text": "bbb",
                            "rawText": "bbb",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 84,
                            "end": 87
                        },
                        "flags": 32,
                        "transformFlags": 2,
                        "start": 84,
                        "end": 87
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 84,
                    "end": 87
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 74,
                "end": 87
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 74,
            "end": 88
        },
        {
            "kind": 120,
            "expression": {
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 97,
                    "end": 99
                },
                "member": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 93,
                        "end": 95
                    },
                    "member": {
                        "kind": 134299649,
                        "text": "func",
                        "rawText": "func",
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 88,
                        "end": 93
                    },
                    "chain": {
                        "kind": 302,
                        "chain": {
                            "kind": 204,
                            "chain": null,
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 256,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 96,
                                "end": 96
                            },
                            "flags": 32,
                            "transformFlags": 1,
                            "start": 95,
                            "end": 97
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 95,
                        "end": 97
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 88,
                    "end": 97
                },
                "chain": {
                    "kind": 302,
                    "chain": {
                        "kind": 202,
                        "chain": null,
                        "expression": {
                            "kind": 134299649,
                            "text": "bbb",
                            "rawText": "bbb",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 99,
                            "end": 102
                        },
                        "flags": 32,
                        "transformFlags": 2,
                        "start": 99,
                        "end": 102
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 99,
                    "end": 102
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 88,
                "end": 102
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 88,
            "end": 103
        },
        {
            "kind": 120,
            "expression": {
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 108,
                    "end": 110
                },
                "member": {
                    "kind": 134299649,
                    "text": "func",
                    "rawText": "func",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 103,
                    "end": 108
                },
                "chain": {
                    "kind": 202,
                    "chain": {
                        "kind": 302,
                        "chain": {
                            "kind": 204,
                            "chain": null,
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 256,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 111,
                                "end": 111
                            },
                            "flags": 32,
                            "transformFlags": 1,
                            "start": 110,
                            "end": 112
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 110,
                        "end": 112
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "bbb",
                        "rawText": "bbb",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 113,
                        "end": 116
                    },
                    "flags": 32,
                    "transformFlags": 2,
                    "start": 112,
                    "end": 116
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 103,
                "end": 116
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 103,
            "end": 117
        },
        {
            "kind": 120,
            "expression": {
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 128,
                    "end": 130
                },
                "member": {
                    "kind": 121,
                    "expression": {
                        "kind": 205,
                        "chainToken": {
                            "kind": 393240,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 123,
                            "end": 125
                        },
                        "member": {
                            "kind": 134299649,
                            "text": "func",
                            "rawText": "func",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 119,
                            "end": 123
                        },
                        "chain": {
                            "kind": 302,
                            "chain": {
                                "kind": 204,
                                "chain": null,
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 126,
                                    "end": 126
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 125,
                                "end": 127
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 125,
                            "end": 127
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 117,
                        "end": 127
                    },
                    "flags": 117,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 128
                },
                "chain": {
                    "kind": 302,
                    "chain": {
                        "kind": 202,
                        "chain": null,
                        "expression": {
                            "kind": 134299649,
                            "text": "bbb",
                            "rawText": "bbb",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 130,
                            "end": 133
                        },
                        "flags": 32,
                        "transformFlags": 2,
                        "start": 130,
                        "end": 133
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 130,
                    "end": 133
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 117,
                "end": 133
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 117,
            "end": 134
        },
        {
            "kind": 120,
            "expression": {
                "kind": 129,
                "member": {
                    "kind": 121,
                    "expression": {
                        "kind": 205,
                        "chainToken": {
                            "kind": 393240,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 140,
                            "end": 142
                        },
                        "member": {
                            "kind": 134299649,
                            "text": "func",
                            "rawText": "func",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 136,
                            "end": 140
                        },
                        "chain": {
                            "kind": 302,
                            "chain": {
                                "kind": 204,
                                "chain": null,
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 143,
                                    "end": 143
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 142,
                                "end": 144
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 142,
                            "end": 144
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 134,
                        "end": 144
                    },
                    "flags": 134,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 145
                },
                "expression": {
                    "kind": 134299649,
                    "text": "bbb",
                    "rawText": "bbb",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 146,
                    "end": 149
                },
                "flags": 166,
                "transformFlags": 2,
                "start": 134,
                "end": 149
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 134,
            "end": 150
        },
        {
            "kind": 120,
            "expression": {
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 159,
                    "end": 161
                },
                "member": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 154,
                        "end": 156
                    },
                    "member": {
                        "kind": 134299649,
                        "text": "obj",
                        "rawText": "obj",
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 150,
                        "end": 154
                    },
                    "chain": {
                        "kind": 302,
                        "chain": {
                            "kind": 202,
                            "chain": null,
                            "expression": {
                                "kind": 134299649,
                                "text": "aaa",
                                "rawText": "aaa",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 156,
                                "end": 159
                            },
                            "flags": 32,
                            "transformFlags": 2,
                            "start": 156,
                            "end": 159
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 156,
                        "end": 159
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 150,
                    "end": 159
                },
                "chain": {
                    "kind": 302,
                    "chain": {
                        "kind": 204,
                        "chain": null,
                        "typeArguments": null,
                        "argumentList": {
                            "kind": 256,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 162,
                            "end": 162
                        },
                        "flags": 32,
                        "transformFlags": 1,
                        "start": 161,
                        "end": 163
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 161,
                    "end": 163
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 150,
                "end": 163
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 150,
            "end": 164
        },
        {
            "kind": 120,
            "expression": {
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 168,
                    "end": 170
                },
                "member": {
                    "kind": 134299649,
                    "text": "obj",
                    "rawText": "obj",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 164,
                    "end": 168
                },
                "chain": {
                    "kind": 204,
                    "chain": {
                        "kind": 302,
                        "chain": {
                            "kind": 202,
                            "chain": null,
                            "expression": {
                                "kind": 134299649,
                                "text": "aaa",
                                "rawText": "aaa",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 170,
                                "end": 173
                            },
                            "flags": 32,
                            "transformFlags": 2,
                            "start": 170,
                            "end": 173
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 170,
                        "end": 173
                    },
                    "typeArguments": null,
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 174,
                        "end": 174
                    },
                    "flags": 32,
                    "transformFlags": 1,
                    "start": 173,
                    "end": 175
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 164,
                "end": 175
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 164,
            "end": 176
        },
        {
            "kind": 120,
            "expression": {
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 187,
                    "end": 189
                },
                "member": {
                    "kind": 121,
                    "expression": {
                        "kind": 205,
                        "chainToken": {
                            "kind": 393240,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 181,
                            "end": 183
                        },
                        "member": {
                            "kind": 134299649,
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 178,
                            "end": 181
                        },
                        "chain": {
                            "kind": 302,
                            "chain": {
                                "kind": 202,
                                "chain": null,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "aaa",
                                    "rawText": "aaa",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 183,
                                    "end": 186
                                },
                                "flags": 32,
                                "transformFlags": 2,
                                "start": 183,
                                "end": 186
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 183,
                            "end": 186
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 176,
                        "end": 186
                    },
                    "flags": 176,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 187
                },
                "chain": {
                    "kind": 302,
                    "chain": {
                        "kind": 204,
                        "chain": null,
                        "typeArguments": null,
                        "argumentList": {
                            "kind": 256,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 190,
                            "end": 190
                        },
                        "flags": 32,
                        "transformFlags": 1,
                        "start": 189,
                        "end": 191
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 189,
                    "end": 191
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 176,
                "end": 191
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 176,
            "end": 192
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 205,
                        "chainToken": {
                            "kind": 393240,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 197,
                            "end": 199
                        },
                        "member": {
                            "kind": 134299649,
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 194,
                            "end": 197
                        },
                        "chain": {
                            "kind": 302,
                            "chain": {
                                "kind": 202,
                                "chain": null,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "aaa",
                                    "rawText": "aaa",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 199,
                                    "end": 202
                                },
                                "flags": 32,
                                "transformFlags": 2,
                                "start": 199,
                                "end": 202
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 199,
                            "end": 202
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 192,
                        "end": 202
                    },
                    "flags": 192,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 203
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 204,
                    "end": 204
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 192,
                "end": 205
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 192,
            "end": 206
        },
        {
            "kind": 120,
            "expression": {
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 231,
                    "end": 233
                },
                "member": {
                    "kind": 121,
                    "expression": {
                        "kind": 205,
                        "chainToken": {
                            "kind": 393240,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 225,
                            "end": 227
                        },
                        "member": {
                            "kind": 205,
                            "chainToken": {
                                "kind": 393240,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 216,
                                "end": 218
                            },
                            "member": {
                                "kind": 205,
                                "chainToken": {
                                    "kind": 393240,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 211,
                                    "end": 213
                                },
                                "member": {
                                    "kind": 134299649,
                                    "text": "obj",
                                    "rawText": "obj",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 208,
                                    "end": 211
                                },
                                "chain": {
                                    "kind": 302,
                                    "chain": {
                                        "kind": 202,
                                        "chain": null,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "aaa",
                                            "rawText": "aaa",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 213,
                                            "end": 216
                                        },
                                        "flags": 32,
                                        "transformFlags": 2,
                                        "start": 213,
                                        "end": 216
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 213,
                                    "end": 216
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 206,
                                "end": 216
                            },
                            "chain": {
                                "kind": 202,
                                "chain": {
                                    "kind": 302,
                                    "chain": {
                                        "kind": 202,
                                        "chain": null,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "bbb",
                                            "rawText": "bbb",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 218,
                                            "end": 221
                                        },
                                        "flags": 32,
                                        "transformFlags": 2,
                                        "start": 218,
                                        "end": 221
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 218,
                                    "end": 221
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "ccc",
                                    "rawText": "ccc",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 222,
                                    "end": 225
                                },
                                "flags": 32,
                                "transformFlags": 2,
                                "start": 221,
                                "end": 225
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 206,
                            "end": 225
                        },
                        "chain": {
                            "kind": 302,
                            "chain": {
                                "kind": 202,
                                "chain": null,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "ddd",
                                    "rawText": "ddd",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 227,
                                    "end": 230
                                },
                                "flags": 32,
                                "transformFlags": 2,
                                "start": 227,
                                "end": 230
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 227,
                            "end": 230
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 206,
                        "end": 230
                    },
                    "flags": 206,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 231
                },
                "chain": {
                    "kind": 302,
                    "chain": {
                        "kind": 202,
                        "chain": null,
                        "expression": {
                            "kind": 134299649,
                            "text": "eee",
                            "rawText": "eee",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 233,
                            "end": 236
                        },
                        "flags": 32,
                        "transformFlags": 2,
                        "start": 233,
                        "end": 236
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 233,
                    "end": 236
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 206,
                "end": 236
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 206,
            "end": 237
        },
        {
            "kind": 120,
            "expression": {
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 264,
                    "end": 266
                },
                "member": {
                    "kind": 121,
                    "expression": {
                        "kind": 205,
                        "chainToken": {
                            "kind": 393240,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 258,
                            "end": 260
                        },
                        "member": {
                            "kind": 121,
                            "expression": {
                                "kind": 205,
                                "chainToken": {
                                    "kind": 393240,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 248,
                                    "end": 250
                                },
                                "member": {
                                    "kind": 205,
                                    "chainToken": {
                                        "kind": 393240,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 243,
                                        "end": 245
                                    },
                                    "member": {
                                        "kind": 134299649,
                                        "text": "obj",
                                        "rawText": "obj",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 240,
                                        "end": 243
                                    },
                                    "chain": {
                                        "kind": 302,
                                        "chain": {
                                            "kind": 202,
                                            "chain": null,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "aaa",
                                                "rawText": "aaa",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 245,
                                                "end": 248
                                            },
                                            "flags": 32,
                                            "transformFlags": 2,
                                            "start": 245,
                                            "end": 248
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 245,
                                        "end": 248
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 239,
                                    "end": 248
                                },
                                "chain": {
                                    "kind": 202,
                                    "chain": {
                                        "kind": 302,
                                        "chain": {
                                            "kind": 202,
                                            "chain": null,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "bbb",
                                                "rawText": "bbb",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 250,
                                                "end": 253
                                            },
                                            "flags": 32,
                                            "transformFlags": 2,
                                            "start": 250,
                                            "end": 253
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 250,
                                        "end": 253
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "ccc",
                                        "rawText": "ccc",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 254,
                                        "end": 257
                                    },
                                    "flags": 32,
                                    "transformFlags": 2,
                                    "start": 253,
                                    "end": 257
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 239,
                                "end": 257
                            },
                            "flags": 239,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 258
                        },
                        "chain": {
                            "kind": 302,
                            "chain": {
                                "kind": 202,
                                "chain": null,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "ddd",
                                    "rawText": "ddd",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 260,
                                    "end": 263
                                },
                                "flags": 32,
                                "transformFlags": 2,
                                "start": 260,
                                "end": 263
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 260,
                            "end": 263
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 239,
                        "end": 263
                    },
                    "flags": 237,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 264
                },
                "chain": {
                    "kind": 302,
                    "chain": {
                        "kind": 202,
                        "chain": null,
                        "expression": {
                            "kind": 134299649,
                            "text": "eee",
                            "rawText": "eee",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 266,
                            "end": 269
                        },
                        "flags": 32,
                        "transformFlags": 2,
                        "start": 266,
                        "end": 269
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 266,
                    "end": 269
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 237,
                "end": 269
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 237,
            "end": 270
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 270,
                "end": 279
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "testBasicSuccessCases",
                "rawText": "testBasicSuccessCases",
                "flags": 96,
                "transformFlags": 0,
                "start": 279,
                "end": 301
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 302,
                "end": 302
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "shouldBe",
                                    "rawText": "shouldBe",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 305,
                                    "end": 318
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 205,
                                            "chainToken": {
                                                "kind": 393240,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 328,
                                                "end": 330
                                            },
                                            "member": {
                                                "kind": 134299649,
                                                "text": "undefined",
                                                "rawText": "undefined",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 319,
                                                "end": 328
                                            },
                                            "chain": {
                                                "kind": 204,
                                                "chain": {
                                                    "kind": 302,
                                                    "chain": {
                                                        "kind": 202,
                                                        "chain": null,
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "valueOf",
                                                            "rawText": "valueOf",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 330,
                                                            "end": 337
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 2,
                                                        "start": 330,
                                                        "end": 337
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 330,
                                                    "end": 337
                                                },
                                                "typeArguments": null,
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 338,
                                                    "end": 338
                                                },
                                                "flags": 32,
                                                "transformFlags": 1,
                                                "start": 337,
                                                "end": 339
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 319,
                                            "end": 339
                                        },
                                        {
                                            "kind": 134299649,
                                            "text": "undefined",
                                            "rawText": "undefined",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 340,
                                            "end": 350
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 319,
                                    "end": 350
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 305,
                                "end": 351
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 305,
                            "end": 352
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "shouldBe",
                                    "rawText": "shouldBe",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 352,
                                    "end": 365
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 205,
                                            "chainToken": {
                                                "kind": 393240,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 370,
                                                "end": 372
                                            },
                                            "member": {
                                                "kind": 138477575,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 366,
                                                "end": 370
                                            },
                                            "chain": {
                                                "kind": 204,
                                                "chain": {
                                                    "kind": 302,
                                                    "chain": {
                                                        "kind": 202,
                                                        "chain": null,
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "valueOf",
                                                            "rawText": "valueOf",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 372,
                                                            "end": 379
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 2,
                                                        "start": 372,
                                                        "end": 379
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 372,
                                                    "end": 379
                                                },
                                                "typeArguments": null,
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 380,
                                                    "end": 380
                                                },
                                                "flags": 32,
                                                "transformFlags": 1,
                                                "start": 379,
                                                "end": 381
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 366,
                                            "end": 381
                                        },
                                        {
                                            "kind": 134299649,
                                            "text": "undefined",
                                            "rawText": "undefined",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 382,
                                            "end": 392
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 366,
                                    "end": 392
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 352,
                                "end": 393
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 352,
                            "end": 394
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "shouldBe",
                                    "rawText": "shouldBe",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 394,
                                    "end": 407
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 205,
                                            "chainToken": {
                                                "kind": 393240,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 412,
                                                "end": 414
                                            },
                                            "member": {
                                                "kind": 24752947,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 408,
                                                "end": 412
                                            },
                                            "chain": {
                                                "kind": 204,
                                                "chain": {
                                                    "kind": 302,
                                                    "chain": {
                                                        "kind": 202,
                                                        "chain": null,
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "valueOf",
                                                            "rawText": "valueOf",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 414,
                                                            "end": 421
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 2,
                                                        "start": 414,
                                                        "end": 421
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 414,
                                                    "end": 421
                                                },
                                                "typeArguments": null,
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 422,
                                                    "end": 422
                                                },
                                                "flags": 32,
                                                "transformFlags": 1,
                                                "start": 421,
                                                "end": 423
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 408,
                                            "end": 423
                                        },
                                        {
                                            "kind": 24752947,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 424,
                                            "end": 429
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 408,
                                    "end": 429
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 394,
                                "end": 430
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 394,
                            "end": 431
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "shouldBe",
                                    "rawText": "shouldBe",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 431,
                                    "end": 444
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 205,
                                            "chainToken": {
                                                "kind": 393240,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 450,
                                                "end": 452
                                            },
                                            "member": {
                                                "kind": 205586437,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 445,
                                                "end": 450
                                            },
                                            "chain": {
                                                "kind": 204,
                                                "chain": {
                                                    "kind": 302,
                                                    "chain": {
                                                        "kind": 202,
                                                        "chain": null,
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "valueOf",
                                                            "rawText": "valueOf",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 452,
                                                            "end": 459
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 2,
                                                        "start": 452,
                                                        "end": 459
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 452,
                                                    "end": 459
                                                },
                                                "typeArguments": null,
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 460,
                                                    "end": 460
                                                },
                                                "flags": 32,
                                                "transformFlags": 1,
                                                "start": 459,
                                                "end": 461
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 445,
                                            "end": 461
                                        },
                                        {
                                            "kind": 205586437,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 462,
                                            "end": 468
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 445,
                                    "end": 468
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 431,
                                "end": 469
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 431,
                            "end": 470
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "shouldBe",
                                    "rawText": "shouldBe",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 470,
                                    "end": 483
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 205,
                                            "chainToken": {
                                                "kind": 393240,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 485,
                                                "end": 487
                                            },
                                            "member": {
                                                "kind": 201392130,
                                                "text": 0,
                                                "rawText": "0",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 484,
                                                "end": 485
                                            },
                                            "chain": {
                                                "kind": 204,
                                                "chain": {
                                                    "kind": 302,
                                                    "chain": {
                                                        "kind": 202,
                                                        "chain": null,
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "valueOf",
                                                            "rawText": "valueOf",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 487,
                                                            "end": 494
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 2,
                                                        "start": 487,
                                                        "end": 494
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 487,
                                                    "end": 494
                                                },
                                                "typeArguments": null,
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 495,
                                                    "end": 495
                                                },
                                                "flags": 32,
                                                "transformFlags": 1,
                                                "start": 494,
                                                "end": 496
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 484,
                                            "end": 496
                                        },
                                        {
                                            "kind": 201392130,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 497,
                                            "end": 499
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 484,
                                    "end": 499
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 470,
                                "end": 500
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 470,
                            "end": 501
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "shouldBe",
                                    "rawText": "shouldBe",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 501,
                                    "end": 514
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 205,
                                            "chainToken": {
                                                "kind": 393240,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 516,
                                                "end": 518
                                            },
                                            "member": {
                                                "kind": 201392130,
                                                "text": 1,
                                                "rawText": "1",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 515,
                                                "end": 516
                                            },
                                            "chain": {
                                                "kind": 204,
                                                "chain": {
                                                    "kind": 302,
                                                    "chain": {
                                                        "kind": 202,
                                                        "chain": null,
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "valueOf",
                                                            "rawText": "valueOf",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 518,
                                                            "end": 525
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 2,
                                                        "start": 518,
                                                        "end": 525
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 518,
                                                    "end": 525
                                                },
                                                "typeArguments": null,
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 526,
                                                    "end": 526
                                                },
                                                "flags": 32,
                                                "transformFlags": 1,
                                                "start": 525,
                                                "end": 527
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 515,
                                            "end": 527
                                        },
                                        {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 528,
                                            "end": 530
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 515,
                                    "end": 530
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 501,
                                "end": 531
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 501,
                            "end": 532
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "shouldBe",
                                    "rawText": "shouldBe",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 532,
                                    "end": 545
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 205,
                                            "chainToken": {
                                                "kind": 393240,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 548,
                                                "end": 550
                                            },
                                            "member": {
                                                "kind": 201392131,
                                                "text": "",
                                                "rawText": "''",
                                                "flags": 4194400,
                                                "transformFlags": 0,
                                                "start": 546,
                                                "end": 548
                                            },
                                            "chain": {
                                                "kind": 204,
                                                "chain": {
                                                    "kind": 302,
                                                    "chain": {
                                                        "kind": 202,
                                                        "chain": null,
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "valueOf",
                                                            "rawText": "valueOf",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 550,
                                                            "end": 557
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 2,
                                                        "start": 550,
                                                        "end": 557
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 550,
                                                    "end": 557
                                                },
                                                "typeArguments": null,
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 558,
                                                    "end": 558
                                                },
                                                "flags": 32,
                                                "transformFlags": 1,
                                                "start": 557,
                                                "end": 559
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 546,
                                            "end": 559
                                        },
                                        {
                                            "kind": 201392131,
                                            "text": "",
                                            "rawText": "''",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 560,
                                            "end": 563
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 546,
                                    "end": 563
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 532,
                                "end": 564
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 532,
                            "end": 565
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "shouldBe",
                                    "rawText": "shouldBe",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 565,
                                    "end": 578
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 205,
                                            "chainToken": {
                                                "kind": 393240,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 583,
                                                "end": 585
                                            },
                                            "member": {
                                                "kind": 201392131,
                                                "text": "hi",
                                                "rawText": "'hi'",
                                                "flags": 4194400,
                                                "transformFlags": 0,
                                                "start": 579,
                                                "end": 583
                                            },
                                            "chain": {
                                                "kind": 204,
                                                "chain": {
                                                    "kind": 302,
                                                    "chain": {
                                                        "kind": 202,
                                                        "chain": null,
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "valueOf",
                                                            "rawText": "valueOf",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 585,
                                                            "end": 592
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 2,
                                                        "start": 585,
                                                        "end": 592
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 585,
                                                    "end": 592
                                                },
                                                "typeArguments": null,
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 593,
                                                    "end": 593
                                                },
                                                "flags": 32,
                                                "transformFlags": 1,
                                                "start": 592,
                                                "end": 594
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 579,
                                            "end": 594
                                        },
                                        {
                                            "kind": 201392131,
                                            "text": "hi",
                                            "rawText": "'hi'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 595,
                                            "end": 600
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 579,
                                    "end": 600
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 565,
                                "end": 601
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 565,
                            "end": 602
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "shouldBe",
                                    "rawText": "shouldBe",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 602,
                                    "end": 615
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 205,
                                            "chainToken": {
                                                "kind": 393240,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 618,
                                                "end": 620
                                            },
                                            "member": {
                                                "kind": 220,
                                                "propertyList": {
                                                    "kind": 218,
                                                    "properties": [],
                                                    "trailingComma": false,
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 617,
                                                    "end": 617
                                                },
                                                "flags": 48,
                                                "transformFlags": 8,
                                                "start": 616,
                                                "end": 618
                                            },
                                            "chain": {
                                                "kind": 302,
                                                "chain": {
                                                    "kind": 202,
                                                    "chain": null,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "constructor",
                                                        "rawText": "constructor",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 620,
                                                        "end": 631
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 2,
                                                    "start": 620,
                                                    "end": 631
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 620,
                                                "end": 631
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 616,
                                            "end": 631
                                        },
                                        {
                                            "kind": 134299649,
                                            "text": "Object",
                                            "rawText": "Object",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 632,
                                            "end": 639
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 616,
                                    "end": 639
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 602,
                                "end": 640
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 602,
                            "end": 641
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "shouldBe",
                                    "rawText": "shouldBe",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 641,
                                    "end": 654
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 205,
                                            "chainToken": {
                                                "kind": 393240,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 666,
                                                "end": 668
                                            },
                                            "member": {
                                                "kind": 220,
                                                "propertyList": {
                                                    "kind": 218,
                                                    "properties": [
                                                        {
                                                            "kind": 219,
                                                            "asteriskToken": null,
                                                            "left": {
                                                                "kind": 134299649,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 656,
                                                                "end": 658
                                                            },
                                                            "right": {
                                                                "kind": 201392131,
                                                                "text": "hi",
                                                                "rawText": "'hi'",
                                                                "flags": 4194400,
                                                                "transformFlags": 0,
                                                                "start": 659,
                                                                "end": 664
                                                            },
                                                            "flags": 32,
                                                            "transformFlags": 128,
                                                            "start": 656,
                                                            "end": 664
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 656,
                                                    "end": 664
                                                },
                                                "flags": 48,
                                                "transformFlags": 8,
                                                "start": 655,
                                                "end": 666
                                            },
                                            "chain": {
                                                "kind": 302,
                                                "chain": {
                                                    "kind": 202,
                                                    "chain": null,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 668,
                                                        "end": 669
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 2,
                                                    "start": 668,
                                                    "end": 669
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 668,
                                                "end": 669
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 655,
                                            "end": 669
                                        },
                                        {
                                            "kind": 201392131,
                                            "text": "hi",
                                            "rawText": "'hi'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 670,
                                            "end": 675
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 655,
                                    "end": 675
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 641,
                                "end": 676
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 641,
                            "end": 677
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "shouldBe",
                                    "rawText": "shouldBe",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 677,
                                    "end": 690
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 205,
                                            "chainToken": {
                                                "kind": 393240,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 693,
                                                "end": 695
                                            },
                                            "member": {
                                                "kind": 119,
                                                "elementList": {
                                                    "kind": 270,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 692,
                                                    "end": 692
                                                },
                                                "flags": 32,
                                                "transformFlags": 8,
                                                "start": 691,
                                                "end": 693
                                            },
                                            "chain": {
                                                "kind": 302,
                                                "chain": {
                                                    "kind": 202,
                                                    "chain": null,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "length",
                                                        "rawText": "length",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 695,
                                                        "end": 701
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 2,
                                                    "start": 695,
                                                    "end": 701
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 695,
                                                "end": 701
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 691,
                                            "end": 701
                                        },
                                        {
                                            "kind": 201392130,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 702,
                                            "end": 704
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 691,
                                    "end": 704
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 677,
                                "end": 705
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 677,
                            "end": 706
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "shouldBe",
                                    "rawText": "shouldBe",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 706,
                                    "end": 719
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 205,
                                            "chainToken": {
                                                "kind": 393240,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 726,
                                                "end": 728
                                            },
                                            "member": {
                                                "kind": 119,
                                                "elementList": {
                                                    "kind": 270,
                                                    "elements": [
                                                        {
                                                            "kind": 201392131,
                                                            "text": "hi",
                                                            "rawText": "'hi'",
                                                            "flags": 4194400,
                                                            "transformFlags": 0,
                                                            "start": 721,
                                                            "end": 725
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 4194336,
                                                    "transformFlags": 0,
                                                    "start": 721,
                                                    "end": 725
                                                },
                                                "flags": 32,
                                                "transformFlags": 8,
                                                "start": 720,
                                                "end": 726
                                            },
                                            "chain": {
                                                "kind": 302,
                                                "chain": {
                                                    "kind": 202,
                                                    "chain": null,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "length",
                                                        "rawText": "length",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 728,
                                                        "end": 734
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 2,
                                                    "start": 728,
                                                    "end": 734
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 728,
                                                "end": 734
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 720,
                                            "end": 734
                                        },
                                        {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 735,
                                            "end": 737
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 720,
                                    "end": 737
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 706,
                                "end": 738
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 706,
                            "end": 739
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "shouldBe",
                                    "rawText": "shouldBe",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 739,
                                    "end": 752
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 205,
                                            "chainToken": {
                                                "kind": 393240,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 764,
                                                "end": 766
                                            },
                                            "member": {
                                                "kind": 134299649,
                                                "text": "masquerader",
                                                "rawText": "masquerader",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 753,
                                                "end": 764
                                            },
                                            "chain": {
                                                "kind": 302,
                                                "chain": {
                                                    "kind": 202,
                                                    "chain": null,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "foo",
                                                        "rawText": "foo",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 766,
                                                        "end": 769
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 2,
                                                    "start": 766,
                                                    "end": 769
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 766,
                                                "end": 769
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 753,
                                            "end": 769
                                        },
                                        {
                                            "kind": 201392130,
                                            "text": 3,
                                            "rawText": "3",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 770,
                                            "end": 772
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 753,
                                    "end": 772
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 739,
                                "end": 773
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 739,
                            "end": 774
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "shouldBe",
                                    "rawText": "shouldBe",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 774,
                                    "end": 787
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 205,
                                            "chainToken": {
                                                "kind": 393240,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 797,
                                                "end": 799
                                            },
                                            "member": {
                                                "kind": 134299649,
                                                "text": "undefined",
                                                "rawText": "undefined",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 788,
                                                "end": 797
                                            },
                                            "chain": {
                                                "kind": 204,
                                                "chain": {
                                                    "kind": 302,
                                                    "chain": {
                                                        "kind": 203,
                                                        "chain": null,
                                                        "expression": {
                                                            "kind": 201392131,
                                                            "text": "valueOf",
                                                            "rawText": "'valueOf'",
                                                            "flags": 4194400,
                                                            "transformFlags": 0,
                                                            "start": 800,
                                                            "end": 809
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 4,
                                                        "start": 799,
                                                        "end": 809
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 799,
                                                    "end": 810
                                                },
                                                "typeArguments": null,
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 811,
                                                    "end": 811
                                                },
                                                "flags": 32,
                                                "transformFlags": 1,
                                                "start": 810,
                                                "end": 812
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 788,
                                            "end": 812
                                        },
                                        {
                                            "kind": 134299649,
                                            "text": "undefined",
                                            "rawText": "undefined",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 813,
                                            "end": 823
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 788,
                                    "end": 823
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 774,
                                "end": 824
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 774,
                            "end": 825
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "shouldBe",
                                    "rawText": "shouldBe",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 825,
                                    "end": 838
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 205,
                                            "chainToken": {
                                                "kind": 393240,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 843,
                                                "end": 845
                                            },
                                            "member": {
                                                "kind": 138477575,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 839,
                                                "end": 843
                                            },
                                            "chain": {
                                                "kind": 204,
                                                "chain": {
                                                    "kind": 302,
                                                    "chain": {
                                                        "kind": 203,
                                                        "chain": null,
                                                        "expression": {
                                                            "kind": 201392131,
                                                            "text": "valueOf",
                                                            "rawText": "'valueOf'",
                                                            "flags": 4194400,
                                                            "transformFlags": 0,
                                                            "start": 846,
                                                            "end": 855
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 4,
                                                        "start": 845,
                                                        "end": 855
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 845,
                                                    "end": 856
                                                },
                                                "typeArguments": null,
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 857,
                                                    "end": 857
                                                },
                                                "flags": 32,
                                                "transformFlags": 1,
                                                "start": 856,
                                                "end": 858
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 839,
                                            "end": 858
                                        },
                                        {
                                            "kind": 134299649,
                                            "text": "undefined",
                                            "rawText": "undefined",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 859,
                                            "end": 869
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 839,
                                    "end": 869
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 825,
                                "end": 870
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 825,
                            "end": 871
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "shouldBe",
                                    "rawText": "shouldBe",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 871,
                                    "end": 884
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 205,
                                            "chainToken": {
                                                "kind": 393240,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 889,
                                                "end": 891
                                            },
                                            "member": {
                                                "kind": 24752947,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 885,
                                                "end": 889
                                            },
                                            "chain": {
                                                "kind": 204,
                                                "chain": {
                                                    "kind": 302,
                                                    "chain": {
                                                        "kind": 203,
                                                        "chain": null,
                                                        "expression": {
                                                            "kind": 201392131,
                                                            "text": "valueOf",
                                                            "rawText": "'valueOf'",
                                                            "flags": 4194400,
                                                            "transformFlags": 0,
                                                            "start": 892,
                                                            "end": 901
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 4,
                                                        "start": 891,
                                                        "end": 901
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 891,
                                                    "end": 902
                                                },
                                                "typeArguments": null,
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 903,
                                                    "end": 903
                                                },
                                                "flags": 32,
                                                "transformFlags": 1,
                                                "start": 902,
                                                "end": 904
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 885,
                                            "end": 904
                                        },
                                        {
                                            "kind": 24752947,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 905,
                                            "end": 910
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 885,
                                    "end": 910
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 871,
                                "end": 911
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 871,
                            "end": 912
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "shouldBe",
                                    "rawText": "shouldBe",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 912,
                                    "end": 925
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 205,
                                            "chainToken": {
                                                "kind": 393240,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 931,
                                                "end": 933
                                            },
                                            "member": {
                                                "kind": 205586437,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 926,
                                                "end": 931
                                            },
                                            "chain": {
                                                "kind": 204,
                                                "chain": {
                                                    "kind": 302,
                                                    "chain": {
                                                        "kind": 203,
                                                        "chain": null,
                                                        "expression": {
                                                            "kind": 201392131,
                                                            "text": "valueOf",
                                                            "rawText": "'valueOf'",
                                                            "flags": 4194400,
                                                            "transformFlags": 0,
                                                            "start": 934,
                                                            "end": 943
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 4,
                                                        "start": 933,
                                                        "end": 943
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 933,
                                                    "end": 944
                                                },
                                                "typeArguments": null,
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 945,
                                                    "end": 945
                                                },
                                                "flags": 32,
                                                "transformFlags": 1,
                                                "start": 944,
                                                "end": 946
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 926,
                                            "end": 946
                                        },
                                        {
                                            "kind": 205586437,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 947,
                                            "end": 953
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 926,
                                    "end": 953
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 912,
                                "end": 954
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 912,
                            "end": 955
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "shouldBe",
                                    "rawText": "shouldBe",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 955,
                                    "end": 968
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 205,
                                            "chainToken": {
                                                "kind": 393240,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 970,
                                                "end": 972
                                            },
                                            "member": {
                                                "kind": 201392130,
                                                "text": 0,
                                                "rawText": "0",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 969,
                                                "end": 970
                                            },
                                            "chain": {
                                                "kind": 204,
                                                "chain": {
                                                    "kind": 302,
                                                    "chain": {
                                                        "kind": 203,
                                                        "chain": null,
                                                        "expression": {
                                                            "kind": 201392131,
                                                            "text": "valueOf",
                                                            "rawText": "'valueOf'",
                                                            "flags": 4194400,
                                                            "transformFlags": 0,
                                                            "start": 973,
                                                            "end": 982
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 4,
                                                        "start": 972,
                                                        "end": 982
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 972,
                                                    "end": 983
                                                },
                                                "typeArguments": null,
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 984,
                                                    "end": 984
                                                },
                                                "flags": 32,
                                                "transformFlags": 1,
                                                "start": 983,
                                                "end": 985
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 969,
                                            "end": 985
                                        },
                                        {
                                            "kind": 201392130,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 986,
                                            "end": 988
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 969,
                                    "end": 988
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 955,
                                "end": 989
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 955,
                            "end": 990
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "shouldBe",
                                    "rawText": "shouldBe",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 990,
                                    "end": 1003
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 205,
                                            "chainToken": {
                                                "kind": 393240,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 1005,
                                                "end": 1007
                                            },
                                            "member": {
                                                "kind": 201392130,
                                                "text": 1,
                                                "rawText": "1",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 1004,
                                                "end": 1005
                                            },
                                            "chain": {
                                                "kind": 204,
                                                "chain": {
                                                    "kind": 302,
                                                    "chain": {
                                                        "kind": 203,
                                                        "chain": null,
                                                        "expression": {
                                                            "kind": 201392131,
                                                            "text": "valueOf",
                                                            "rawText": "'valueOf'",
                                                            "flags": 4194400,
                                                            "transformFlags": 0,
                                                            "start": 1008,
                                                            "end": 1017
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 4,
                                                        "start": 1007,
                                                        "end": 1017
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 1007,
                                                    "end": 1018
                                                },
                                                "typeArguments": null,
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 1019,
                                                    "end": 1019
                                                },
                                                "flags": 32,
                                                "transformFlags": 1,
                                                "start": 1018,
                                                "end": 1020
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1004,
                                            "end": 1020
                                        },
                                        {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1021,
                                            "end": 1023
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 1004,
                                    "end": 1023
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 990,
                                "end": 1024
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 990,
                            "end": 1025
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "shouldBe",
                                    "rawText": "shouldBe",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 1025,
                                    "end": 1038
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 205,
                                            "chainToken": {
                                                "kind": 393240,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 1041,
                                                "end": 1043
                                            },
                                            "member": {
                                                "kind": 201392131,
                                                "text": "",
                                                "rawText": "''",
                                                "flags": 4194400,
                                                "transformFlags": 0,
                                                "start": 1039,
                                                "end": 1041
                                            },
                                            "chain": {
                                                "kind": 204,
                                                "chain": {
                                                    "kind": 302,
                                                    "chain": {
                                                        "kind": 203,
                                                        "chain": null,
                                                        "expression": {
                                                            "kind": 201392131,
                                                            "text": "valueOf",
                                                            "rawText": "'valueOf'",
                                                            "flags": 4194400,
                                                            "transformFlags": 0,
                                                            "start": 1044,
                                                            "end": 1053
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 4,
                                                        "start": 1043,
                                                        "end": 1053
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 1043,
                                                    "end": 1054
                                                },
                                                "typeArguments": null,
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 1055,
                                                    "end": 1055
                                                },
                                                "flags": 32,
                                                "transformFlags": 1,
                                                "start": 1054,
                                                "end": 1056
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1039,
                                            "end": 1056
                                        },
                                        {
                                            "kind": 201392131,
                                            "text": "",
                                            "rawText": "''",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 1057,
                                            "end": 1060
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 1039,
                                    "end": 1060
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 1025,
                                "end": 1061
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 1025,
                            "end": 1062
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "shouldBe",
                                    "rawText": "shouldBe",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 1062,
                                    "end": 1075
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 205,
                                            "chainToken": {
                                                "kind": 393240,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 1080,
                                                "end": 1082
                                            },
                                            "member": {
                                                "kind": 201392131,
                                                "text": "hi",
                                                "rawText": "'hi'",
                                                "flags": 4194400,
                                                "transformFlags": 0,
                                                "start": 1076,
                                                "end": 1080
                                            },
                                            "chain": {
                                                "kind": 204,
                                                "chain": {
                                                    "kind": 302,
                                                    "chain": {
                                                        "kind": 203,
                                                        "chain": null,
                                                        "expression": {
                                                            "kind": 201392131,
                                                            "text": "valueOf",
                                                            "rawText": "'valueOf'",
                                                            "flags": 4194400,
                                                            "transformFlags": 0,
                                                            "start": 1083,
                                                            "end": 1092
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 4,
                                                        "start": 1082,
                                                        "end": 1092
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 1082,
                                                    "end": 1093
                                                },
                                                "typeArguments": null,
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 1094,
                                                    "end": 1094
                                                },
                                                "flags": 32,
                                                "transformFlags": 1,
                                                "start": 1093,
                                                "end": 1095
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1076,
                                            "end": 1095
                                        },
                                        {
                                            "kind": 201392131,
                                            "text": "hi",
                                            "rawText": "'hi'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 1096,
                                            "end": 1101
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 1076,
                                    "end": 1101
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 1062,
                                "end": 1102
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 1062,
                            "end": 1103
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "shouldBe",
                                    "rawText": "shouldBe",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 1103,
                                    "end": 1116
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 205,
                                            "chainToken": {
                                                "kind": 393240,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 1119,
                                                "end": 1121
                                            },
                                            "member": {
                                                "kind": 220,
                                                "propertyList": {
                                                    "kind": 218,
                                                    "properties": [],
                                                    "trailingComma": false,
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 1118,
                                                    "end": 1118
                                                },
                                                "flags": 48,
                                                "transformFlags": 8,
                                                "start": 1117,
                                                "end": 1119
                                            },
                                            "chain": {
                                                "kind": 302,
                                                "chain": {
                                                    "kind": 203,
                                                    "chain": null,
                                                    "expression": {
                                                        "kind": 201392131,
                                                        "text": "constructor",
                                                        "rawText": "'constructor'",
                                                        "flags": 4194400,
                                                        "transformFlags": 0,
                                                        "start": 1122,
                                                        "end": 1135
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 4,
                                                    "start": 1121,
                                                    "end": 1135
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 1121,
                                                "end": 1136
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1117,
                                            "end": 1136
                                        },
                                        {
                                            "kind": 134299649,
                                            "text": "Object",
                                            "rawText": "Object",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1137,
                                            "end": 1144
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 1117,
                                    "end": 1144
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 1103,
                                "end": 1145
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 1103,
                            "end": 1146
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "shouldBe",
                                    "rawText": "shouldBe",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 1146,
                                    "end": 1159
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 205,
                                            "chainToken": {
                                                "kind": 393240,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 1171,
                                                "end": 1173
                                            },
                                            "member": {
                                                "kind": 220,
                                                "propertyList": {
                                                    "kind": 218,
                                                    "properties": [
                                                        {
                                                            "kind": 219,
                                                            "asteriskToken": null,
                                                            "left": {
                                                                "kind": 134299649,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 1161,
                                                                "end": 1163
                                                            },
                                                            "right": {
                                                                "kind": 201392131,
                                                                "text": "hi",
                                                                "rawText": "'hi'",
                                                                "flags": 4194400,
                                                                "transformFlags": 0,
                                                                "start": 1164,
                                                                "end": 1169
                                                            },
                                                            "flags": 32,
                                                            "transformFlags": 128,
                                                            "start": 1161,
                                                            "end": 1169
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 1161,
                                                    "end": 1169
                                                },
                                                "flags": 48,
                                                "transformFlags": 8,
                                                "start": 1160,
                                                "end": 1171
                                            },
                                            "chain": {
                                                "kind": 302,
                                                "chain": {
                                                    "kind": 203,
                                                    "chain": null,
                                                    "expression": {
                                                        "kind": 201392131,
                                                        "text": "x",
                                                        "rawText": "'x'",
                                                        "flags": 4194400,
                                                        "transformFlags": 0,
                                                        "start": 1174,
                                                        "end": 1177
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 4,
                                                    "start": 1173,
                                                    "end": 1177
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 1173,
                                                "end": 1178
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1160,
                                            "end": 1178
                                        },
                                        {
                                            "kind": 201392131,
                                            "text": "hi",
                                            "rawText": "'hi'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 1179,
                                            "end": 1184
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 1160,
                                    "end": 1184
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 1146,
                                "end": 1185
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 1146,
                            "end": 1186
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "shouldBe",
                                    "rawText": "shouldBe",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 1186,
                                    "end": 1199
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 205,
                                            "chainToken": {
                                                "kind": 393240,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 1202,
                                                "end": 1204
                                            },
                                            "member": {
                                                "kind": 119,
                                                "elementList": {
                                                    "kind": 270,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 1201,
                                                    "end": 1201
                                                },
                                                "flags": 32,
                                                "transformFlags": 8,
                                                "start": 1200,
                                                "end": 1202
                                            },
                                            "chain": {
                                                "kind": 302,
                                                "chain": {
                                                    "kind": 203,
                                                    "chain": null,
                                                    "expression": {
                                                        "kind": 201392131,
                                                        "text": "length",
                                                        "rawText": "'length'",
                                                        "flags": 4194400,
                                                        "transformFlags": 0,
                                                        "start": 1205,
                                                        "end": 1213
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 4,
                                                    "start": 1204,
                                                    "end": 1213
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 1204,
                                                "end": 1214
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1200,
                                            "end": 1214
                                        },
                                        {
                                            "kind": 201392130,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1215,
                                            "end": 1217
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 1200,
                                    "end": 1217
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 1186,
                                "end": 1218
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 1186,
                            "end": 1219
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "shouldBe",
                                    "rawText": "shouldBe",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 1219,
                                    "end": 1232
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 205,
                                            "chainToken": {
                                                "kind": 393240,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 1239,
                                                "end": 1241
                                            },
                                            "member": {
                                                "kind": 119,
                                                "elementList": {
                                                    "kind": 270,
                                                    "elements": [
                                                        {
                                                            "kind": 201392131,
                                                            "text": "hi",
                                                            "rawText": "'hi'",
                                                            "flags": 4194400,
                                                            "transformFlags": 0,
                                                            "start": 1234,
                                                            "end": 1238
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 4194336,
                                                    "transformFlags": 0,
                                                    "start": 1234,
                                                    "end": 1238
                                                },
                                                "flags": 32,
                                                "transformFlags": 8,
                                                "start": 1233,
                                                "end": 1239
                                            },
                                            "chain": {
                                                "kind": 302,
                                                "chain": {
                                                    "kind": 203,
                                                    "chain": null,
                                                    "expression": {
                                                        "kind": 201392130,
                                                        "text": 0,
                                                        "rawText": "0",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 1242,
                                                        "end": 1243
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 4,
                                                    "start": 1241,
                                                    "end": 1243
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 1241,
                                                "end": 1244
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1233,
                                            "end": 1244
                                        },
                                        {
                                            "kind": 201392131,
                                            "text": "hi",
                                            "rawText": "'hi'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 1245,
                                            "end": 1250
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 1233,
                                    "end": 1250
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 1219,
                                "end": 1251
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 1219,
                            "end": 1252
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "shouldBe",
                                    "rawText": "shouldBe",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 1252,
                                    "end": 1265
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 205,
                                            "chainToken": {
                                                "kind": 393240,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 1277,
                                                "end": 1279
                                            },
                                            "member": {
                                                "kind": 134299649,
                                                "text": "masquerader",
                                                "rawText": "masquerader",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 1266,
                                                "end": 1277
                                            },
                                            "chain": {
                                                "kind": 302,
                                                "chain": {
                                                    "kind": 203,
                                                    "chain": null,
                                                    "expression": {
                                                        "kind": 201392131,
                                                        "text": "foo",
                                                        "rawText": "'foo'",
                                                        "flags": 4194400,
                                                        "transformFlags": 0,
                                                        "start": 1280,
                                                        "end": 1285
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 4,
                                                    "start": 1279,
                                                    "end": 1285
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 1279,
                                                "end": 1286
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1266,
                                            "end": 1286
                                        },
                                        {
                                            "kind": 201392130,
                                            "text": 3,
                                            "rawText": "3",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1287,
                                            "end": 1289
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 1266,
                                    "end": 1289
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 1252,
                                "end": 1290
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 1252,
                            "end": 1291
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "shouldBe",
                                    "rawText": "shouldBe",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 1291,
                                    "end": 1304
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 205,
                                            "chainToken": {
                                                "kind": 393240,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 1314,
                                                "end": 1316
                                            },
                                            "member": {
                                                "kind": 134299649,
                                                "text": "undefined",
                                                "rawText": "undefined",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 1305,
                                                "end": 1314
                                            },
                                            "chain": {
                                                "kind": 302,
                                                "chain": {
                                                    "kind": 204,
                                                    "chain": null,
                                                    "typeArguments": null,
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 1317,
                                                        "end": 1317
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 1,
                                                    "start": 1316,
                                                    "end": 1318
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 1316,
                                                "end": 1318
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1305,
                                            "end": 1318
                                        },
                                        {
                                            "kind": 134299649,
                                            "text": "undefined",
                                            "rawText": "undefined",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1319,
                                            "end": 1329
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 1305,
                                    "end": 1329
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 1291,
                                "end": 1330
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 1291,
                            "end": 1331
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "shouldBe",
                                    "rawText": "shouldBe",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 1331,
                                    "end": 1344
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 205,
                                            "chainToken": {
                                                "kind": 393240,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 1349,
                                                "end": 1351
                                            },
                                            "member": {
                                                "kind": 138477575,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 1345,
                                                "end": 1349
                                            },
                                            "chain": {
                                                "kind": 302,
                                                "chain": {
                                                    "kind": 204,
                                                    "chain": null,
                                                    "typeArguments": null,
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 1352,
                                                        "end": 1352
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 1,
                                                    "start": 1351,
                                                    "end": 1353
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 1351,
                                                "end": 1353
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1345,
                                            "end": 1353
                                        },
                                        {
                                            "kind": 134299649,
                                            "text": "undefined",
                                            "rawText": "undefined",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1354,
                                            "end": 1364
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 1345,
                                    "end": 1364
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 1331,
                                "end": 1365
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 1331,
                            "end": 1366
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "shouldBe",
                                    "rawText": "shouldBe",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 1366,
                                    "end": 1379
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 205,
                                            "chainToken": {
                                                "kind": 393240,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 1389,
                                                "end": 1391
                                            },
                                            "member": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 271,
                                                    "asyncKeyword": null,
                                                    "typeParameters": null,
                                                    "arrowPatameterList": {
                                                        "kind": 342,
                                                        "parameters": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 1382,
                                                        "end": 1382
                                                    },
                                                    "returnType": null,
                                                    "arrowToken": {
                                                        "kind": 10,
                                                        "flags": 64,
                                                        "transformFlags": 0,
                                                        "start": 1383,
                                                        "end": 1386
                                                    },
                                                    "contents": {
                                                        "kind": 201392130,
                                                        "text": 3,
                                                        "rawText": "3",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 1386,
                                                        "end": 1388
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 1381,
                                                    "end": 1388
                                                },
                                                "flags": 1380,
                                                "transformFlags": 0,
                                                "start": 32,
                                                "end": 1389
                                            },
                                            "chain": {
                                                "kind": 302,
                                                "chain": {
                                                    "kind": 204,
                                                    "chain": null,
                                                    "typeArguments": null,
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 1392,
                                                        "end": 1392
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 1,
                                                    "start": 1391,
                                                    "end": 1393
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 1391,
                                                "end": 1393
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1380,
                                            "end": 1393
                                        },
                                        {
                                            "kind": 201392130,
                                            "text": 3,
                                            "rawText": "3",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1394,
                                            "end": 1396
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 1380,
                                    "end": 1396
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 1366,
                                "end": 1397
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 1366,
                            "end": 1398
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 305,
                    "end": 1398
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 303,
                "end": 1400
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 270,
            "end": 1400
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "noInline",
                    "rawText": "noInline",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 1400,
                    "end": 1409
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "testBasicSuccessCases",
                            "rawText": "testBasicSuccessCases",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 1410,
                            "end": 1431
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1410,
                    "end": 1431
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 1400,
                "end": 1432
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1400,
            "end": 1433
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 1433,
                "end": 1442
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "testBasicFailureCases",
                "rawText": "testBasicFailureCases",
                "flags": 96,
                "transformFlags": 0,
                "start": 1442,
                "end": 1464
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 1465,
                "end": 1465
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "shouldThrowTypeError",
                                    "rawText": "shouldThrowTypeError",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 1468,
                                    "end": 1493
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 271,
                                            "asyncKeyword": null,
                                            "typeParameters": null,
                                            "arrowPatameterList": {
                                                "kind": 342,
                                                "parameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 1495,
                                                "end": 1495
                                            },
                                            "returnType": null,
                                            "arrowToken": {
                                                "kind": 10,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 1496,
                                                "end": 1499
                                            },
                                            "contents": {
                                                "kind": 205,
                                                "chainToken": {
                                                    "kind": 393240,
                                                    "flags": 64,
                                                    "transformFlags": 0,
                                                    "start": 1504,
                                                    "end": 1506
                                                },
                                                "member": {
                                                    "kind": 24752947,
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 1499,
                                                    "end": 1504
                                                },
                                                "chain": {
                                                    "kind": 302,
                                                    "chain": {
                                                        "kind": 204,
                                                        "chain": null,
                                                        "typeArguments": null,
                                                        "argumentList": {
                                                            "kind": 256,
                                                            "elements": [],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 1507,
                                                            "end": 1507
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 1,
                                                        "start": 1506,
                                                        "end": 1508
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 1506,
                                                    "end": 1508
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 1499,
                                                "end": 1508
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1494,
                                            "end": 1508
                                        },
                                        {
                                            "kind": 201392131,
                                            "text": "true is not a function",
                                            "rawText": "'true is not a function'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 1509,
                                            "end": 1534
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 1494,
                                    "end": 1534
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 1468,
                                "end": 1535
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 1468,
                            "end": 1536
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "shouldThrowTypeError",
                                    "rawText": "shouldThrowTypeError",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 1536,
                                    "end": 1561
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 271,
                                            "asyncKeyword": null,
                                            "typeParameters": null,
                                            "arrowPatameterList": {
                                                "kind": 342,
                                                "parameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 1563,
                                                "end": 1563
                                            },
                                            "returnType": null,
                                            "arrowToken": {
                                                "kind": 10,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 1564,
                                                "end": 1567
                                            },
                                            "contents": {
                                                "kind": 205,
                                                "chainToken": {
                                                    "kind": 393240,
                                                    "flags": 64,
                                                    "transformFlags": 0,
                                                    "start": 1573,
                                                    "end": 1575
                                                },
                                                "member": {
                                                    "kind": 205586437,
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 1567,
                                                    "end": 1573
                                                },
                                                "chain": {
                                                    "kind": 302,
                                                    "chain": {
                                                        "kind": 204,
                                                        "chain": null,
                                                        "typeArguments": null,
                                                        "argumentList": {
                                                            "kind": 256,
                                                            "elements": [],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 1576,
                                                            "end": 1576
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 1,
                                                        "start": 1575,
                                                        "end": 1577
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 1575,
                                                    "end": 1577
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 1567,
                                                "end": 1577
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1562,
                                            "end": 1577
                                        },
                                        {
                                            "kind": 201392131,
                                            "text": "false is not a function",
                                            "rawText": "'false is not a function'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 1578,
                                            "end": 1604
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 1562,
                                    "end": 1604
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 1536,
                                "end": 1605
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 1536,
                            "end": 1606
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "shouldThrowTypeError",
                                    "rawText": "shouldThrowTypeError",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 1606,
                                    "end": 1631
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 271,
                                            "asyncKeyword": null,
                                            "typeParameters": null,
                                            "arrowPatameterList": {
                                                "kind": 342,
                                                "parameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 1633,
                                                "end": 1633
                                            },
                                            "returnType": null,
                                            "arrowToken": {
                                                "kind": 10,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 1634,
                                                "end": 1637
                                            },
                                            "contents": {
                                                "kind": 205,
                                                "chainToken": {
                                                    "kind": 393240,
                                                    "flags": 64,
                                                    "transformFlags": 0,
                                                    "start": 1639,
                                                    "end": 1641
                                                },
                                                "member": {
                                                    "kind": 201392130,
                                                    "text": 0,
                                                    "rawText": "0",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 1637,
                                                    "end": 1639
                                                },
                                                "chain": {
                                                    "kind": 302,
                                                    "chain": {
                                                        "kind": 204,
                                                        "chain": null,
                                                        "typeArguments": null,
                                                        "argumentList": {
                                                            "kind": 256,
                                                            "elements": [],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 1642,
                                                            "end": 1642
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 1,
                                                        "start": 1641,
                                                        "end": 1643
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 1641,
                                                    "end": 1643
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 1637,
                                                "end": 1643
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1632,
                                            "end": 1643
                                        },
                                        {
                                            "kind": 201392131,
                                            "text": "0 is not a function",
                                            "rawText": "'0 is not a function'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 1644,
                                            "end": 1666
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 1632,
                                    "end": 1666
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 1606,
                                "end": 1667
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 1606,
                            "end": 1668
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "shouldThrowTypeError",
                                    "rawText": "shouldThrowTypeError",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 1668,
                                    "end": 1693
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 271,
                                            "asyncKeyword": null,
                                            "typeParameters": null,
                                            "arrowPatameterList": {
                                                "kind": 342,
                                                "parameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 1695,
                                                "end": 1695
                                            },
                                            "returnType": null,
                                            "arrowToken": {
                                                "kind": 10,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 1696,
                                                "end": 1699
                                            },
                                            "contents": {
                                                "kind": 205,
                                                "chainToken": {
                                                    "kind": 393240,
                                                    "flags": 64,
                                                    "transformFlags": 0,
                                                    "start": 1701,
                                                    "end": 1703
                                                },
                                                "member": {
                                                    "kind": 201392130,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 1699,
                                                    "end": 1701
                                                },
                                                "chain": {
                                                    "kind": 302,
                                                    "chain": {
                                                        "kind": 204,
                                                        "chain": null,
                                                        "typeArguments": null,
                                                        "argumentList": {
                                                            "kind": 256,
                                                            "elements": [],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 1704,
                                                            "end": 1704
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 1,
                                                        "start": 1703,
                                                        "end": 1705
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 1703,
                                                    "end": 1705
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 1699,
                                                "end": 1705
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1694,
                                            "end": 1705
                                        },
                                        {
                                            "kind": 201392131,
                                            "text": "1 is not a function",
                                            "rawText": "'1 is not a function'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 1706,
                                            "end": 1728
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 1694,
                                    "end": 1728
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 1668,
                                "end": 1729
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 1668,
                            "end": 1730
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "shouldThrowTypeError",
                                    "rawText": "shouldThrowTypeError",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 1730,
                                    "end": 1755
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 271,
                                            "asyncKeyword": null,
                                            "typeParameters": null,
                                            "arrowPatameterList": {
                                                "kind": 342,
                                                "parameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 1757,
                                                "end": 1757
                                            },
                                            "returnType": null,
                                            "arrowToken": {
                                                "kind": 10,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 1758,
                                                "end": 1761
                                            },
                                            "contents": {
                                                "kind": 205,
                                                "chainToken": {
                                                    "kind": 393240,
                                                    "flags": 64,
                                                    "transformFlags": 0,
                                                    "start": 1764,
                                                    "end": 1766
                                                },
                                                "member": {
                                                    "kind": 201392131,
                                                    "text": "",
                                                    "rawText": "''",
                                                    "flags": 4194400,
                                                    "transformFlags": 0,
                                                    "start": 1761,
                                                    "end": 1764
                                                },
                                                "chain": {
                                                    "kind": 302,
                                                    "chain": {
                                                        "kind": 204,
                                                        "chain": null,
                                                        "typeArguments": null,
                                                        "argumentList": {
                                                            "kind": 256,
                                                            "elements": [],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 1767,
                                                            "end": 1767
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 1,
                                                        "start": 1766,
                                                        "end": 1768
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 1766,
                                                    "end": 1768
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 1761,
                                                "end": 1768
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1756,
                                            "end": 1768
                                        },
                                        {
                                            "kind": 201392131,
                                            "text": "'' is not a function",
                                            "rawText": "'\\'\\' is not a function'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 1769,
                                            "end": 1794
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 1756,
                                    "end": 1794
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 1730,
                                "end": 1795
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 1730,
                            "end": 1796
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "shouldThrowTypeError",
                                    "rawText": "shouldThrowTypeError",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 1796,
                                    "end": 1821
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 271,
                                            "asyncKeyword": null,
                                            "typeParameters": null,
                                            "arrowPatameterList": {
                                                "kind": 342,
                                                "parameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 1823,
                                                "end": 1823
                                            },
                                            "returnType": null,
                                            "arrowToken": {
                                                "kind": 10,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 1824,
                                                "end": 1827
                                            },
                                            "contents": {
                                                "kind": 205,
                                                "chainToken": {
                                                    "kind": 393240,
                                                    "flags": 64,
                                                    "transformFlags": 0,
                                                    "start": 1832,
                                                    "end": 1834
                                                },
                                                "member": {
                                                    "kind": 201392131,
                                                    "text": "hi",
                                                    "rawText": "'hi'",
                                                    "flags": 4194400,
                                                    "transformFlags": 0,
                                                    "start": 1827,
                                                    "end": 1832
                                                },
                                                "chain": {
                                                    "kind": 302,
                                                    "chain": {
                                                        "kind": 204,
                                                        "chain": null,
                                                        "typeArguments": null,
                                                        "argumentList": {
                                                            "kind": 256,
                                                            "elements": [],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 1835,
                                                            "end": 1835
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 1,
                                                        "start": 1834,
                                                        "end": 1836
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 1834,
                                                    "end": 1836
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 1827,
                                                "end": 1836
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1822,
                                            "end": 1836
                                        },
                                        {
                                            "kind": 201392131,
                                            "text": "'hi' is not a function",
                                            "rawText": "'\\'hi\\' is not a function'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 1837,
                                            "end": 1864
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 1822,
                                    "end": 1864
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 1796,
                                "end": 1865
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 1796,
                            "end": 1866
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "shouldThrowTypeError",
                                    "rawText": "shouldThrowTypeError",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 1866,
                                    "end": 1891
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 271,
                                            "asyncKeyword": null,
                                            "typeParameters": null,
                                            "arrowPatameterList": {
                                                "kind": 342,
                                                "parameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 1893,
                                                "end": 1893
                                            },
                                            "returnType": null,
                                            "arrowToken": {
                                                "kind": 10,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 1894,
                                                "end": 1897
                                            },
                                            "contents": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 205,
                                                    "chainToken": {
                                                        "kind": 393240,
                                                        "flags": 64,
                                                        "transformFlags": 0,
                                                        "start": 1901,
                                                        "end": 1903
                                                    },
                                                    "member": {
                                                        "kind": 220,
                                                        "propertyList": {
                                                            "kind": 218,
                                                            "properties": [],
                                                            "trailingComma": false,
                                                            "flags": 16,
                                                            "transformFlags": 0,
                                                            "start": 1900,
                                                            "end": 1900
                                                        },
                                                        "flags": 48,
                                                        "transformFlags": 8,
                                                        "start": 1899,
                                                        "end": 1901
                                                    },
                                                    "chain": {
                                                        "kind": 302,
                                                        "chain": {
                                                            "kind": 204,
                                                            "chain": null,
                                                            "typeArguments": null,
                                                            "argumentList": {
                                                                "kind": 256,
                                                                "elements": [],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 1904,
                                                                "end": 1904
                                                            },
                                                            "flags": 32,
                                                            "transformFlags": 1,
                                                            "start": 1903,
                                                            "end": 1905
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 1903,
                                                        "end": 1905
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 1897,
                                                    "end": 1905
                                                },
                                                "flags": 1897,
                                                "transformFlags": 0,
                                                "start": 34,
                                                "end": 1906
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1892,
                                            "end": 1906
                                        },
                                        {
                                            "kind": 201392131,
                                            "text": "({}) is not a function",
                                            "rawText": "'({}) is not a function'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 1907,
                                            "end": 1932
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 1892,
                                    "end": 1932
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 1866,
                                "end": 1933
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 1866,
                            "end": 1934
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "shouldThrowTypeError",
                                    "rawText": "shouldThrowTypeError",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 1934,
                                    "end": 1959
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 271,
                                            "asyncKeyword": null,
                                            "typeParameters": null,
                                            "arrowPatameterList": {
                                                "kind": 342,
                                                "parameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 1961,
                                                "end": 1961
                                            },
                                            "returnType": null,
                                            "arrowToken": {
                                                "kind": 10,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 1962,
                                                "end": 1965
                                            },
                                            "contents": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 205,
                                                    "chainToken": {
                                                        "kind": 393240,
                                                        "flags": 64,
                                                        "transformFlags": 0,
                                                        "start": 1978,
                                                        "end": 1980
                                                    },
                                                    "member": {
                                                        "kind": 220,
                                                        "propertyList": {
                                                            "kind": 218,
                                                            "properties": [
                                                                {
                                                                    "kind": 219,
                                                                    "asteriskToken": null,
                                                                    "left": {
                                                                        "kind": 134299649,
                                                                        "text": "x",
                                                                        "rawText": "x",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 1968,
                                                                        "end": 1970
                                                                    },
                                                                    "right": {
                                                                        "kind": 201392131,
                                                                        "text": "hi",
                                                                        "rawText": "'hi'",
                                                                        "flags": 4194400,
                                                                        "transformFlags": 0,
                                                                        "start": 1971,
                                                                        "end": 1976
                                                                    },
                                                                    "flags": 32,
                                                                    "transformFlags": 128,
                                                                    "start": 1968,
                                                                    "end": 1976
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 16,
                                                            "transformFlags": 0,
                                                            "start": 1968,
                                                            "end": 1976
                                                        },
                                                        "flags": 48,
                                                        "transformFlags": 8,
                                                        "start": 1967,
                                                        "end": 1978
                                                    },
                                                    "chain": {
                                                        "kind": 302,
                                                        "chain": {
                                                            "kind": 204,
                                                            "chain": null,
                                                            "typeArguments": null,
                                                            "argumentList": {
                                                                "kind": 256,
                                                                "elements": [],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 1981,
                                                                "end": 1981
                                                            },
                                                            "flags": 32,
                                                            "transformFlags": 1,
                                                            "start": 1980,
                                                            "end": 1982
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 1980,
                                                        "end": 1982
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 1965,
                                                    "end": 1982
                                                },
                                                "flags": 1965,
                                                "transformFlags": 0,
                                                "start": 34,
                                                "end": 1983
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1960,
                                            "end": 1983
                                        },
                                        {
                                            "kind": 201392131,
                                            "text": "({ x: 'hi' }) is not a function",
                                            "rawText": "'({ x: \\'hi\\' }) is not a function'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 1984,
                                            "end": 2020
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 1960,
                                    "end": 2020
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 1934,
                                "end": 2021
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 1934,
                            "end": 2022
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "shouldThrowTypeError",
                                    "rawText": "shouldThrowTypeError",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 2022,
                                    "end": 2047
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 271,
                                            "asyncKeyword": null,
                                            "typeParameters": null,
                                            "arrowPatameterList": {
                                                "kind": 342,
                                                "parameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 2049,
                                                "end": 2049
                                            },
                                            "returnType": null,
                                            "arrowToken": {
                                                "kind": 10,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 2050,
                                                "end": 2053
                                            },
                                            "contents": {
                                                "kind": 205,
                                                "chainToken": {
                                                    "kind": 393240,
                                                    "flags": 64,
                                                    "transformFlags": 0,
                                                    "start": 2056,
                                                    "end": 2058
                                                },
                                                "member": {
                                                    "kind": 119,
                                                    "elementList": {
                                                        "kind": 270,
                                                        "elements": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 2055,
                                                        "end": 2055
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 8,
                                                    "start": 2053,
                                                    "end": 2056
                                                },
                                                "chain": {
                                                    "kind": 302,
                                                    "chain": {
                                                        "kind": 204,
                                                        "chain": null,
                                                        "typeArguments": null,
                                                        "argumentList": {
                                                            "kind": 256,
                                                            "elements": [],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 2059,
                                                            "end": 2059
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 1,
                                                        "start": 2058,
                                                        "end": 2060
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 2058,
                                                    "end": 2060
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 2053,
                                                "end": 2060
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 2048,
                                            "end": 2060
                                        },
                                        {
                                            "kind": 201392131,
                                            "text": "[] is not a function",
                                            "rawText": "'[] is not a function'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 2061,
                                            "end": 2084
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 2048,
                                    "end": 2084
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 2022,
                                "end": 2085
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 2022,
                            "end": 2086
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "shouldThrowTypeError",
                                    "rawText": "shouldThrowTypeError",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 2086,
                                    "end": 2111
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 271,
                                            "asyncKeyword": null,
                                            "typeParameters": null,
                                            "arrowPatameterList": {
                                                "kind": 342,
                                                "parameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 2113,
                                                "end": 2113
                                            },
                                            "returnType": null,
                                            "arrowToken": {
                                                "kind": 10,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 2114,
                                                "end": 2117
                                            },
                                            "contents": {
                                                "kind": 205,
                                                "chainToken": {
                                                    "kind": 393240,
                                                    "flags": 64,
                                                    "transformFlags": 0,
                                                    "start": 2124,
                                                    "end": 2126
                                                },
                                                "member": {
                                                    "kind": 119,
                                                    "elementList": {
                                                        "kind": 270,
                                                        "elements": [
                                                            {
                                                                "kind": 201392131,
                                                                "text": "hi",
                                                                "rawText": "'hi'",
                                                                "flags": 4194400,
                                                                "transformFlags": 0,
                                                                "start": 2119,
                                                                "end": 2123
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 4194336,
                                                        "transformFlags": 0,
                                                        "start": 2119,
                                                        "end": 2123
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 8,
                                                    "start": 2117,
                                                    "end": 2124
                                                },
                                                "chain": {
                                                    "kind": 302,
                                                    "chain": {
                                                        "kind": 204,
                                                        "chain": null,
                                                        "typeArguments": null,
                                                        "argumentList": {
                                                            "kind": 256,
                                                            "elements": [],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 2127,
                                                            "end": 2127
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 1,
                                                        "start": 2126,
                                                        "end": 2128
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 2126,
                                                    "end": 2128
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 2117,
                                                "end": 2128
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 2112,
                                            "end": 2128
                                        },
                                        {
                                            "kind": 201392131,
                                            "text": "['hi'] is not a function",
                                            "rawText": "'[\\'hi\\'] is not a function'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 2129,
                                            "end": 2158
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 2112,
                                    "end": 2158
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 2086,
                                "end": 2159
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 2086,
                            "end": 2160
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "shouldThrowTypeError",
                                    "rawText": "shouldThrowTypeError",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 2160,
                                    "end": 2185
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 271,
                                            "asyncKeyword": null,
                                            "typeParameters": null,
                                            "arrowPatameterList": {
                                                "kind": 342,
                                                "parameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 2187,
                                                "end": 2187
                                            },
                                            "returnType": null,
                                            "arrowToken": {
                                                "kind": 10,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 2188,
                                                "end": 2191
                                            },
                                            "contents": {
                                                "kind": 205,
                                                "chainToken": {
                                                    "kind": 393240,
                                                    "flags": 64,
                                                    "transformFlags": 0,
                                                    "start": 2203,
                                                    "end": 2205
                                                },
                                                "member": {
                                                    "kind": 134299649,
                                                    "text": "masquerader",
                                                    "rawText": "masquerader",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 2191,
                                                    "end": 2203
                                                },
                                                "chain": {
                                                    "kind": 302,
                                                    "chain": {
                                                        "kind": 204,
                                                        "chain": null,
                                                        "typeArguments": null,
                                                        "argumentList": {
                                                            "kind": 256,
                                                            "elements": [],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 2206,
                                                            "end": 2206
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 1,
                                                        "start": 2205,
                                                        "end": 2207
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 2205,
                                                    "end": 2207
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 2191,
                                                "end": 2207
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 2186,
                                            "end": 2207
                                        },
                                        {
                                            "kind": 201392131,
                                            "text": "masquerader is not a function",
                                            "rawText": "'masquerader is not a function'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 2208,
                                            "end": 2240
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 2186,
                                    "end": 2240
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 2160,
                                "end": 2241
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 2160,
                            "end": 2242
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 1468,
                    "end": 2242
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 1466,
                "end": 2244
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 1433,
            "end": 2244
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "noInline",
                    "rawText": "noInline",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 2244,
                    "end": 2253
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "testBasicFailureCases",
                            "rawText": "testBasicFailureCases",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 2254,
                            "end": 2275
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 2254,
                    "end": 2275
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 2244,
                "end": 2276
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 2244,
            "end": 2277
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "transformFlags": 0,
                "start": 2277,
                "end": 2281
            },
            "initializer": {
                "kind": 162,
                "lexicalKeyword": {
                    "kind": 41951307,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 2277,
                    "end": 2286
                },
                "binding": {
                    "kind": 151,
                    "bindingList": [
                        {
                            "kind": 190,
                            "binding": {
                                "kind": 134299649,
                                "text": "i",
                                "rawText": "i",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 2286,
                                "end": 2288
                            },
                            "type": null,
                            "initializer": {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 2290,
                                "end": 2292
                            },
                            "flags": 16,
                            "transformFlags": 4224,
                            "start": 2286,
                            "end": 2292
                        }
                    ],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 2286,
                    "end": 2292
                },
                "flags": 33554448,
                "transformFlags": 0,
                "start": 2277,
                "end": 2292
            },
            "condition": {
                "kind": 127,
                "operandToken": {
                    "kind": 196635,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 2307,
                    "end": 2309
                },
                "operand": {
                    "kind": 134299649,
                    "text": "i",
                    "rawText": "i",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 2305,
                    "end": 2307
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 2305,
                "end": 2309
            },
            "incrementor": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "i",
                    "rawText": "i",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 2293,
                    "end": 2295
                },
                "operatorToken": {
                    "kind": 536971330,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 2295,
                    "end": 2297
                },
                "right": {
                    "kind": 201392130,
                    "text": 100000,
                    "rawText": "100000",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 2297,
                    "end": 2304
                },
                "flags": 96,
                "transformFlags": 5120,
                "start": 2293,
                "end": 2304
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 131,
                    "expression": {
                        "kind": 134299649,
                        "text": "testBasicSuccessCases",
                        "rawText": "testBasicSuccessCases",
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 2310,
                        "end": 2336
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 2337,
                        "end": 2337
                    },
                    "flags": 32,
                    "transformFlags": 1,
                    "start": 2310,
                    "end": 2338
                },
                "flags": 16,
                "transformFlags": 4096,
                "start": 2310,
                "end": 2339
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 2277,
            "end": 2339
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "transformFlags": 0,
                "start": 2339,
                "end": 2343
            },
            "initializer": {
                "kind": 162,
                "lexicalKeyword": {
                    "kind": 41951307,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 2339,
                    "end": 2348
                },
                "binding": {
                    "kind": 151,
                    "bindingList": [
                        {
                            "kind": 190,
                            "binding": {
                                "kind": 134299649,
                                "text": "i",
                                "rawText": "i",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 2348,
                                "end": 2350
                            },
                            "type": null,
                            "initializer": {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 2352,
                                "end": 2354
                            },
                            "flags": 16,
                            "transformFlags": 4224,
                            "start": 2348,
                            "end": 2354
                        }
                    ],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 2348,
                    "end": 2354
                },
                "flags": 33554448,
                "transformFlags": 0,
                "start": 2339,
                "end": 2354
            },
            "condition": {
                "kind": 127,
                "operandToken": {
                    "kind": 196635,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 2366,
                    "end": 2368
                },
                "operand": {
                    "kind": 134299649,
                    "text": "i",
                    "rawText": "i",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 2364,
                    "end": 2366
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 2364,
                "end": 2368
            },
            "incrementor": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "i",
                    "rawText": "i",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 2355,
                    "end": 2357
                },
                "operatorToken": {
                    "kind": 536971330,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 2357,
                    "end": 2359
                },
                "right": {
                    "kind": 201392130,
                    "text": 100,
                    "rawText": "100",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 2359,
                    "end": 2363
                },
                "flags": 96,
                "transformFlags": 5120,
                "start": 2355,
                "end": 2363
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 131,
                    "expression": {
                        "kind": 134299649,
                        "text": "testBasicFailureCases",
                        "rawText": "testBasicFailureCases",
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 2369,
                        "end": 2395
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 2396,
                        "end": 2396
                    },
                    "flags": 32,
                    "transformFlags": 1,
                    "start": 2369,
                    "end": 2397
                },
                "flags": 16,
                "transformFlags": 4096,
                "start": 2369,
                "end": 2398
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 2339,
            "end": 2398
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "shouldThrowTypeError",
                    "rawText": "shouldThrowTypeError",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 2398,
                    "end": 2419
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2421,
                                "end": 2421
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 2422,
                                "end": 2425
                            },
                            "contents": {
                                "kind": 121,
                                "expression": {
                                    "kind": 205,
                                    "chainToken": {
                                        "kind": 393240,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 2429,
                                        "end": 2431
                                    },
                                    "member": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "transformFlags": 0,
                                            "start": 2428,
                                            "end": 2428
                                        },
                                        "flags": 48,
                                        "transformFlags": 8,
                                        "start": 2427,
                                        "end": 2429
                                    },
                                    "chain": {
                                        "kind": 204,
                                        "chain": {
                                            "kind": 302,
                                            "chain": {
                                                "kind": 202,
                                                "chain": null,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "i",
                                                    "rawText": "i",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 2431,
                                                    "end": 2432
                                                },
                                                "flags": 32,
                                                "transformFlags": 2,
                                                "start": 2431,
                                                "end": 2432
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 2431,
                                            "end": 2432
                                        },
                                        "typeArguments": null,
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 2433,
                                            "end": 2433
                                        },
                                        "flags": 32,
                                        "transformFlags": 1,
                                        "start": 2432,
                                        "end": 2434
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 2425,
                                    "end": 2434
                                },
                                "flags": 2425,
                                "transformFlags": 0,
                                "start": 34,
                                "end": 2435
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 2420,
                            "end": 2435
                        },
                        {
                            "kind": 201392131,
                            "text": "({})?.i is not a function",
                            "rawText": "'({})?.i is not a function'",
                            "flags": 4194400,
                            "transformFlags": 0,
                            "start": 2436,
                            "end": 2464
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 2420,
                    "end": 2464
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 2398,
                "end": 2465
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 2398,
            "end": 2466
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "shouldBe",
                    "rawText": "shouldBe",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 2466,
                    "end": 2475
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 205,
                            "chainToken": {
                                "kind": 393240,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 2480,
                                "end": 2482
                            },
                            "member": {
                                "kind": 129,
                                "member": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 2477,
                                        "end": 2477
                                    },
                                    "flags": 48,
                                    "transformFlags": 8,
                                    "start": 2476,
                                    "end": 2478
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "i",
                                    "rawText": "i",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 2479,
                                    "end": 2480
                                },
                                "flags": 48,
                                "transformFlags": 2,
                                "start": 2476,
                                "end": 2480
                            },
                            "chain": {
                                "kind": 302,
                                "chain": {
                                    "kind": 204,
                                    "chain": null,
                                    "typeArguments": null,
                                    "argumentList": {
                                        "kind": 256,
                                        "elements": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 2483,
                                        "end": 2483
                                    },
                                    "flags": 32,
                                    "transformFlags": 1,
                                    "start": 2482,
                                    "end": 2484
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2482,
                                "end": 2484
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 2476,
                            "end": 2484
                        },
                        {
                            "kind": 134299649,
                            "text": "undefined",
                            "rawText": "undefined",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 2485,
                            "end": 2495
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 2476,
                    "end": 2495
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 2466,
                "end": 2496
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 2466,
            "end": 2497
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "shouldBe",
                    "rawText": "shouldBe",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 2497,
                    "end": 2506
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 205,
                            "chainToken": {
                                "kind": 393240,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 2512,
                                "end": 2514
                            },
                            "member": {
                                "kind": 205,
                                "chainToken": {
                                    "kind": 393240,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 2509,
                                    "end": 2511
                                },
                                "member": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 2508,
                                        "end": 2508
                                    },
                                    "flags": 48,
                                    "transformFlags": 8,
                                    "start": 2507,
                                    "end": 2509
                                },
                                "chain": {
                                    "kind": 302,
                                    "chain": {
                                        "kind": 202,
                                        "chain": null,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "i",
                                            "rawText": "i",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 2511,
                                            "end": 2512
                                        },
                                        "flags": 32,
                                        "transformFlags": 2,
                                        "start": 2511,
                                        "end": 2512
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 2511,
                                    "end": 2512
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2507,
                                "end": 2512
                            },
                            "chain": {
                                "kind": 302,
                                "chain": {
                                    "kind": 204,
                                    "chain": null,
                                    "typeArguments": null,
                                    "argumentList": {
                                        "kind": 256,
                                        "elements": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 2515,
                                        "end": 2515
                                    },
                                    "flags": 32,
                                    "transformFlags": 1,
                                    "start": 2514,
                                    "end": 2516
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2514,
                                "end": 2516
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 2507,
                            "end": 2516
                        },
                        {
                            "kind": 134299649,
                            "text": "undefined",
                            "rawText": "undefined",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 2517,
                            "end": 2527
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 2507,
                    "end": 2527
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 2497,
                "end": 2528
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 2497,
            "end": 2529
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "shouldThrowTypeError",
                    "rawText": "shouldThrowTypeError",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 2529,
                    "end": 2550
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2552,
                                "end": 2552
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 2553,
                                "end": 2556
                            },
                            "contents": {
                                "kind": 121,
                                "expression": {
                                    "kind": 205,
                                    "chainToken": {
                                        "kind": 393240,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 2560,
                                        "end": 2562
                                    },
                                    "member": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "transformFlags": 0,
                                            "start": 2559,
                                            "end": 2559
                                        },
                                        "flags": 48,
                                        "transformFlags": 8,
                                        "start": 2558,
                                        "end": 2560
                                    },
                                    "chain": {
                                        "kind": 204,
                                        "chain": {
                                            "kind": 302,
                                            "chain": {
                                                "kind": 203,
                                                "chain": null,
                                                "expression": {
                                                    "kind": 201392131,
                                                    "text": "i",
                                                    "rawText": "'i'",
                                                    "flags": 4194400,
                                                    "transformFlags": 0,
                                                    "start": 2563,
                                                    "end": 2566
                                                },
                                                "flags": 32,
                                                "transformFlags": 4,
                                                "start": 2562,
                                                "end": 2566
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 2562,
                                            "end": 2567
                                        },
                                        "typeArguments": null,
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 2568,
                                            "end": 2568
                                        },
                                        "flags": 32,
                                        "transformFlags": 1,
                                        "start": 2567,
                                        "end": 2569
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 2556,
                                    "end": 2569
                                },
                                "flags": 2556,
                                "transformFlags": 0,
                                "start": 34,
                                "end": 2570
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 2551,
                            "end": 2570
                        },
                        {
                            "kind": 201392131,
                            "text": "({})?.['i'] is not a function",
                            "rawText": "'({})?.[\\'i\\'] is not a function'",
                            "flags": 4194400,
                            "transformFlags": 0,
                            "start": 2571,
                            "end": 2605
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 2551,
                    "end": 2605
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 2529,
                "end": 2606
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 2529,
            "end": 2607
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "shouldBe",
                    "rawText": "shouldBe",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 2607,
                    "end": 2616
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 205,
                            "chainToken": {
                                "kind": 393240,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 2624,
                                "end": 2626
                            },
                            "member": {
                                "kind": 130,
                                "member": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 2618,
                                        "end": 2618
                                    },
                                    "flags": 48,
                                    "transformFlags": 8,
                                    "start": 2617,
                                    "end": 2619
                                },
                                "expression": {
                                    "kind": 201392131,
                                    "text": "i",
                                    "rawText": "'i'",
                                    "flags": 4194400,
                                    "transformFlags": 0,
                                    "start": 2620,
                                    "end": 2623
                                },
                                "flags": 32,
                                "transformFlags": 4,
                                "start": 2617,
                                "end": 2624
                            },
                            "chain": {
                                "kind": 302,
                                "chain": {
                                    "kind": 204,
                                    "chain": null,
                                    "typeArguments": null,
                                    "argumentList": {
                                        "kind": 256,
                                        "elements": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 2627,
                                        "end": 2627
                                    },
                                    "flags": 32,
                                    "transformFlags": 1,
                                    "start": 2626,
                                    "end": 2628
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2626,
                                "end": 2628
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 2617,
                            "end": 2628
                        },
                        {
                            "kind": 134299649,
                            "text": "undefined",
                            "rawText": "undefined",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 2629,
                            "end": 2639
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 2617,
                    "end": 2639
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 2607,
                "end": 2640
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 2607,
            "end": 2641
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "shouldBe",
                    "rawText": "shouldBe",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 2641,
                    "end": 2650
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 205,
                            "chainToken": {
                                "kind": 393240,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 2660,
                                "end": 2662
                            },
                            "member": {
                                "kind": 205,
                                "chainToken": {
                                    "kind": 393240,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 2653,
                                    "end": 2655
                                },
                                "member": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 2652,
                                        "end": 2652
                                    },
                                    "flags": 48,
                                    "transformFlags": 8,
                                    "start": 2651,
                                    "end": 2653
                                },
                                "chain": {
                                    "kind": 302,
                                    "chain": {
                                        "kind": 203,
                                        "chain": null,
                                        "expression": {
                                            "kind": 201392131,
                                            "text": "i",
                                            "rawText": "'i'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 2656,
                                            "end": 2659
                                        },
                                        "flags": 32,
                                        "transformFlags": 4,
                                        "start": 2655,
                                        "end": 2659
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 2655,
                                    "end": 2660
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2651,
                                "end": 2660
                            },
                            "chain": {
                                "kind": 302,
                                "chain": {
                                    "kind": 204,
                                    "chain": null,
                                    "typeArguments": null,
                                    "argumentList": {
                                        "kind": 256,
                                        "elements": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 2663,
                                        "end": 2663
                                    },
                                    "flags": 32,
                                    "transformFlags": 1,
                                    "start": 2662,
                                    "end": 2664
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2662,
                                "end": 2664
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 2651,
                            "end": 2664
                        },
                        {
                            "kind": 134299649,
                            "text": "undefined",
                            "rawText": "undefined",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 2665,
                            "end": 2675
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 2651,
                    "end": 2675
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 2641,
                "end": 2676
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 2641,
            "end": 2677
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "shouldThrowTypeError",
                    "rawText": "shouldThrowTypeError",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 2677,
                    "end": 2698
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2700,
                                "end": 2700
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 2701,
                                "end": 2704
                            },
                            "contents": {
                                "kind": 121,
                                "expression": {
                                    "kind": 205,
                                    "chainToken": {
                                        "kind": 393240,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 2708,
                                        "end": 2710
                                    },
                                    "member": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "transformFlags": 0,
                                            "start": 2707,
                                            "end": 2707
                                        },
                                        "flags": 48,
                                        "transformFlags": 8,
                                        "start": 2706,
                                        "end": 2708
                                    },
                                    "chain": {
                                        "kind": 203,
                                        "chain": {
                                            "kind": 302,
                                            "chain": {
                                                "kind": 202,
                                                "chain": null,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 2710,
                                                    "end": 2711
                                                },
                                                "flags": 32,
                                                "transformFlags": 2,
                                                "start": 2710,
                                                "end": 2711
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 2710,
                                            "end": 2711
                                        },
                                        "expression": {
                                            "kind": 201392131,
                                            "text": "b",
                                            "rawText": "'b'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 2712,
                                            "end": 2715
                                        },
                                        "flags": 32,
                                        "transformFlags": 4,
                                        "start": 2711,
                                        "end": 2715
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 2704,
                                    "end": 2716
                                },
                                "flags": 2704,
                                "transformFlags": 0,
                                "start": 34,
                                "end": 2717
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 2699,
                            "end": 2717
                        },
                        {
                            "kind": 201392131,
                            "text": "undefined is not an object",
                            "rawText": "'undefined is not an object'",
                            "flags": 4194400,
                            "transformFlags": 0,
                            "start": 2718,
                            "end": 2747
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 2699,
                    "end": 2747
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 2677,
                "end": 2748
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 2677,
            "end": 2749
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "shouldBe",
                    "rawText": "shouldBe",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 2749,
                    "end": 2758
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 205,
                            "chainToken": {
                                "kind": 393240,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 2764,
                                "end": 2766
                            },
                            "member": {
                                "kind": 205,
                                "chainToken": {
                                    "kind": 393240,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 2761,
                                    "end": 2763
                                },
                                "member": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 2760,
                                        "end": 2760
                                    },
                                    "flags": 48,
                                    "transformFlags": 8,
                                    "start": 2759,
                                    "end": 2761
                                },
                                "chain": {
                                    "kind": 302,
                                    "chain": {
                                        "kind": 202,
                                        "chain": null,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 2763,
                                            "end": 2764
                                        },
                                        "flags": 32,
                                        "transformFlags": 2,
                                        "start": 2763,
                                        "end": 2764
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 2763,
                                    "end": 2764
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2759,
                                "end": 2764
                            },
                            "chain": {
                                "kind": 302,
                                "chain": {
                                    "kind": 203,
                                    "chain": null,
                                    "expression": {
                                        "kind": 201392131,
                                        "text": "b",
                                        "rawText": "'b'",
                                        "flags": 4194400,
                                        "transformFlags": 0,
                                        "start": 2767,
                                        "end": 2770
                                    },
                                    "flags": 32,
                                    "transformFlags": 4,
                                    "start": 2766,
                                    "end": 2770
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2766,
                                "end": 2771
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 2759,
                            "end": 2771
                        },
                        {
                            "kind": 134299649,
                            "text": "undefined",
                            "rawText": "undefined",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 2772,
                            "end": 2782
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 2759,
                    "end": 2782
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 2749,
                "end": 2783
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 2749,
            "end": 2784
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "shouldBe",
                    "rawText": "shouldBe",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 2784,
                    "end": 2793
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 129,
                            "member": {
                                "kind": 131,
                                "expression": {
                                    "kind": 205,
                                    "chainToken": {
                                        "kind": 393240,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 2798,
                                        "end": 2800
                                    },
                                    "member": {
                                        "kind": 138477575,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 2794,
                                        "end": 2798
                                    },
                                    "chain": {
                                        "kind": 203,
                                        "chain": {
                                            "kind": 302,
                                            "chain": {
                                                "kind": 202,
                                                "chain": null,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 2800,
                                                    "end": 2801
                                                },
                                                "flags": 32,
                                                "transformFlags": 2,
                                                "start": 2800,
                                                "end": 2801
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 2800,
                                            "end": 2801
                                        },
                                        "expression": {
                                            "kind": 201392131,
                                            "text": "b",
                                            "rawText": "'b'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 2802,
                                            "end": 2805
                                        },
                                        "flags": 32,
                                        "transformFlags": 4,
                                        "start": 2801,
                                        "end": 2805
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 2794,
                                    "end": 2806
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 2807,
                                    "end": 2807
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 2794,
                                "end": 2808
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 2809,
                                "end": 2810
                            },
                            "flags": 32,
                            "transformFlags": 2,
                            "start": 2794,
                            "end": 2810
                        },
                        {
                            "kind": 134299649,
                            "text": "undefined",
                            "rawText": "undefined",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 2811,
                            "end": 2821
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 2794,
                    "end": 2821
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 2784,
                "end": 2822
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 2784,
            "end": 2823
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "shouldThrowTypeError",
                    "rawText": "shouldThrowTypeError",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 2823,
                    "end": 2844
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2846,
                                "end": 2846
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 2847,
                                "end": 2850
                            },
                            "contents": {
                                "kind": 121,
                                "expression": {
                                    "kind": 205,
                                    "chainToken": {
                                        "kind": 393240,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 2854,
                                        "end": 2856
                                    },
                                    "member": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "transformFlags": 0,
                                            "start": 2853,
                                            "end": 2853
                                        },
                                        "flags": 48,
                                        "transformFlags": 8,
                                        "start": 2852,
                                        "end": 2854
                                    },
                                    "chain": {
                                        "kind": 202,
                                        "chain": {
                                            "kind": 302,
                                            "chain": {
                                                "kind": 203,
                                                "chain": null,
                                                "expression": {
                                                    "kind": 201392131,
                                                    "text": "a",
                                                    "rawText": "'a'",
                                                    "flags": 4194400,
                                                    "transformFlags": 0,
                                                    "start": 2857,
                                                    "end": 2860
                                                },
                                                "flags": 32,
                                                "transformFlags": 4,
                                                "start": 2856,
                                                "end": 2860
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 2856,
                                            "end": 2861
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 2862,
                                            "end": 2863
                                        },
                                        "flags": 32,
                                        "transformFlags": 2,
                                        "start": 2861,
                                        "end": 2863
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 2850,
                                    "end": 2863
                                },
                                "flags": 2850,
                                "transformFlags": 0,
                                "start": 34,
                                "end": 2864
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 2845,
                            "end": 2864
                        },
                        {
                            "kind": 201392131,
                            "text": "undefined is not an object",
                            "rawText": "'undefined is not an object'",
                            "flags": 4194400,
                            "transformFlags": 0,
                            "start": 2865,
                            "end": 2894
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 2845,
                    "end": 2894
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 2823,
                "end": 2895
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 2823,
            "end": 2896
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "shouldBe",
                    "rawText": "shouldBe",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 2896,
                    "end": 2905
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 205,
                            "chainToken": {
                                "kind": 393240,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 2915,
                                "end": 2917
                            },
                            "member": {
                                "kind": 205,
                                "chainToken": {
                                    "kind": 393240,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 2908,
                                    "end": 2910
                                },
                                "member": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 2907,
                                        "end": 2907
                                    },
                                    "flags": 48,
                                    "transformFlags": 8,
                                    "start": 2906,
                                    "end": 2908
                                },
                                "chain": {
                                    "kind": 302,
                                    "chain": {
                                        "kind": 203,
                                        "chain": null,
                                        "expression": {
                                            "kind": 201392131,
                                            "text": "a",
                                            "rawText": "'a'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 2911,
                                            "end": 2914
                                        },
                                        "flags": 32,
                                        "transformFlags": 4,
                                        "start": 2910,
                                        "end": 2914
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 2910,
                                    "end": 2915
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2906,
                                "end": 2915
                            },
                            "chain": {
                                "kind": 302,
                                "chain": {
                                    "kind": 202,
                                    "chain": null,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 2917,
                                        "end": 2918
                                    },
                                    "flags": 32,
                                    "transformFlags": 2,
                                    "start": 2917,
                                    "end": 2918
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2917,
                                "end": 2918
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 2906,
                            "end": 2918
                        },
                        {
                            "kind": 134299649,
                            "text": "undefined",
                            "rawText": "undefined",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 2919,
                            "end": 2929
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 2906,
                    "end": 2929
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 2896,
                "end": 2930
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 2896,
            "end": 2931
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "shouldBe",
                    "rawText": "shouldBe",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 2931,
                    "end": 2940
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 130,
                            "member": {
                                "kind": 131,
                                "expression": {
                                    "kind": 205,
                                    "chainToken": {
                                        "kind": 393240,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 2945,
                                        "end": 2947
                                    },
                                    "member": {
                                        "kind": 138477575,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 2941,
                                        "end": 2945
                                    },
                                    "chain": {
                                        "kind": 202,
                                        "chain": {
                                            "kind": 302,
                                            "chain": {
                                                "kind": 203,
                                                "chain": null,
                                                "expression": {
                                                    "kind": 201392131,
                                                    "text": "a",
                                                    "rawText": "'a'",
                                                    "flags": 4194400,
                                                    "transformFlags": 0,
                                                    "start": 2948,
                                                    "end": 2951
                                                },
                                                "flags": 32,
                                                "transformFlags": 4,
                                                "start": 2947,
                                                "end": 2951
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 2947,
                                            "end": 2952
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 2953,
                                            "end": 2954
                                        },
                                        "flags": 32,
                                        "transformFlags": 2,
                                        "start": 2952,
                                        "end": 2954
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 2941,
                                    "end": 2954
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 2955,
                                    "end": 2955
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 2941,
                                "end": 2956
                            },
                            "expression": {
                                "kind": 201392131,
                                "text": "c",
                                "rawText": "'c'",
                                "flags": 4194400,
                                "transformFlags": 0,
                                "start": 2957,
                                "end": 2960
                            },
                            "flags": 32,
                            "transformFlags": 4,
                            "start": 2941,
                            "end": 2961
                        },
                        {
                            "kind": 134299649,
                            "text": "undefined",
                            "rawText": "undefined",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 2962,
                            "end": 2972
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 2941,
                    "end": 2972
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 2931,
                "end": 2973
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 2931,
            "end": 2974
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "shouldThrowTypeError",
                    "rawText": "shouldThrowTypeError",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 2974,
                    "end": 2995
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2997,
                                "end": 2997
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 2998,
                                "end": 3001
                            },
                            "contents": {
                                "kind": 205,
                                "chainToken": {
                                    "kind": 393240,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 3013,
                                    "end": 3015
                                },
                                "member": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 271,
                                        "asyncKeyword": null,
                                        "typeParameters": null,
                                        "arrowPatameterList": {
                                            "kind": 342,
                                            "parameters": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 3004,
                                            "end": 3004
                                        },
                                        "returnType": null,
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 3005,
                                            "end": 3008
                                        },
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 33,
                                                "transformFlags": 0,
                                                "start": 3010,
                                                "end": 3010
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 3008,
                                            "end": 3012
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 3003,
                                        "end": 3012
                                    },
                                    "flags": 3001,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 3013
                                },
                                "chain": {
                                    "kind": 204,
                                    "chain": {
                                        "kind": 302,
                                        "chain": {
                                            "kind": 204,
                                            "chain": null,
                                            "typeArguments": null,
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 3016,
                                                "end": 3016
                                            },
                                            "flags": 32,
                                            "transformFlags": 1,
                                            "start": 3015,
                                            "end": 3017
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 3015,
                                        "end": 3017
                                    },
                                    "typeArguments": null,
                                    "argumentList": {
                                        "kind": 256,
                                        "elements": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 3018,
                                        "end": 3018
                                    },
                                    "flags": 32,
                                    "transformFlags": 1,
                                    "start": 3017,
                                    "end": 3019
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 3001,
                                "end": 3019
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 2996,
                            "end": 3019
                        },
                        {
                            "kind": 201392131,
                            "text": "(() => {})?.() is not a function",
                            "rawText": "'(() => {})?.() is not a function'",
                            "flags": 4194400,
                            "transformFlags": 0,
                            "start": 3020,
                            "end": 3055
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 2996,
                    "end": 3055
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 2974,
                "end": 3056
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 2974,
            "end": 3057
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "shouldBe",
                    "rawText": "shouldBe",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 3057,
                    "end": 3066
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 205,
                            "chainToken": {
                                "kind": 393240,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 3082,
                                "end": 3084
                            },
                            "member": {
                                "kind": 205,
                                "chainToken": {
                                    "kind": 393240,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 3078,
                                    "end": 3080
                                },
                                "member": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 271,
                                        "asyncKeyword": null,
                                        "typeParameters": null,
                                        "arrowPatameterList": {
                                            "kind": 342,
                                            "parameters": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 3069,
                                            "end": 3069
                                        },
                                        "returnType": null,
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 3070,
                                            "end": 3073
                                        },
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 33,
                                                "transformFlags": 0,
                                                "start": 3075,
                                                "end": 3075
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 3073,
                                            "end": 3077
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 3068,
                                        "end": 3077
                                    },
                                    "flags": 3067,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 3078
                                },
                                "chain": {
                                    "kind": 302,
                                    "chain": {
                                        "kind": 204,
                                        "chain": null,
                                        "typeArguments": null,
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 3081,
                                            "end": 3081
                                        },
                                        "flags": 32,
                                        "transformFlags": 1,
                                        "start": 3080,
                                        "end": 3082
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 3080,
                                    "end": 3082
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 3067,
                                "end": 3082
                            },
                            "chain": {
                                "kind": 302,
                                "chain": {
                                    "kind": 204,
                                    "chain": null,
                                    "typeArguments": null,
                                    "argumentList": {
                                        "kind": 256,
                                        "elements": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 3085,
                                        "end": 3085
                                    },
                                    "flags": 32,
                                    "transformFlags": 1,
                                    "start": 3084,
                                    "end": 3086
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 3084,
                                "end": 3086
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 3067,
                            "end": 3086
                        },
                        {
                            "kind": 134299649,
                            "text": "undefined",
                            "rawText": "undefined",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3087,
                            "end": 3097
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 3067,
                    "end": 3097
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 3057,
                "end": 3098
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 3057,
            "end": 3099
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "shouldBe",
                    "rawText": "shouldBe",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 3099,
                    "end": 3108
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 130,
                            "member": {
                                "kind": 129,
                                "member": {
                                    "kind": 205,
                                    "chainToken": {
                                        "kind": 393240,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 3113,
                                        "end": 3115
                                    },
                                    "member": {
                                        "kind": 138477575,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 3109,
                                        "end": 3113
                                    },
                                    "chain": {
                                        "kind": 204,
                                        "chain": {
                                            "kind": 302,
                                            "chain": {
                                                "kind": 204,
                                                "chain": null,
                                                "typeArguments": null,
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 3116,
                                                    "end": 3116
                                                },
                                                "flags": 32,
                                                "transformFlags": 1,
                                                "start": 3115,
                                                "end": 3117
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 3115,
                                            "end": 3117
                                        },
                                        "typeArguments": null,
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 3118,
                                            "end": 3118
                                        },
                                        "flags": 32,
                                        "transformFlags": 1,
                                        "start": 3117,
                                        "end": 3119
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 3109,
                                    "end": 3119
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 3120,
                                    "end": 3121
                                },
                                "flags": 32,
                                "transformFlags": 2,
                                "start": 3109,
                                "end": 3121
                            },
                            "expression": {
                                "kind": 201392131,
                                "text": "b",
                                "rawText": "'b'",
                                "flags": 4194400,
                                "transformFlags": 0,
                                "start": 3122,
                                "end": 3125
                            },
                            "flags": 32,
                            "transformFlags": 4,
                            "start": 3109,
                            "end": 3126
                        },
                        {
                            "kind": 134299649,
                            "text": "undefined",
                            "rawText": "undefined",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3127,
                            "end": 3137
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 3109,
                    "end": 3137
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 3099,
                "end": 3138
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 3099,
            "end": 3139
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 3139,
                "end": 3145
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "o0",
                            "rawText": "o0",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3145,
                            "end": 3148
                        },
                        "type": null,
                        "initializer": {
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
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 3152,
                                            "end": 3158
                                        },
                                        "right": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 351,
                                                        "asyncKeyword": null,
                                                        "asteriskToken": null,
                                                        "getKeyword": null,
                                                        "setKeyword": null,
                                                        "method": {
                                                            "kind": 209,
                                                            "name": {
                                                                "kind": 134299649,
                                                                "text": "b",
                                                                "rawText": "b",
                                                                "flags": 97,
                                                                "transformFlags": 0,
                                                                "start": 3161,
                                                                "end": 3171
                                                            },
                                                            "typeParameters": null,
                                                            "formalParameterList": {
                                                                "kind": 214,
                                                                "formalParameters": [],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 3172,
                                                                "end": 3173
                                                            },
                                                            "returnType": null,
                                                            "contents": {
                                                                "kind": 216,
                                                                "functionStatementList": {
                                                                    "kind": 217,
                                                                    "directives": [],
                                                                    "statements": [
                                                                        {
                                                                            "kind": 161,
                                                                            "returnKeyword": {
                                                                                "kind": 37757022,
                                                                                "flags": 81,
                                                                                "transformFlags": 0,
                                                                                "start": 3175,
                                                                                "end": 3194
                                                                            },
                                                                            "expression": {
                                                                                "kind": 131,
                                                                                "expression": {
                                                                                    "kind": 129,
                                                                                    "member": {
                                                                                        "kind": 129,
                                                                                        "member": {
                                                                                            "kind": 4276321,
                                                                                            "flags": 96,
                                                                                            "transformFlags": 0,
                                                                                            "start": 3194,
                                                                                            "end": 3199
                                                                                        },
                                                                                        "expression": {
                                                                                            "kind": 134299649,
                                                                                            "text": "_b",
                                                                                            "rawText": "_b",
                                                                                            "flags": 96,
                                                                                            "transformFlags": 0,
                                                                                            "start": 3200,
                                                                                            "end": 3202
                                                                                        },
                                                                                        "flags": 96,
                                                                                        "transformFlags": 2,
                                                                                        "start": 3194,
                                                                                        "end": 3202
                                                                                    },
                                                                                    "expression": {
                                                                                        "kind": 134299649,
                                                                                        "text": "bind",
                                                                                        "rawText": "bind",
                                                                                        "flags": 96,
                                                                                        "transformFlags": 0,
                                                                                        "start": 3203,
                                                                                        "end": 3207
                                                                                    },
                                                                                    "flags": 96,
                                                                                    "transformFlags": 2,
                                                                                    "start": 3194,
                                                                                    "end": 3207
                                                                                },
                                                                                "argumentList": {
                                                                                    "kind": 256,
                                                                                    "elements": [
                                                                                        {
                                                                                            "kind": 4276321,
                                                                                            "flags": 96,
                                                                                            "transformFlags": 0,
                                                                                            "start": 3208,
                                                                                            "end": 3212
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "flags": 32,
                                                                                    "transformFlags": 0,
                                                                                    "start": 3208,
                                                                                    "end": 3212
                                                                                },
                                                                                "flags": 32,
                                                                                "transformFlags": 1,
                                                                                "start": 3194,
                                                                                "end": 3213
                                                                            },
                                                                            "flags": 81,
                                                                            "transformFlags": 256,
                                                                            "start": 3175,
                                                                            "end": 3214
                                                                        }
                                                                    ],
                                                                    "flags": 33,
                                                                    "transformFlags": 0,
                                                                    "start": 3175,
                                                                    "end": 3214
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 3173,
                                                                "end": 3224
                                                            },
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 3171,
                                                            "end": 3224
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 3161,
                                                        "end": 3224
                                                    },
                                                    {
                                                        "kind": 351,
                                                        "asyncKeyword": null,
                                                        "asteriskToken": null,
                                                        "getKeyword": null,
                                                        "setKeyword": null,
                                                        "method": {
                                                            "kind": 209,
                                                            "name": {
                                                                "kind": 134299649,
                                                                "text": "_b",
                                                                "rawText": "_b",
                                                                "flags": 97,
                                                                "transformFlags": 0,
                                                                "start": 3225,
                                                                "end": 3236
                                                            },
                                                            "typeParameters": null,
                                                            "formalParameterList": {
                                                                "kind": 214,
                                                                "formalParameters": [],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 3237,
                                                                "end": 3238
                                                            },
                                                            "returnType": null,
                                                            "contents": {
                                                                "kind": 216,
                                                                "functionStatementList": {
                                                                    "kind": 217,
                                                                    "directives": [],
                                                                    "statements": [
                                                                        {
                                                                            "kind": 161,
                                                                            "returnKeyword": {
                                                                                "kind": 37757022,
                                                                                "flags": 81,
                                                                                "transformFlags": 0,
                                                                                "start": 3240,
                                                                                "end": 3259
                                                                            },
                                                                            "expression": {
                                                                                "kind": 129,
                                                                                "member": {
                                                                                    "kind": 4276321,
                                                                                    "flags": 96,
                                                                                    "transformFlags": 0,
                                                                                    "start": 3259,
                                                                                    "end": 3264
                                                                                },
                                                                                "expression": {
                                                                                    "kind": 134299649,
                                                                                    "text": "__b",
                                                                                    "rawText": "__b",
                                                                                    "flags": 96,
                                                                                    "transformFlags": 0,
                                                                                    "start": 3265,
                                                                                    "end": 3268
                                                                                },
                                                                                "flags": 96,
                                                                                "transformFlags": 2,
                                                                                "start": 3259,
                                                                                "end": 3268
                                                                            },
                                                                            "flags": 81,
                                                                            "transformFlags": 256,
                                                                            "start": 3240,
                                                                            "end": 3269
                                                                        }
                                                                    ],
                                                                    "flags": 33,
                                                                    "transformFlags": 0,
                                                                    "start": 3240,
                                                                    "end": 3269
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 3238,
                                                                "end": 3279
                                                            },
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 3236,
                                                            "end": 3279
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 3225,
                                                        "end": 3279
                                                    },
                                                    {
                                                        "kind": 219,
                                                        "asteriskToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "__b",
                                                            "rawText": "__b",
                                                            "flags": 97,
                                                            "transformFlags": 0,
                                                            "start": 3280,
                                                            "end": 3292
                                                        },
                                                        "right": {
                                                            "kind": 220,
                                                            "propertyList": {
                                                                "kind": 218,
                                                                "properties": [
                                                                    {
                                                                        "kind": 219,
                                                                        "asteriskToken": null,
                                                                        "left": {
                                                                            "kind": 134299649,
                                                                            "text": "c",
                                                                            "rawText": "c",
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 3295,
                                                                            "end": 3297
                                                                        },
                                                                        "right": {
                                                                            "kind": 201392130,
                                                                            "text": 42,
                                                                            "rawText": "42",
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 3298,
                                                                            "end": 3301
                                                                        },
                                                                        "flags": 32,
                                                                        "transformFlags": 128,
                                                                        "start": 3295,
                                                                        "end": 3301
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 16,
                                                                "transformFlags": 0,
                                                                "start": 3295,
                                                                "end": 3301
                                                            },
                                                            "flags": 48,
                                                            "transformFlags": 8,
                                                            "start": 3293,
                                                            "end": 3303
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 128,
                                                        "start": 3280,
                                                        "end": 3303
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 17,
                                                "transformFlags": 0,
                                                "start": 3161,
                                                "end": 3303
                                            },
                                            "flags": 49,
                                            "transformFlags": 8,
                                            "start": 3159,
                                            "end": 3309
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 3152,
                                        "end": 3309
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 17,
                                "transformFlags": 0,
                                "start": 3152,
                                "end": 3309
                            },
                            "flags": 49,
                            "transformFlags": 8,
                            "start": 3150,
                            "end": 3311
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3145,
                        "end": 3311
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 3145,
                "end": 3311
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 3139,
            "end": 3312
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "shouldBe",
                    "rawText": "shouldBe",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 3312,
                    "end": 3321
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 205,
                            "chainToken": {
                                "kind": 393240,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 3342,
                                "end": 3344
                            },
                            "member": {
                                "kind": 205,
                                "chainToken": {
                                    "kind": 393240,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 3338,
                                    "end": 3340
                                },
                                "member": {
                                    "kind": 205,
                                    "chainToken": {
                                        "kind": 393240,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 3334,
                                        "end": 3336
                                    },
                                    "member": {
                                        "kind": 205,
                                        "chainToken": {
                                            "kind": 393240,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 3327,
                                            "end": 3329
                                        },
                                        "member": {
                                            "kind": 205,
                                            "chainToken": {
                                                "kind": 393240,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 3324,
                                                "end": 3326
                                            },
                                            "member": {
                                                "kind": 134299649,
                                                "text": "o0",
                                                "rawText": "o0",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 3322,
                                                "end": 3324
                                            },
                                            "chain": {
                                                "kind": 302,
                                                "chain": {
                                                    "kind": 202,
                                                    "chain": null,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 3326,
                                                        "end": 3327
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 2,
                                                    "start": 3326,
                                                    "end": 3327
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 3326,
                                                "end": 3327
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 3322,
                                            "end": 3327
                                        },
                                        "chain": {
                                            "kind": 302,
                                            "chain": {
                                                "kind": 203,
                                                "chain": null,
                                                "expression": {
                                                    "kind": 201392131,
                                                    "text": "b",
                                                    "rawText": "'b'",
                                                    "flags": 4194400,
                                                    "transformFlags": 0,
                                                    "start": 3330,
                                                    "end": 3333
                                                },
                                                "flags": 32,
                                                "transformFlags": 4,
                                                "start": 3329,
                                                "end": 3333
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 3329,
                                            "end": 3334
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 3322,
                                        "end": 3334
                                    },
                                    "chain": {
                                        "kind": 302,
                                        "chain": {
                                            "kind": 204,
                                            "chain": null,
                                            "typeArguments": null,
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 3337,
                                                "end": 3337
                                            },
                                            "flags": 32,
                                            "transformFlags": 1,
                                            "start": 3336,
                                            "end": 3338
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 3336,
                                        "end": 3338
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 3322,
                                    "end": 3338
                                },
                                "chain": {
                                    "kind": 302,
                                    "chain": {
                                        "kind": 204,
                                        "chain": null,
                                        "typeArguments": null,
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 3341,
                                            "end": 3341
                                        },
                                        "flags": 32,
                                        "transformFlags": 1,
                                        "start": 3340,
                                        "end": 3342
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 3340,
                                    "end": 3342
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 3322,
                                "end": 3342
                            },
                            "chain": {
                                "kind": 302,
                                "chain": {
                                    "kind": 202,
                                    "chain": null,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 3344,
                                        "end": 3345
                                    },
                                    "flags": 32,
                                    "transformFlags": 2,
                                    "start": 3344,
                                    "end": 3345
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 3344,
                                "end": 3345
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 3322,
                            "end": 3345
                        },
                        {
                            "kind": 201392130,
                            "text": 42,
                            "rawText": "42",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3346,
                            "end": 3349
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 3322,
                    "end": 3349
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 3312,
                "end": 3350
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 3312,
            "end": 3351
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "shouldBe",
                    "rawText": "shouldBe",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 3351,
                    "end": 3360
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 205,
                            "chainToken": {
                                "kind": 393240,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 3381,
                                "end": 3383
                            },
                            "member": {
                                "kind": 205,
                                "chainToken": {
                                    "kind": 393240,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 3377,
                                    "end": 3379
                                },
                                "member": {
                                    "kind": 205,
                                    "chainToken": {
                                        "kind": 393240,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 3373,
                                        "end": 3375
                                    },
                                    "member": {
                                        "kind": 205,
                                        "chainToken": {
                                            "kind": 393240,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 3366,
                                            "end": 3368
                                        },
                                        "member": {
                                            "kind": 205,
                                            "chainToken": {
                                                "kind": 393240,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 3363,
                                                "end": 3365
                                            },
                                            "member": {
                                                "kind": 134299649,
                                                "text": "o0",
                                                "rawText": "o0",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 3361,
                                                "end": 3363
                                            },
                                            "chain": {
                                                "kind": 302,
                                                "chain": {
                                                    "kind": 202,
                                                    "chain": null,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "i",
                                                        "rawText": "i",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 3365,
                                                        "end": 3366
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 2,
                                                    "start": 3365,
                                                    "end": 3366
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 3365,
                                                "end": 3366
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 3361,
                                            "end": 3366
                                        },
                                        "chain": {
                                            "kind": 302,
                                            "chain": {
                                                "kind": 203,
                                                "chain": null,
                                                "expression": {
                                                    "kind": 201392131,
                                                    "text": "j",
                                                    "rawText": "'j'",
                                                    "flags": 4194400,
                                                    "transformFlags": 0,
                                                    "start": 3369,
                                                    "end": 3372
                                                },
                                                "flags": 32,
                                                "transformFlags": 4,
                                                "start": 3368,
                                                "end": 3372
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 3368,
                                            "end": 3373
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 3361,
                                        "end": 3373
                                    },
                                    "chain": {
                                        "kind": 302,
                                        "chain": {
                                            "kind": 204,
                                            "chain": null,
                                            "typeArguments": null,
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 3376,
                                                "end": 3376
                                            },
                                            "flags": 32,
                                            "transformFlags": 1,
                                            "start": 3375,
                                            "end": 3377
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 3375,
                                        "end": 3377
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 3361,
                                    "end": 3377
                                },
                                "chain": {
                                    "kind": 302,
                                    "chain": {
                                        "kind": 204,
                                        "chain": null,
                                        "typeArguments": null,
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 3380,
                                            "end": 3380
                                        },
                                        "flags": 32,
                                        "transformFlags": 1,
                                        "start": 3379,
                                        "end": 3381
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 3379,
                                    "end": 3381
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 3361,
                                "end": 3381
                            },
                            "chain": {
                                "kind": 302,
                                "chain": {
                                    "kind": 202,
                                    "chain": null,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "k",
                                        "rawText": "k",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 3383,
                                        "end": 3384
                                    },
                                    "flags": 32,
                                    "transformFlags": 2,
                                    "start": 3383,
                                    "end": 3384
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 3383,
                                "end": 3384
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 3361,
                            "end": 3384
                        },
                        {
                            "kind": 134299649,
                            "text": "undefined",
                            "rawText": "undefined",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3385,
                            "end": 3395
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 3361,
                    "end": 3395
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 3351,
                "end": 3396
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 3351,
            "end": 3397
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "shouldBe",
                    "rawText": "shouldBe",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 3397,
                    "end": 3406
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 205,
                            "chainToken": {
                                "kind": 393240,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 3417,
                                "end": 3419
                            },
                            "member": {
                                "kind": 121,
                                "expression": {
                                    "kind": 205,
                                    "chainToken": {
                                        "kind": 393240,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 3412,
                                        "end": 3414
                                    },
                                    "member": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 134299649,
                                            "text": "o0",
                                            "rawText": "o0",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 3408,
                                            "end": 3410
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 3411,
                                            "end": 3412
                                        },
                                        "flags": 96,
                                        "transformFlags": 2,
                                        "start": 3407,
                                        "end": 3412
                                    },
                                    "chain": {
                                        "kind": 302,
                                        "chain": {
                                            "kind": 202,
                                            "chain": null,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "_b",
                                                "rawText": "_b",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 3414,
                                                "end": 3416
                                            },
                                            "flags": 32,
                                            "transformFlags": 2,
                                            "start": 3414,
                                            "end": 3416
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 3414,
                                        "end": 3416
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 3407,
                                    "end": 3416
                                },
                                "flags": 3407,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 3417
                            },
                            "chain": {
                                "kind": 202,
                                "chain": {
                                    "kind": 302,
                                    "chain": {
                                        "kind": 204,
                                        "chain": null,
                                        "typeArguments": null,
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 3420,
                                            "end": 3420
                                        },
                                        "flags": 32,
                                        "transformFlags": 1,
                                        "start": 3419,
                                        "end": 3421
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 3419,
                                    "end": 3421
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 3422,
                                    "end": 3423
                                },
                                "flags": 32,
                                "transformFlags": 2,
                                "start": 3421,
                                "end": 3423
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 3407,
                            "end": 3423
                        },
                        {
                            "kind": 201392130,
                            "text": 42,
                            "rawText": "42",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3424,
                            "end": 3427
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 3407,
                    "end": 3427
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 3397,
                "end": 3428
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 3397,
            "end": 3429
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "shouldBe",
                    "rawText": "shouldBe",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 3429,
                    "end": 3438
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 129,
                            "member": {
                                "kind": 131,
                                "expression": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 205,
                                        "chainToken": {
                                            "kind": 393240,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 3444,
                                            "end": 3446
                                        },
                                        "member": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 134299649,
                                                "text": "o0",
                                                "rawText": "o0",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 3440,
                                                "end": 3442
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 3443,
                                                "end": 3444
                                            },
                                            "flags": 96,
                                            "transformFlags": 2,
                                            "start": 3439,
                                            "end": 3444
                                        },
                                        "chain": {
                                            "kind": 302,
                                            "chain": {
                                                "kind": 202,
                                                "chain": null,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "_b",
                                                    "rawText": "_b",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 3446,
                                                    "end": 3448
                                                },
                                                "flags": 32,
                                                "transformFlags": 2,
                                                "start": 3446,
                                                "end": 3448
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 3446,
                                            "end": 3448
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 3439,
                                        "end": 3448
                                    },
                                    "flags": 3439,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 3449
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 3450,
                                    "end": 3450
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 3439,
                                "end": 3451
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 3452,
                                "end": 3453
                            },
                            "flags": 32,
                            "transformFlags": 2,
                            "start": 3439,
                            "end": 3453
                        },
                        {
                            "kind": 201392130,
                            "text": 42,
                            "rawText": "42",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3454,
                            "end": 3457
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 3439,
                    "end": 3457
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 3429,
                "end": 3458
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 3429,
            "end": 3459
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "shouldBe",
                    "rawText": "shouldBe",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 3459,
                    "end": 3468
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 205,
                            "chainToken": {
                                "kind": 393240,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 3485,
                                "end": 3487
                            },
                            "member": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 219,
                                            "asteriskToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "undefined",
                                                "rawText": "undefined",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 3470,
                                                "end": 3480
                                            },
                                            "right": {
                                                "kind": 201392130,
                                                "text": 3,
                                                "rawText": "3",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 3481,
                                                "end": 3483
                                            },
                                            "flags": 32,
                                            "transformFlags": 128,
                                            "start": 3470,
                                            "end": 3483
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 3470,
                                    "end": 3483
                                },
                                "flags": 48,
                                "transformFlags": 8,
                                "start": 3469,
                                "end": 3485
                            },
                            "chain": {
                                "kind": 302,
                                "chain": {
                                    "kind": 203,
                                    "chain": null,
                                    "expression": {
                                        "kind": 205,
                                        "chainToken": {
                                            "kind": 393240,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 3492,
                                            "end": 3494
                                        },
                                        "member": {
                                            "kind": 138477575,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 3488,
                                            "end": 3492
                                        },
                                        "chain": {
                                            "kind": 302,
                                            "chain": {
                                                "kind": 202,
                                                "chain": null,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 3494,
                                                    "end": 3495
                                                },
                                                "flags": 32,
                                                "transformFlags": 2,
                                                "start": 3494,
                                                "end": 3495
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 3494,
                                            "end": 3495
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 3488,
                                        "end": 3495
                                    },
                                    "flags": 32,
                                    "transformFlags": 4,
                                    "start": 3487,
                                    "end": 3495
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 3487,
                                "end": 3496
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 3469,
                            "end": 3496
                        },
                        {
                            "kind": 201392130,
                            "text": 3,
                            "rawText": "3",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3497,
                            "end": 3499
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 3469,
                    "end": 3499
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 3459,
                "end": 3500
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 3459,
            "end": 3501
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "shouldBe",
                    "rawText": "shouldBe",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 3501,
                    "end": 3510
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 205,
                            "chainToken": {
                                "kind": 393240,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 3520,
                                "end": 3522
                            },
                            "member": {
                                "kind": 121,
                                "expression": {
                                    "kind": 271,
                                    "asyncKeyword": null,
                                    "typeParameters": null,
                                    "arrowPatameterList": {
                                        "kind": 342,
                                        "parameters": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 3513,
                                        "end": 3513
                                    },
                                    "returnType": null,
                                    "arrowToken": {
                                        "kind": 10,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 3514,
                                        "end": 3517
                                    },
                                    "contents": {
                                        "kind": 201392130,
                                        "text": 3,
                                        "rawText": "3",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 3517,
                                        "end": 3519
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 3512,
                                    "end": 3519
                                },
                                "flags": 3511,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 3520
                            },
                            "chain": {
                                "kind": 302,
                                "chain": {
                                    "kind": 204,
                                    "chain": null,
                                    "typeArguments": null,
                                    "argumentList": {
                                        "kind": 256,
                                        "elements": [
                                            {
                                                "kind": 205,
                                                "chainToken": {
                                                    "kind": 393240,
                                                    "flags": 64,
                                                    "transformFlags": 0,
                                                    "start": 3527,
                                                    "end": 3529
                                                },
                                                "member": {
                                                    "kind": 138477575,
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 3523,
                                                    "end": 3527
                                                },
                                                "chain": {
                                                    "kind": 302,
                                                    "chain": {
                                                        "kind": 202,
                                                        "chain": null,
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 3529,
                                                            "end": 3530
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 2,
                                                        "start": 3529,
                                                        "end": 3530
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 3529,
                                                    "end": 3530
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 3523,
                                                "end": 3530
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 3523,
                                        "end": 3530
                                    },
                                    "flags": 32,
                                    "transformFlags": 1,
                                    "start": 3522,
                                    "end": 3531
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 3522,
                                "end": 3531
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 3511,
                            "end": 3531
                        },
                        {
                            "kind": 201392130,
                            "text": 3,
                            "rawText": "3",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3532,
                            "end": 3534
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 3511,
                    "end": 3534
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 3501,
                "end": 3535
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 3501,
            "end": 3536
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 3536,
                "end": 3542
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "o1",
                            "rawText": "o1",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3542,
                            "end": 3545
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "count",
                                            "rawText": "count",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 3549,
                                            "end": 3559
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 3560,
                                            "end": 3562
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 3549,
                                        "end": 3562
                                    },
                                    {
                                        "kind": 351,
                                        "asyncKeyword": null,
                                        "asteriskToken": null,
                                        "getKeyword": {
                                            "kind": 16498,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 3563,
                                            "end": 3571
                                        },
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 3571,
                                                "end": 3573
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 1056,
                                                "transformFlags": 0,
                                                "start": 3574,
                                                "end": 3575
                                            },
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [
                                                        {
                                                            "kind": 120,
                                                            "expression": {
                                                                "kind": 127,
                                                                "operandToken": {
                                                                    "kind": 196635,
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 3596,
                                                                    "end": 3598
                                                                },
                                                                "operand": {
                                                                    "kind": 129,
                                                                    "member": {
                                                                        "kind": 4276321,
                                                                        "flags": 97,
                                                                        "transformFlags": 0,
                                                                        "start": 3577,
                                                                        "end": 3590
                                                                    },
                                                                    "expression": {
                                                                        "kind": 134299649,
                                                                        "text": "count",
                                                                        "rawText": "count",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 3591,
                                                                        "end": 3596
                                                                    },
                                                                    "flags": 97,
                                                                    "transformFlags": 2,
                                                                    "start": 3577,
                                                                    "end": 3596
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 3577,
                                                                "end": 3598
                                                            },
                                                            "flags": 16,
                                                            "transformFlags": 4096,
                                                            "start": 3577,
                                                            "end": 3599
                                                        },
                                                        {
                                                            "kind": 161,
                                                            "returnKeyword": {
                                                                "kind": 37757022,
                                                                "flags": 81,
                                                                "transformFlags": 0,
                                                                "start": 3599,
                                                                "end": 3614
                                                            },
                                                            "expression": {
                                                                "kind": 271,
                                                                "asyncKeyword": null,
                                                                "typeParameters": null,
                                                                "arrowPatameterList": {
                                                                    "kind": 342,
                                                                    "parameters": [],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "transformFlags": 0,
                                                                    "start": 3616,
                                                                    "end": 3616
                                                                },
                                                                "returnType": null,
                                                                "arrowToken": {
                                                                    "kind": 10,
                                                                    "flags": 64,
                                                                    "transformFlags": 0,
                                                                    "start": 3617,
                                                                    "end": 3620
                                                                },
                                                                "contents": {
                                                                    "kind": 216,
                                                                    "functionStatementList": {
                                                                        "kind": 217,
                                                                        "directives": [],
                                                                        "statements": [],
                                                                        "flags": 33,
                                                                        "transformFlags": 0,
                                                                        "start": 3622,
                                                                        "end": 3622
                                                                    },
                                                                    "flags": 32,
                                                                    "transformFlags": 0,
                                                                    "start": 3620,
                                                                    "end": 3632
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 3614,
                                                                "end": 3632
                                                            },
                                                            "flags": 81,
                                                            "transformFlags": 256,
                                                            "start": 3599,
                                                            "end": 3633
                                                        }
                                                    ],
                                                    "flags": 33,
                                                    "transformFlags": 0,
                                                    "start": 3577,
                                                    "end": 3633
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 3575,
                                                "end": 3639
                                            },
                                            "flags": 1056,
                                            "transformFlags": 0,
                                            "start": 3573,
                                            "end": 3639
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 3563,
                                        "end": 3639
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 17,
                                "transformFlags": 0,
                                "start": 3549,
                                "end": 3639
                            },
                            "flags": 49,
                            "transformFlags": 8,
                            "start": 3547,
                            "end": 3641
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3542,
                        "end": 3641
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 3542,
                "end": 3641
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 3536,
            "end": 3642
        },
        {
            "kind": 120,
            "expression": {
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 3647,
                    "end": 3649
                },
                "member": {
                    "kind": 129,
                    "member": {
                        "kind": 134299649,
                        "text": "o1",
                        "rawText": "o1",
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 3642,
                        "end": 3645
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 3646,
                        "end": 3647
                    },
                    "flags": 97,
                    "transformFlags": 2,
                    "start": 3642,
                    "end": 3647
                },
                "chain": {
                    "kind": 302,
                    "chain": {
                        "kind": 202,
                        "chain": null,
                        "expression": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3649,
                            "end": 3650
                        },
                        "flags": 32,
                        "transformFlags": 2,
                        "start": 3649,
                        "end": 3650
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 3649,
                    "end": 3650
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 3642,
                "end": 3650
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 3642,
            "end": 3651
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "shouldBe",
                    "rawText": "shouldBe",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 3651,
                    "end": 3660
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 129,
                            "member": {
                                "kind": 134299649,
                                "text": "o1",
                                "rawText": "o1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 3661,
                                "end": 3663
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "count",
                                "rawText": "count",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 3664,
                                "end": 3669
                            },
                            "flags": 96,
                            "transformFlags": 2,
                            "start": 3661,
                            "end": 3669
                        },
                        {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3670,
                            "end": 3672
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 3661,
                    "end": 3672
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 3651,
                "end": 3673
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 3651,
            "end": 3674
        },
        {
            "kind": 120,
            "expression": {
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 3679,
                    "end": 3681
                },
                "member": {
                    "kind": 129,
                    "member": {
                        "kind": 134299649,
                        "text": "o1",
                        "rawText": "o1",
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 3674,
                        "end": 3677
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 3678,
                        "end": 3679
                    },
                    "flags": 97,
                    "transformFlags": 2,
                    "start": 3674,
                    "end": 3679
                },
                "chain": {
                    "kind": 302,
                    "chain": {
                        "kind": 203,
                        "chain": null,
                        "expression": {
                            "kind": 201392131,
                            "text": "y",
                            "rawText": "'y'",
                            "flags": 4194400,
                            "transformFlags": 0,
                            "start": 3682,
                            "end": 3685
                        },
                        "flags": 32,
                        "transformFlags": 4,
                        "start": 3681,
                        "end": 3685
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 3681,
                    "end": 3686
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 3674,
                "end": 3686
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 3674,
            "end": 3687
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "shouldBe",
                    "rawText": "shouldBe",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 3687,
                    "end": 3696
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 129,
                            "member": {
                                "kind": 134299649,
                                "text": "o1",
                                "rawText": "o1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 3697,
                                "end": 3699
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "count",
                                "rawText": "count",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 3700,
                                "end": 3705
                            },
                            "flags": 96,
                            "transformFlags": 2,
                            "start": 3697,
                            "end": 3705
                        },
                        {
                            "kind": 201392130,
                            "text": 2,
                            "rawText": "2",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3706,
                            "end": 3708
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 3697,
                    "end": 3708
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 3687,
                "end": 3709
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 3687,
            "end": 3710
        },
        {
            "kind": 120,
            "expression": {
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 3715,
                    "end": 3717
                },
                "member": {
                    "kind": 129,
                    "member": {
                        "kind": 134299649,
                        "text": "o1",
                        "rawText": "o1",
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 3710,
                        "end": 3713
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 3714,
                        "end": 3715
                    },
                    "flags": 97,
                    "transformFlags": 2,
                    "start": 3710,
                    "end": 3715
                },
                "chain": {
                    "kind": 302,
                    "chain": {
                        "kind": 204,
                        "chain": null,
                        "typeArguments": null,
                        "argumentList": {
                            "kind": 256,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 3718,
                            "end": 3718
                        },
                        "flags": 32,
                        "transformFlags": 1,
                        "start": 3717,
                        "end": 3719
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 3717,
                    "end": 3719
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 3710,
                "end": 3719
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 3710,
            "end": 3720
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "shouldBe",
                    "rawText": "shouldBe",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 3720,
                    "end": 3729
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 129,
                            "member": {
                                "kind": 134299649,
                                "text": "o1",
                                "rawText": "o1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 3730,
                                "end": 3732
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "count",
                                "rawText": "count",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 3733,
                                "end": 3738
                            },
                            "flags": 96,
                            "transformFlags": 2,
                            "start": 3730,
                            "end": 3738
                        },
                        {
                            "kind": 201392130,
                            "text": 3,
                            "rawText": "3",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3739,
                            "end": 3741
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 3730,
                    "end": 3741
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 3720,
                "end": 3742
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 3720,
            "end": 3743
        },
        {
            "kind": 120,
            "expression": {
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 3748,
                    "end": 3750
                },
                "member": {
                    "kind": 138477575,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 3743,
                    "end": 3748
                },
                "chain": {
                    "kind": 302,
                    "chain": {
                        "kind": 204,
                        "chain": null,
                        "typeArguments": null,
                        "argumentList": {
                            "kind": 256,
                            "elements": [
                                {
                                    "kind": 129,
                                    "member": {
                                        "kind": 134299649,
                                        "text": "o1",
                                        "rawText": "o1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 3751,
                                        "end": 3753
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 3754,
                                        "end": 3755
                                    },
                                    "flags": 96,
                                    "transformFlags": 2,
                                    "start": 3751,
                                    "end": 3755
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 3751,
                            "end": 3755
                        },
                        "flags": 32,
                        "transformFlags": 1,
                        "start": 3750,
                        "end": 3756
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 3750,
                    "end": 3756
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 3743,
                "end": 3756
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 3743,
            "end": 3757
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "shouldBe",
                    "rawText": "shouldBe",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 3757,
                    "end": 3766
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 129,
                            "member": {
                                "kind": 134299649,
                                "text": "o1",
                                "rawText": "o1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 3767,
                                "end": 3769
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "count",
                                "rawText": "count",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 3770,
                                "end": 3775
                            },
                            "flags": 96,
                            "transformFlags": 2,
                            "start": 3767,
                            "end": 3775
                        },
                        {
                            "kind": 201392130,
                            "text": 3,
                            "rawText": "3",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3776,
                            "end": 3778
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 3767,
                    "end": 3778
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 3757,
                "end": 3779
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 3757,
            "end": 3780
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "shouldBe",
                    "rawText": "shouldBe",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 3780,
                    "end": 3789
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 126,
                            "operandToken": {
                                "kind": 4259886,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 3790,
                                "end": 3796
                            },
                            "operand": {
                                "kind": 205,
                                "chainToken": {
                                    "kind": 393240,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 3806,
                                    "end": 3808
                                },
                                "member": {
                                    "kind": 134299649,
                                    "text": "undefined",
                                    "rawText": "undefined",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 3796,
                                    "end": 3806
                                },
                                "chain": {
                                    "kind": 302,
                                    "chain": {
                                        "kind": 202,
                                        "chain": null,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 3808,
                                            "end": 3811
                                        },
                                        "flags": 32,
                                        "transformFlags": 2,
                                        "start": 3808,
                                        "end": 3811
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 3808,
                                    "end": 3811
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 3796,
                                "end": 3811
                            },
                            "flags": 32,
                            "transformFlags": 16384,
                            "start": 3790,
                            "end": 3811
                        },
                        {
                            "kind": 24752947,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3812,
                            "end": 3817
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 3790,
                    "end": 3817
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 3780,
                "end": 3818
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 3780,
            "end": 3819
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "shouldBe",
                    "rawText": "shouldBe",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 3819,
                    "end": 3828
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 126,
                            "operandToken": {
                                "kind": 4259886,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 3829,
                                "end": 3835
                            },
                            "operand": {
                                "kind": 205,
                                "chainToken": {
                                    "kind": 393240,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 3840,
                                    "end": 3842
                                },
                                "member": {
                                    "kind": 138477575,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 3835,
                                    "end": 3840
                                },
                                "chain": {
                                    "kind": 302,
                                    "chain": {
                                        "kind": 202,
                                        "chain": null,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 3842,
                                            "end": 3845
                                        },
                                        "flags": 32,
                                        "transformFlags": 2,
                                        "start": 3842,
                                        "end": 3845
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 3842,
                                    "end": 3845
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 3835,
                                "end": 3845
                            },
                            "flags": 32,
                            "transformFlags": 16384,
                            "start": 3829,
                            "end": 3845
                        },
                        {
                            "kind": 24752947,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3846,
                            "end": 3851
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 3829,
                    "end": 3851
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 3819,
                "end": 3852
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 3819,
            "end": 3853
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "shouldBe",
                    "rawText": "shouldBe",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 3853,
                    "end": 3862
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 126,
                            "operandToken": {
                                "kind": 4259886,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 3863,
                                "end": 3869
                            },
                            "operand": {
                                "kind": 205,
                                "chainToken": {
                                    "kind": 393240,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 3879,
                                    "end": 3881
                                },
                                "member": {
                                    "kind": 134299649,
                                    "text": "undefined",
                                    "rawText": "undefined",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 3869,
                                    "end": 3879
                                },
                                "chain": {
                                    "kind": 302,
                                    "chain": {
                                        "kind": 203,
                                        "chain": null,
                                        "expression": {
                                            "kind": 201392131,
                                            "text": "foo",
                                            "rawText": "'foo'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 3882,
                                            "end": 3887
                                        },
                                        "flags": 32,
                                        "transformFlags": 4,
                                        "start": 3881,
                                        "end": 3887
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 3881,
                                    "end": 3888
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 3869,
                                "end": 3888
                            },
                            "flags": 32,
                            "transformFlags": 16384,
                            "start": 3863,
                            "end": 3888
                        },
                        {
                            "kind": 24752947,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3889,
                            "end": 3894
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 3863,
                    "end": 3894
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 3853,
                "end": 3895
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 3853,
            "end": 3896
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "shouldBe",
                    "rawText": "shouldBe",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 3896,
                    "end": 3905
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 126,
                            "operandToken": {
                                "kind": 4259886,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 3906,
                                "end": 3912
                            },
                            "operand": {
                                "kind": 205,
                                "chainToken": {
                                    "kind": 393240,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 3917,
                                    "end": 3919
                                },
                                "member": {
                                    "kind": 138477575,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 3912,
                                    "end": 3917
                                },
                                "chain": {
                                    "kind": 302,
                                    "chain": {
                                        "kind": 203,
                                        "chain": null,
                                        "expression": {
                                            "kind": 201392131,
                                            "text": "foo",
                                            "rawText": "'foo'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 3920,
                                            "end": 3925
                                        },
                                        "flags": 32,
                                        "transformFlags": 4,
                                        "start": 3919,
                                        "end": 3925
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 3919,
                                    "end": 3926
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 3912,
                                "end": 3926
                            },
                            "flags": 32,
                            "transformFlags": 16384,
                            "start": 3906,
                            "end": 3926
                        },
                        {
                            "kind": 24752947,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3927,
                            "end": 3932
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 3906,
                    "end": 3932
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 3896,
                "end": 3933
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 3896,
            "end": 3934
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "shouldBe",
                    "rawText": "shouldBe",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 3934,
                    "end": 3943
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 126,
                            "operandToken": {
                                "kind": 4259886,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 3944,
                                "end": 3950
                            },
                            "operand": {
                                "kind": 205,
                                "chainToken": {
                                    "kind": 393240,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 3960,
                                    "end": 3962
                                },
                                "member": {
                                    "kind": 134299649,
                                    "text": "undefined",
                                    "rawText": "undefined",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 3950,
                                    "end": 3960
                                },
                                "chain": {
                                    "kind": 302,
                                    "chain": {
                                        "kind": 204,
                                        "chain": null,
                                        "typeArguments": null,
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 3963,
                                            "end": 3963
                                        },
                                        "flags": 32,
                                        "transformFlags": 1,
                                        "start": 3962,
                                        "end": 3964
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 3962,
                                    "end": 3964
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 3950,
                                "end": 3964
                            },
                            "flags": 32,
                            "transformFlags": 16384,
                            "start": 3944,
                            "end": 3964
                        },
                        {
                            "kind": 24752947,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3965,
                            "end": 3970
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 3944,
                    "end": 3970
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 3934,
                "end": 3971
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 3934,
            "end": 3972
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "shouldBe",
                    "rawText": "shouldBe",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 3972,
                    "end": 3981
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 126,
                            "operandToken": {
                                "kind": 4259886,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 3982,
                                "end": 3988
                            },
                            "operand": {
                                "kind": 205,
                                "chainToken": {
                                    "kind": 393240,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 3993,
                                    "end": 3995
                                },
                                "member": {
                                    "kind": 138477575,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 3988,
                                    "end": 3993
                                },
                                "chain": {
                                    "kind": 302,
                                    "chain": {
                                        "kind": 204,
                                        "chain": null,
                                        "typeArguments": null,
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 3996,
                                            "end": 3996
                                        },
                                        "flags": 32,
                                        "transformFlags": 1,
                                        "start": 3995,
                                        "end": 3997
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 3995,
                                    "end": 3997
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 3988,
                                "end": 3997
                            },
                            "flags": 32,
                            "transformFlags": 16384,
                            "start": 3982,
                            "end": 3997
                        },
                        {
                            "kind": 24752947,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3998,
                            "end": 4003
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 3982,
                    "end": 4003
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 3972,
                "end": 4004
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 3972,
            "end": 4005
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 4005,
                "end": 4011
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "o2",
                            "rawText": "o2",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 4011,
                            "end": 4014
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 4018,
                                            "end": 4024
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 4025,
                                            "end": 4027
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 4018,
                                        "end": 4027
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 4028,
                                            "end": 4034
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 4035,
                                            "end": 4037
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 4028,
                                        "end": 4037
                                    },
                                    {
                                        "kind": 351,
                                        "asyncKeyword": null,
                                        "asteriskToken": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "z",
                                                "rawText": "z",
                                                "flags": 97,
                                                "transformFlags": 0,
                                                "start": 4038,
                                                "end": 4044
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 4045,
                                                "end": 4046
                                            },
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 33,
                                                    "transformFlags": 0,
                                                    "start": 4048,
                                                    "end": 4048
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 4046,
                                                "end": 4054
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 4044,
                                            "end": 4054
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 4038,
                                        "end": 4054
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 17,
                                "transformFlags": 0,
                                "start": 4018,
                                "end": 4054
                            },
                            "flags": 49,
                            "transformFlags": 8,
                            "start": 4016,
                            "end": 4056
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 4011,
                        "end": 4056
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 4011,
                "end": 4056
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 4005,
            "end": 4057
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "shouldBe",
                    "rawText": "shouldBe",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 4057,
                    "end": 4066
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 126,
                            "operandToken": {
                                "kind": 4259886,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 4067,
                                "end": 4073
                            },
                            "operand": {
                                "kind": 205,
                                "chainToken": {
                                    "kind": 393240,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 4076,
                                    "end": 4078
                                },
                                "member": {
                                    "kind": 134299649,
                                    "text": "o2",
                                    "rawText": "o2",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 4073,
                                    "end": 4076
                                },
                                "chain": {
                                    "kind": 302,
                                    "chain": {
                                        "kind": 202,
                                        "chain": null,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 4078,
                                            "end": 4079
                                        },
                                        "flags": 32,
                                        "transformFlags": 2,
                                        "start": 4078,
                                        "end": 4079
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 4078,
                                    "end": 4079
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 4073,
                                "end": 4079
                            },
                            "flags": 32,
                            "transformFlags": 16384,
                            "start": 4067,
                            "end": 4079
                        },
                        {
                            "kind": 24752947,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 4080,
                            "end": 4085
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 4067,
                    "end": 4085
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 4057,
                "end": 4086
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 4057,
            "end": 4087
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "shouldBe",
                    "rawText": "shouldBe",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 4087,
                    "end": 4096
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 129,
                            "member": {
                                "kind": 134299649,
                                "text": "o2",
                                "rawText": "o2",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 4097,
                                "end": 4099
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 4100,
                                "end": 4101
                            },
                            "flags": 96,
                            "transformFlags": 2,
                            "start": 4097,
                            "end": 4101
                        },
                        {
                            "kind": 134299649,
                            "text": "undefined",
                            "rawText": "undefined",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 4102,
                            "end": 4112
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 4097,
                    "end": 4112
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 4087,
                "end": 4113
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 4087,
            "end": 4114
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "shouldBe",
                    "rawText": "shouldBe",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 4114,
                    "end": 4123
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 126,
                            "operandToken": {
                                "kind": 4259886,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 4124,
                                "end": 4130
                            },
                            "operand": {
                                "kind": 205,
                                "chainToken": {
                                    "kind": 393240,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 4133,
                                    "end": 4135
                                },
                                "member": {
                                    "kind": 134299649,
                                    "text": "o2",
                                    "rawText": "o2",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 4130,
                                    "end": 4133
                                },
                                "chain": {
                                    "kind": 302,
                                    "chain": {
                                        "kind": 202,
                                        "chain": null,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 4135,
                                            "end": 4136
                                        },
                                        "flags": 32,
                                        "transformFlags": 2,
                                        "start": 4135,
                                        "end": 4136
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 4135,
                                    "end": 4136
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 4130,
                                "end": 4136
                            },
                            "flags": 32,
                            "transformFlags": 16384,
                            "start": 4124,
                            "end": 4136
                        },
                        {
                            "kind": 24752947,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 4137,
                            "end": 4142
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 4124,
                    "end": 4142
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 4114,
                "end": 4143
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 4114,
            "end": 4144
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "shouldBe",
                    "rawText": "shouldBe",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 4144,
                    "end": 4153
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 126,
                            "operandToken": {
                                "kind": 4259886,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 4154,
                                "end": 4160
                            },
                            "operand": {
                                "kind": 205,
                                "chainToken": {
                                    "kind": 393240,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 4163,
                                    "end": 4165
                                },
                                "member": {
                                    "kind": 134299649,
                                    "text": "o2",
                                    "rawText": "o2",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 4160,
                                    "end": 4163
                                },
                                "chain": {
                                    "kind": 302,
                                    "chain": {
                                        "kind": 203,
                                        "chain": null,
                                        "expression": {
                                            "kind": 201392131,
                                            "text": "y",
                                            "rawText": "'y'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 4166,
                                            "end": 4169
                                        },
                                        "flags": 32,
                                        "transformFlags": 4,
                                        "start": 4165,
                                        "end": 4169
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 4165,
                                    "end": 4170
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 4160,
                                "end": 4170
                            },
                            "flags": 32,
                            "transformFlags": 16384,
                            "start": 4154,
                            "end": 4170
                        },
                        {
                            "kind": 24752947,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 4171,
                            "end": 4176
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 4154,
                    "end": 4176
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 4144,
                "end": 4177
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 4144,
            "end": 4178
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "shouldBe",
                    "rawText": "shouldBe",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 4178,
                    "end": 4187
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 129,
                            "member": {
                                "kind": 134299649,
                                "text": "o2",
                                "rawText": "o2",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 4188,
                                "end": 4190
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 4191,
                                "end": 4192
                            },
                            "flags": 96,
                            "transformFlags": 2,
                            "start": 4188,
                            "end": 4192
                        },
                        {
                            "kind": 134299649,
                            "text": "undefined",
                            "rawText": "undefined",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 4193,
                            "end": 4203
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 4188,
                    "end": 4203
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 4178,
                "end": 4204
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 4178,
            "end": 4205
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "shouldBe",
                    "rawText": "shouldBe",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 4205,
                    "end": 4214
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 126,
                            "operandToken": {
                                "kind": 4259886,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 4215,
                                "end": 4221
                            },
                            "operand": {
                                "kind": 205,
                                "chainToken": {
                                    "kind": 393240,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 4224,
                                    "end": 4226
                                },
                                "member": {
                                    "kind": 134299649,
                                    "text": "o2",
                                    "rawText": "o2",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 4221,
                                    "end": 4224
                                },
                                "chain": {
                                    "kind": 302,
                                    "chain": {
                                        "kind": 203,
                                        "chain": null,
                                        "expression": {
                                            "kind": 201392131,
                                            "text": "y",
                                            "rawText": "'y'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 4227,
                                            "end": 4230
                                        },
                                        "flags": 32,
                                        "transformFlags": 4,
                                        "start": 4226,
                                        "end": 4230
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 4226,
                                    "end": 4231
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 4221,
                                "end": 4231
                            },
                            "flags": 32,
                            "transformFlags": 16384,
                            "start": 4215,
                            "end": 4231
                        },
                        {
                            "kind": 24752947,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 4232,
                            "end": 4237
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 4215,
                    "end": 4237
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 4205,
                "end": 4238
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 4205,
            "end": 4239
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "shouldBe",
                    "rawText": "shouldBe",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 4239,
                    "end": 4248
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 126,
                            "operandToken": {
                                "kind": 4259886,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 4249,
                                "end": 4255
                            },
                            "operand": {
                                "kind": 205,
                                "chainToken": {
                                    "kind": 393240,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 4260,
                                    "end": 4262
                                },
                                "member": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 134299649,
                                        "text": "o2",
                                        "rawText": "o2",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 4255,
                                        "end": 4258
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 4259,
                                        "end": 4260
                                    },
                                    "flags": 96,
                                    "transformFlags": 2,
                                    "start": 4255,
                                    "end": 4260
                                },
                                "chain": {
                                    "kind": 302,
                                    "chain": {
                                        "kind": 204,
                                        "chain": null,
                                        "typeArguments": null,
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 4263,
                                            "end": 4263
                                        },
                                        "flags": 32,
                                        "transformFlags": 1,
                                        "start": 4262,
                                        "end": 4264
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 4262,
                                    "end": 4264
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 4255,
                                "end": 4264
                            },
                            "flags": 32,
                            "transformFlags": 16384,
                            "start": 4249,
                            "end": 4264
                        },
                        {
                            "kind": 24752947,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 4265,
                            "end": 4270
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 4249,
                    "end": 4270
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 4239,
                "end": 4271
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 4239,
            "end": 4272
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 4272,
                "end": 4281
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "greet",
                "rawText": "greet",
                "flags": 96,
                "transformFlags": 0,
                "start": 4281,
                "end": 4287
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 134299649,
                        "text": "name",
                        "rawText": "name",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 4288,
                        "end": 4292
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 4288,
                "end": 4292
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 4295,
                                "end": 4306
                            },
                            "expression": {
                                "kind": 227,
                                "spans": [
                                    {
                                        "kind": 65764,
                                        "rawText": "hey, ",
                                        "text": "hey, ",
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "name",
                                            "rawText": "name",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 4315,
                                            "end": 4320
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 4306,
                                        "end": 4320
                                    },
                                    {
                                        "kind": 65764,
                                        "rawText": "",
                                        "text": "",
                                        "expression": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 129,
                                                "member": {
                                                    "kind": 4276321,
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 4324,
                                                    "end": 4329
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "suffix",
                                                    "rawText": "suffix",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 4330,
                                                    "end": 4336
                                                },
                                                "flags": 96,
                                                "transformFlags": 2,
                                                "start": 4324,
                                                "end": 4336
                                            },
                                            "operatorToken": {
                                                "kind": 33047,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 4336,
                                                "end": 4339
                                            },
                                            "right": {
                                                "kind": 201392131,
                                                "text": ".",
                                                "rawText": "'.'",
                                                "flags": 4194400,
                                                "transformFlags": 0,
                                                "start": 4339,
                                                "end": 4343
                                            },
                                            "flags": 96,
                                            "transformFlags": 5120,
                                            "start": 4324,
                                            "end": 4343
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 4320,
                                        "end": 4343
                                    }
                                ],
                                "tail": {
                                    "kind": 458761,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 4343,
                                    "end": 4346
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 4306,
                                "end": 4346
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 4295,
                            "end": 4347
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 4295,
                    "end": 4347
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 4293,
                "end": 4349
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 4272,
            "end": 4349
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "shouldBe",
                    "rawText": "shouldBe",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 4349,
                    "end": 4358
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 205,
                            "chainToken": {
                                "kind": 393240,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 4363,
                                "end": 4365
                            },
                            "member": {
                                "kind": 134299649,
                                "text": "eval",
                                "rawText": "eval",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 4359,
                                "end": 4363
                            },
                            "chain": {
                                "kind": 302,
                                "chain": {
                                    "kind": 204,
                                    "chain": null,
                                    "typeArguments": null,
                                    "argumentList": {
                                        "kind": 256,
                                        "elements": [
                                            {
                                                "kind": 201392131,
                                                "text": "greet(\"world\")",
                                                "rawText": "'greet(\"world\")'",
                                                "flags": 4194400,
                                                "transformFlags": 0,
                                                "start": 4366,
                                                "end": 4382
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 4366,
                                        "end": 4382
                                    },
                                    "flags": 32,
                                    "transformFlags": 1,
                                    "start": 4365,
                                    "end": 4383
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 4365,
                                "end": 4383
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 4359,
                            "end": 4383
                        },
                        {
                            "kind": 201392131,
                            "text": "hey, world.",
                            "rawText": "'hey, world.'",
                            "flags": 4194400,
                            "transformFlags": 0,
                            "start": 4384,
                            "end": 4398
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 4359,
                    "end": 4398
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 4349,
                "end": 4399
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 4349,
            "end": 4400
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "shouldBe",
                    "rawText": "shouldBe",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 4400,
                    "end": 4409
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 205,
                            "chainToken": {
                                "kind": 393240,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 4415,
                                "end": 4417
                            },
                            "member": {
                                "kind": 134299649,
                                "text": "greet",
                                "rawText": "greet",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 4410,
                                "end": 4415
                            },
                            "chain": {
                                "kind": 204,
                                "chain": {
                                    "kind": 302,
                                    "chain": {
                                        "kind": 202,
                                        "chain": null,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "call",
                                            "rawText": "call",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 4417,
                                            "end": 4421
                                        },
                                        "flags": 32,
                                        "transformFlags": 2,
                                        "start": 4417,
                                        "end": 4421
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 4417,
                                    "end": 4421
                                },
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "asteriskToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "suffix",
                                                            "rawText": "suffix",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 4423,
                                                            "end": 4430
                                                        },
                                                        "right": {
                                                            "kind": 201392131,
                                                            "text": "!",
                                                            "rawText": "'!'",
                                                            "flags": 4194400,
                                                            "transformFlags": 0,
                                                            "start": 4431,
                                                            "end": 4435
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 128,
                                                        "start": 4423,
                                                        "end": 4435
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 4423,
                                                "end": 4435
                                            },
                                            "flags": 48,
                                            "transformFlags": 8,
                                            "start": 4422,
                                            "end": 4437
                                        },
                                        {
                                            "kind": 201392131,
                                            "text": "world",
                                            "rawText": "'world'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 4438,
                                            "end": 4446
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 4422,
                                    "end": 4446
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 4421,
                                "end": 4447
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 4410,
                            "end": 4447
                        },
                        {
                            "kind": 201392131,
                            "text": "hey, world!",
                            "rawText": "'hey, world!'",
                            "flags": 4194400,
                            "transformFlags": 0,
                            "start": 4448,
                            "end": 4462
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 4410,
                    "end": 4462
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 4400,
                "end": 4463
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 4400,
            "end": 4464
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "shouldBe",
                    "rawText": "shouldBe",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 4464,
                    "end": 4473
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 205,
                            "chainToken": {
                                "kind": 393240,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 4484,
                                "end": 4486
                            },
                            "member": {
                                "kind": 129,
                                "member": {
                                    "kind": 134299649,
                                    "text": "greet",
                                    "rawText": "greet",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 4474,
                                    "end": 4479
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "call",
                                    "rawText": "call",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 4480,
                                    "end": 4484
                                },
                                "flags": 96,
                                "transformFlags": 2,
                                "start": 4474,
                                "end": 4484
                            },
                            "chain": {
                                "kind": 302,
                                "chain": {
                                    "kind": 204,
                                    "chain": null,
                                    "typeArguments": null,
                                    "argumentList": {
                                        "kind": 256,
                                        "elements": [
                                            {
                                                "kind": 220,
                                                "propertyList": {
                                                    "kind": 218,
                                                    "properties": [
                                                        {
                                                            "kind": 219,
                                                            "asteriskToken": null,
                                                            "left": {
                                                                "kind": 134299649,
                                                                "text": "suffix",
                                                                "rawText": "suffix",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 4488,
                                                                "end": 4495
                                                            },
                                                            "right": {
                                                                "kind": 201392131,
                                                                "text": "!",
                                                                "rawText": "'!'",
                                                                "flags": 4194400,
                                                                "transformFlags": 0,
                                                                "start": 4496,
                                                                "end": 4500
                                                            },
                                                            "flags": 32,
                                                            "transformFlags": 128,
                                                            "start": 4488,
                                                            "end": 4500
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 4488,
                                                    "end": 4500
                                                },
                                                "flags": 48,
                                                "transformFlags": 8,
                                                "start": 4487,
                                                "end": 4502
                                            },
                                            {
                                                "kind": 201392131,
                                                "text": "world",
                                                "rawText": "'world'",
                                                "flags": 4194400,
                                                "transformFlags": 0,
                                                "start": 4503,
                                                "end": 4511
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 4487,
                                        "end": 4511
                                    },
                                    "flags": 32,
                                    "transformFlags": 1,
                                    "start": 4486,
                                    "end": 4512
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 4486,
                                "end": 4512
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 4474,
                            "end": 4512
                        },
                        {
                            "kind": 201392131,
                            "text": "hey, world!",
                            "rawText": "'hey, world!'",
                            "flags": 4194400,
                            "transformFlags": 0,
                            "start": 4513,
                            "end": 4527
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 4474,
                    "end": 4527
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 4464,
                "end": 4528
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 4464,
            "end": 4529
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "shouldBe",
                    "rawText": "shouldBe",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 4529,
                    "end": 4538
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 205,
                            "chainToken": {
                                "kind": 393240,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 4543,
                                "end": 4545
                            },
                            "member": {
                                "kind": 138477575,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 4539,
                                "end": 4543
                            },
                            "chain": {
                                "kind": 204,
                                "chain": {
                                    "kind": 302,
                                    "chain": {
                                        "kind": 202,
                                        "chain": null,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "call",
                                            "rawText": "call",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 4545,
                                            "end": 4549
                                        },
                                        "flags": 32,
                                        "transformFlags": 2,
                                        "start": 4545,
                                        "end": 4549
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 4545,
                                    "end": 4549
                                },
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "asteriskToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "suffix",
                                                            "rawText": "suffix",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 4551,
                                                            "end": 4558
                                                        },
                                                        "right": {
                                                            "kind": 201392131,
                                                            "text": "!",
                                                            "rawText": "'!'",
                                                            "flags": 4194400,
                                                            "transformFlags": 0,
                                                            "start": 4559,
                                                            "end": 4563
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 128,
                                                        "start": 4551,
                                                        "end": 4563
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 4551,
                                                "end": 4563
                                            },
                                            "flags": 48,
                                            "transformFlags": 8,
                                            "start": 4550,
                                            "end": 4565
                                        },
                                        {
                                            "kind": 201392131,
                                            "text": "world",
                                            "rawText": "'world'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 4566,
                                            "end": 4574
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 4550,
                                    "end": 4574
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 4549,
                                "end": 4575
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 4539,
                            "end": 4575
                        },
                        {
                            "kind": 134299649,
                            "text": "undefined",
                            "rawText": "undefined",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 4576,
                            "end": 4586
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 4539,
                    "end": 4586
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 4529,
                "end": 4587
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 4529,
            "end": 4588
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "shouldBe",
                    "rawText": "shouldBe",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 4588,
                    "end": 4597
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 205,
                            "chainToken": {
                                "kind": 393240,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 4605,
                                "end": 4607
                            },
                            "member": {
                                "kind": 129,
                                "member": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 4599,
                                        "end": 4599
                                    },
                                    "flags": 48,
                                    "transformFlags": 8,
                                    "start": 4598,
                                    "end": 4600
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "call",
                                    "rawText": "call",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 4601,
                                    "end": 4605
                                },
                                "flags": 48,
                                "transformFlags": 2,
                                "start": 4598,
                                "end": 4605
                            },
                            "chain": {
                                "kind": 302,
                                "chain": {
                                    "kind": 204,
                                    "chain": null,
                                    "typeArguments": null,
                                    "argumentList": {
                                        "kind": 256,
                                        "elements": [
                                            {
                                                "kind": 220,
                                                "propertyList": {
                                                    "kind": 218,
                                                    "properties": [
                                                        {
                                                            "kind": 219,
                                                            "asteriskToken": null,
                                                            "left": {
                                                                "kind": 134299649,
                                                                "text": "suffix",
                                                                "rawText": "suffix",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 4609,
                                                                "end": 4616
                                                            },
                                                            "right": {
                                                                "kind": 201392131,
                                                                "text": "!",
                                                                "rawText": "'!'",
                                                                "flags": 4194400,
                                                                "transformFlags": 0,
                                                                "start": 4617,
                                                                "end": 4621
                                                            },
                                                            "flags": 32,
                                                            "transformFlags": 128,
                                                            "start": 4609,
                                                            "end": 4621
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 4609,
                                                    "end": 4621
                                                },
                                                "flags": 48,
                                                "transformFlags": 8,
                                                "start": 4608,
                                                "end": 4623
                                            },
                                            {
                                                "kind": 201392131,
                                                "text": "world",
                                                "rawText": "'world'",
                                                "flags": 4194400,
                                                "transformFlags": 0,
                                                "start": 4624,
                                                "end": 4632
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 4608,
                                        "end": 4632
                                    },
                                    "flags": 32,
                                    "transformFlags": 1,
                                    "start": 4607,
                                    "end": 4633
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 4607,
                                "end": 4633
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 4598,
                            "end": 4633
                        },
                        {
                            "kind": 134299649,
                            "text": "undefined",
                            "rawText": "undefined",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 4634,
                            "end": 4644
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 4598,
                    "end": 4644
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 4588,
                "end": 4645
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 4588,
            "end": 4646
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "shouldBe",
                    "rawText": "shouldBe",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 4646,
                    "end": 4655
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 205,
                            "chainToken": {
                                "kind": 393240,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 4661,
                                "end": 4663
                            },
                            "member": {
                                "kind": 134299649,
                                "text": "greet",
                                "rawText": "greet",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 4656,
                                "end": 4661
                            },
                            "chain": {
                                "kind": 204,
                                "chain": {
                                    "kind": 302,
                                    "chain": {
                                        "kind": 202,
                                        "chain": null,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "apply",
                                            "rawText": "apply",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 4663,
                                            "end": 4668
                                        },
                                        "flags": 32,
                                        "transformFlags": 2,
                                        "start": 4663,
                                        "end": 4668
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 4663,
                                    "end": 4668
                                },
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "asteriskToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "suffix",
                                                            "rawText": "suffix",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 4670,
                                                            "end": 4677
                                                        },
                                                        "right": {
                                                            "kind": 201392131,
                                                            "text": "?",
                                                            "rawText": "'?'",
                                                            "flags": 4194400,
                                                            "transformFlags": 0,
                                                            "start": 4678,
                                                            "end": 4682
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 128,
                                                        "start": 4670,
                                                        "end": 4682
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 4670,
                                                "end": 4682
                                            },
                                            "flags": 48,
                                            "transformFlags": 8,
                                            "start": 4669,
                                            "end": 4684
                                        },
                                        {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [
                                                    {
                                                        "kind": 201392131,
                                                        "text": "world",
                                                        "rawText": "'world'",
                                                        "flags": 4194400,
                                                        "transformFlags": 0,
                                                        "start": 4687,
                                                        "end": 4694
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 4194336,
                                                "transformFlags": 0,
                                                "start": 4687,
                                                "end": 4694
                                            },
                                            "flags": 32,
                                            "transformFlags": 8,
                                            "start": 4685,
                                            "end": 4695
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 4669,
                                    "end": 4695
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 4668,
                                "end": 4696
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 4656,
                            "end": 4696
                        },
                        {
                            "kind": 201392131,
                            "text": "hey, world?",
                            "rawText": "'hey, world?'",
                            "flags": 4194400,
                            "transformFlags": 0,
                            "start": 4697,
                            "end": 4711
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 4656,
                    "end": 4711
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 4646,
                "end": 4712
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 4646,
            "end": 4713
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "shouldBe",
                    "rawText": "shouldBe",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 4713,
                    "end": 4722
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 205,
                            "chainToken": {
                                "kind": 393240,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 4734,
                                "end": 4736
                            },
                            "member": {
                                "kind": 129,
                                "member": {
                                    "kind": 134299649,
                                    "text": "greet",
                                    "rawText": "greet",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 4723,
                                    "end": 4728
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "apply",
                                    "rawText": "apply",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 4729,
                                    "end": 4734
                                },
                                "flags": 96,
                                "transformFlags": 2,
                                "start": 4723,
                                "end": 4734
                            },
                            "chain": {
                                "kind": 302,
                                "chain": {
                                    "kind": 204,
                                    "chain": null,
                                    "typeArguments": null,
                                    "argumentList": {
                                        "kind": 256,
                                        "elements": [
                                            {
                                                "kind": 220,
                                                "propertyList": {
                                                    "kind": 218,
                                                    "properties": [
                                                        {
                                                            "kind": 219,
                                                            "asteriskToken": null,
                                                            "left": {
                                                                "kind": 134299649,
                                                                "text": "suffix",
                                                                "rawText": "suffix",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 4738,
                                                                "end": 4745
                                                            },
                                                            "right": {
                                                                "kind": 201392131,
                                                                "text": "?",
                                                                "rawText": "'?'",
                                                                "flags": 4194400,
                                                                "transformFlags": 0,
                                                                "start": 4746,
                                                                "end": 4750
                                                            },
                                                            "flags": 32,
                                                            "transformFlags": 128,
                                                            "start": 4738,
                                                            "end": 4750
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 4738,
                                                    "end": 4750
                                                },
                                                "flags": 48,
                                                "transformFlags": 8,
                                                "start": 4737,
                                                "end": 4752
                                            },
                                            {
                                                "kind": 119,
                                                "elementList": {
                                                    "kind": 270,
                                                    "elements": [
                                                        {
                                                            "kind": 201392131,
                                                            "text": "world",
                                                            "rawText": "'world'",
                                                            "flags": 4194400,
                                                            "transformFlags": 0,
                                                            "start": 4755,
                                                            "end": 4762
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 4194336,
                                                    "transformFlags": 0,
                                                    "start": 4755,
                                                    "end": 4762
                                                },
                                                "flags": 32,
                                                "transformFlags": 8,
                                                "start": 4753,
                                                "end": 4763
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 4737,
                                        "end": 4763
                                    },
                                    "flags": 32,
                                    "transformFlags": 1,
                                    "start": 4736,
                                    "end": 4764
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 4736,
                                "end": 4764
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 4723,
                            "end": 4764
                        },
                        {
                            "kind": 201392131,
                            "text": "hey, world?",
                            "rawText": "'hey, world?'",
                            "flags": 4194400,
                            "transformFlags": 0,
                            "start": 4765,
                            "end": 4779
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 4723,
                    "end": 4779
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 4713,
                "end": 4780
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 4713,
            "end": 4781
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "shouldBe",
                    "rawText": "shouldBe",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 4781,
                    "end": 4790
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 205,
                            "chainToken": {
                                "kind": 393240,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 4795,
                                "end": 4797
                            },
                            "member": {
                                "kind": 138477575,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 4791,
                                "end": 4795
                            },
                            "chain": {
                                "kind": 204,
                                "chain": {
                                    "kind": 302,
                                    "chain": {
                                        "kind": 202,
                                        "chain": null,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "apply",
                                            "rawText": "apply",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 4797,
                                            "end": 4802
                                        },
                                        "flags": 32,
                                        "transformFlags": 2,
                                        "start": 4797,
                                        "end": 4802
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 4797,
                                    "end": 4802
                                },
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "asteriskToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "suffix",
                                                            "rawText": "suffix",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 4804,
                                                            "end": 4811
                                                        },
                                                        "right": {
                                                            "kind": 201392131,
                                                            "text": "?",
                                                            "rawText": "'?'",
                                                            "flags": 4194400,
                                                            "transformFlags": 0,
                                                            "start": 4812,
                                                            "end": 4816
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 128,
                                                        "start": 4804,
                                                        "end": 4816
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 4804,
                                                "end": 4816
                                            },
                                            "flags": 48,
                                            "transformFlags": 8,
                                            "start": 4803,
                                            "end": 4818
                                        },
                                        {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [
                                                    {
                                                        "kind": 201392131,
                                                        "text": "world",
                                                        "rawText": "'world'",
                                                        "flags": 4194400,
                                                        "transformFlags": 0,
                                                        "start": 4821,
                                                        "end": 4828
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 4194336,
                                                "transformFlags": 0,
                                                "start": 4821,
                                                "end": 4828
                                            },
                                            "flags": 32,
                                            "transformFlags": 8,
                                            "start": 4819,
                                            "end": 4829
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 4803,
                                    "end": 4829
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 4802,
                                "end": 4830
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 4791,
                            "end": 4830
                        },
                        {
                            "kind": 134299649,
                            "text": "undefined",
                            "rawText": "undefined",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 4831,
                            "end": 4841
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 4791,
                    "end": 4841
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 4781,
                "end": 4842
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 4781,
            "end": 4843
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "shouldBe",
                    "rawText": "shouldBe",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 4843,
                    "end": 4852
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 205,
                            "chainToken": {
                                "kind": 393240,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 4861,
                                "end": 4863
                            },
                            "member": {
                                "kind": 129,
                                "member": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 4854,
                                        "end": 4854
                                    },
                                    "flags": 48,
                                    "transformFlags": 8,
                                    "start": 4853,
                                    "end": 4855
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "apply",
                                    "rawText": "apply",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 4856,
                                    "end": 4861
                                },
                                "flags": 48,
                                "transformFlags": 2,
                                "start": 4853,
                                "end": 4861
                            },
                            "chain": {
                                "kind": 302,
                                "chain": {
                                    "kind": 204,
                                    "chain": null,
                                    "typeArguments": null,
                                    "argumentList": {
                                        "kind": 256,
                                        "elements": [
                                            {
                                                "kind": 220,
                                                "propertyList": {
                                                    "kind": 218,
                                                    "properties": [
                                                        {
                                                            "kind": 219,
                                                            "asteriskToken": null,
                                                            "left": {
                                                                "kind": 134299649,
                                                                "text": "suffix",
                                                                "rawText": "suffix",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 4865,
                                                                "end": 4872
                                                            },
                                                            "right": {
                                                                "kind": 201392131,
                                                                "text": "?",
                                                                "rawText": "'?'",
                                                                "flags": 4194400,
                                                                "transformFlags": 0,
                                                                "start": 4873,
                                                                "end": 4877
                                                            },
                                                            "flags": 32,
                                                            "transformFlags": 128,
                                                            "start": 4865,
                                                            "end": 4877
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 4865,
                                                    "end": 4877
                                                },
                                                "flags": 48,
                                                "transformFlags": 8,
                                                "start": 4864,
                                                "end": 4879
                                            },
                                            {
                                                "kind": 119,
                                                "elementList": {
                                                    "kind": 270,
                                                    "elements": [
                                                        {
                                                            "kind": 201392131,
                                                            "text": "world",
                                                            "rawText": "'world'",
                                                            "flags": 4194400,
                                                            "transformFlags": 0,
                                                            "start": 4882,
                                                            "end": 4889
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 4194336,
                                                    "transformFlags": 0,
                                                    "start": 4882,
                                                    "end": 4889
                                                },
                                                "flags": 32,
                                                "transformFlags": 8,
                                                "start": 4880,
                                                "end": 4890
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 4864,
                                        "end": 4890
                                    },
                                    "flags": 32,
                                    "transformFlags": 1,
                                    "start": 4863,
                                    "end": 4891
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 4863,
                                "end": 4891
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 4853,
                            "end": 4891
                        },
                        {
                            "kind": 134299649,
                            "text": "undefined",
                            "rawText": "undefined",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 4892,
                            "end": 4902
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 4853,
                    "end": 4902
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 4843,
                "end": 4903
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 4843,
            "end": 4904
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "shouldBe",
                    "rawText": "shouldBe",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 4904,
                    "end": 4913
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 205586437,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 4914,
                                "end": 4919
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 4919,
                                "end": 4921
                            },
                            "consequent": {
                                "kind": 201392130,
                                "text": 0.4,
                                "rawText": "0.4",
                                "flags": 32864,
                                "transformFlags": 0,
                                "start": 4921,
                                "end": 4925
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 4925,
                                "end": 4927
                            },
                            "alternate": {
                                "kind": 201392130,
                                "text": 5,
                                "rawText": "5",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 4927,
                                "end": 4929
                            },
                            "flags": 96,
                            "transformFlags": 4096,
                            "start": 4914,
                            "end": 4929
                        },
                        {
                            "kind": 201392130,
                            "text": 5,
                            "rawText": "5",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 4930,
                            "end": 4932
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 4914,
                    "end": 4932
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 4904,
                "end": 4933
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 4904,
            "end": 4934
        }
    ],
    "isModule": false,
    "source": "obj?.aaa?.bbb;\nobj?.aaa.bbb;\n(obj?.aaa)?.bbb;\n(obj?.aaa).bbb;\nobj.aaa.bbb;\nobj.aaa?.bbb;\nfunc?.()?.bbb;\nfunc?.().bbb;\n(func?.())?.bbb;\n(func?.()).bbb;\nobj?.aaa?.();\nobj?.aaa();\n(obj?.aaa)?.();\n(obj?.aaa)();\n(obj?.aaa?.bbb.ccc?.ddd)?.eee;\n((obj?.aaa?.bbb.ccc)?.ddd)?.eee;\nfunction testBasicSuccessCases() {\n    shouldBe(undefined?.valueOf(), undefined);\n    shouldBe(null?.valueOf(), undefined);\n    shouldBe(true?.valueOf(), true);\n    shouldBe(false?.valueOf(), false);\n    shouldBe(0?.valueOf(), 0);\n    shouldBe(1?.valueOf(), 1);\n    shouldBe(''?.valueOf(), '');\n    shouldBe('hi'?.valueOf(), 'hi');\n    shouldBe({}?.constructor, Object);\n    shouldBe({ x: 'hi' }?.x, 'hi');\n    shouldBe([]?.length, 0);\n    shouldBe(['hi']?.length, 1);\n    shouldBe(masquerader?.foo, 3);\n    shouldBe(undefined?.['valueOf'](), undefined);\n    shouldBe(null?.['valueOf'](), undefined);\n    shouldBe(true?.['valueOf'](), true);\n    shouldBe(false?.['valueOf'](), false);\n    shouldBe(0?.['valueOf'](), 0);\n    shouldBe(1?.['valueOf'](), 1);\n    shouldBe(''?.['valueOf'](), '');\n    shouldBe('hi'?.['valueOf'](), 'hi');\n    shouldBe({}?.['constructor'], Object);\n    shouldBe({ x: 'hi' }?.['x'], 'hi');\n    shouldBe([]?.['length'], 0);\n    shouldBe(['hi']?.[0], 'hi');\n    shouldBe(masquerader?.['foo'], 3);\n    shouldBe(undefined?.(), undefined);\n    shouldBe(null?.(), undefined);\n    shouldBe((() => 3)?.(), 3);\n}\nnoInline(testBasicSuccessCases);\nfunction testBasicFailureCases() {\n    shouldThrowTypeError(() => true?.(), 'true is not a function');\n    shouldThrowTypeError(() => false?.(), 'false is not a function');\n    shouldThrowTypeError(() => 0?.(), '0 is not a function');\n    shouldThrowTypeError(() => 1?.(), '1 is not a function');\n    shouldThrowTypeError(() => ''?.(), '\\'\\' is not a function');\n    shouldThrowTypeError(() => 'hi'?.(), '\\'hi\\' is not a function');\n    shouldThrowTypeError(() => ({}?.()), '({}) is not a function');\n    shouldThrowTypeError(() => ({ x: 'hi' }?.()), '({ x: \\'hi\\' }) is not a function');\n    shouldThrowTypeError(() => []?.(), '[] is not a function');\n    shouldThrowTypeError(() => ['hi']?.(), '[\\'hi\\'] is not a function');\n    shouldThrowTypeError(() => masquerader?.(), 'masquerader is not a function');\n}\nnoInline(testBasicFailureCases);\nfor (let i = 0; i < 100000; i++)\n    testBasicSuccessCases();\nfor (let i = 0; i < 100; i++)\n    testBasicFailureCases();\nshouldThrowTypeError(() => ({}?.i()), '({})?.i is not a function');\nshouldBe({}.i?.(), undefined);\nshouldBe({}?.i?.(), undefined);\nshouldThrowTypeError(() => ({}?.['i']()), '({})?.[\\'i\\'] is not a function');\nshouldBe({}['i']?.(), undefined);\nshouldBe({}?.['i']?.(), undefined);\nshouldThrowTypeError(() => ({}?.a['b']), 'undefined is not an object');\nshouldBe({}?.a?.['b'], undefined);\nshouldBe(null?.a['b']().c, undefined);\nshouldThrowTypeError(() => ({}?.['a'].b), 'undefined is not an object');\nshouldBe({}?.['a']?.b, undefined);\nshouldBe(null?.['a'].b()['c'], undefined);\nshouldThrowTypeError(() => (() => {\n})?.()(), '(() => {})?.() is not a function');\nshouldBe((() => {\n})?.()?.(), undefined);\nshouldBe(null?.()().a['b'], undefined);\nconst o0 = {\n    a: {\n        b() {\n            return this._b.bind(this);\n        },\n        _b() {\n            return this.__b;\n        },\n        __b: { c: 42 }\n    }\n};\nshouldBe(o0?.a?.['b']?.()?.()?.c, 42);\nshouldBe(o0?.i?.['j']?.()?.()?.k, undefined);\nshouldBe((o0.a?._b)?.().c, 42);\nshouldBe((o0.a?._b)().c, 42);\nshouldBe({ undefined: 3 }?.[null?.a], 3);\nshouldBe((() => 3)?.(null?.a), 3);\nconst o1 = {\n    count: 0,\n    get x() {\n        this.count++;\n        return () => {\n        };\n    }\n};\no1.x?.y;\nshouldBe(o1.count, 1);\no1.x?.['y'];\nshouldBe(o1.count, 2);\no1.x?.();\nshouldBe(o1.count, 3);\nnull?.(o1.x);\nshouldBe(o1.count, 3);\nshouldBe(delete undefined?.foo, true);\nshouldBe(delete null?.foo, true);\nshouldBe(delete undefined?.['foo'], true);\nshouldBe(delete null?.['foo'], true);\nshouldBe(delete undefined?.(), true);\nshouldBe(delete null?.(), true);\nconst o2 = {\n    x: 0,\n    y: 0,\n    z() {\n    }\n};\nshouldBe(delete o2?.x, true);\nshouldBe(o2.x, undefined);\nshouldBe(delete o2?.x, true);\nshouldBe(delete o2?.['y'], true);\nshouldBe(o2.y, undefined);\nshouldBe(delete o2?.['y'], true);\nshouldBe(delete o2.z?.(), true);\nfunction greet(name) {\n    return `hey, ${ name }${ this.suffix ?? '.' }`;\n}\nshouldBe(eval?.('greet(\"world\")'), 'hey, world.');\nshouldBe(greet?.call({ suffix: '!' }, 'world'), 'hey, world!');\nshouldBe(greet.call?.({ suffix: '!' }, 'world'), 'hey, world!');\nshouldBe(null?.call({ suffix: '!' }, 'world'), undefined);\nshouldBe({}.call?.({ suffix: '!' }, 'world'), undefined);\nshouldBe(greet?.apply({ suffix: '?' }, ['world']), 'hey, world?');\nshouldBe(greet.apply?.({ suffix: '?' }, ['world']), 'hey, world?');\nshouldBe(null?.apply({ suffix: '?' }, ['world']), undefined);\nshouldBe({}.apply?.({ suffix: '?' }, ['world']), undefined);\nshouldBe(false ? 0.4 : 5, 5);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 4934
}
```

### Printed

```javascript
obj?.aaa?.bbb;
obj?.aaa.bbb;

(obj?.aaa)?.bbb;

(obj?.aaa).bbb;

obj.aaa.bbb;

obj.aaa?.bbb;

func?.()?.bbb;

func?.().bbb;

(func?.())?.bbb;

(func?.()).bbb;

obj?.aaa?.();

obj?.aaa();

(obj?.aaa)?.();

(obj?.aaa)();

(obj?.aaa?.bbb.ccc?.ddd)?.eee;

((obj?.aaa?.bbb.ccc)?.ddd)?.eee;

function testBasicSuccessCases() {
  shouldBe(undefined?.valueOf(), undefined);
  shouldBe(null?.valueOf(), undefined);
  shouldBe(true?.valueOf(), true);
  shouldBe(false?.valueOf(), false);
  shouldBe(0?.valueOf(), 0);
  shouldBe(1?.valueOf(), 1);
  shouldBe("''"?.valueOf(), "''");
  shouldBe("'hi'"?.valueOf(), "'hi'");
  shouldBe({}?.constructor, Object);
  shouldBe({ x: "'hi'" }?.x, "'hi'");
  shouldBe([]?.length, 0);
  shouldBe(["'hi'"]?.length, 1);
  shouldBe(masquerader?.foo, 3);
  shouldBe(undefined?.["'valueOf'"](), undefined);
  shouldBe(null?.["'valueOf'"](), undefined);
  shouldBe(true?.["'valueOf'"](), true);
  shouldBe(false?.["'valueOf'"](), false);
  shouldBe(0?.["'valueOf'"](), 0);
  shouldBe(1?.["'valueOf'"](), 1);
  shouldBe("''"?.["'valueOf'"](), "''");
  shouldBe("'hi'"?.["'valueOf'"](), "'hi'");
  shouldBe({}?.["'constructor'"], Object);
  shouldBe({ x: "'hi'" }?.["'x'"], "'hi'");
  shouldBe([]?.["'length'"], 0);
  shouldBe(["'hi'"]?.[0], "'hi'");
  shouldBe(masquerader?.["'foo'"], 3);
  shouldBe(undefined?.(), undefined);
  shouldBe(null?.(), undefined);
  shouldBe((() => 3)?.(), 3);
}

noInline(testBasicSuccessCases);

function testBasicFailureCases() {
  shouldThrowTypeError(() => true?.(), "'true is not a function'");
  shouldThrowTypeError(() => false?.(), "'false is not a function'");
  shouldThrowTypeError(() => 0?.(), "'0 is not a function'");
  shouldThrowTypeError(() => 1?.(), "'1 is not a function'");
  shouldThrowTypeError(() => "''"?.(), "''' is not a function'");
  shouldThrowTypeError(() => "'hi'"?.(), "''hi' is not a function'");
  shouldThrowTypeError(() => ({}?.()), "'({}) is not a function'");
  shouldThrowTypeError(
    () => ({ x: "'hi'" }?.()),
    "'({ x: 'hi' }) is not a function'"
  );
  shouldThrowTypeError(() => []?.(), "'[] is not a function'");
  shouldThrowTypeError(() => ["'hi'"]?.(), "'['hi'] is not a function'");
  shouldThrowTypeError(
    () => masquerader?.(),
    "'masquerader is not a function'"
  );
}

noInline(testBasicFailureCases);

for (let i = 0; i++; i  < 100000) testBasicSuccessCases();

for (let i = 0; i++; i  < 100) testBasicFailureCases();

shouldThrowTypeError(() => ({}?.i()), "'({})?.i is not a function'");

shouldBe({}.i?.(), undefined);

shouldBe({}?.i?.(), undefined);

shouldThrowTypeError(() => ({}?.["'i'"]()), "'({})?.['i'] is not a function'");

shouldBe({}["'i'"]?.(), undefined);

shouldBe({}?.["'i'"]?.(), undefined);

shouldThrowTypeError(() => ({}?.a["'b'"]), "'undefined is not an object'");

shouldBe({}?.a?.["'b'"], undefined);

shouldBe(null?.a["'b'"]().c, undefined);

shouldThrowTypeError(() => ({}?.["'a'"].b), "'undefined is not an object'");

shouldBe({}?.["'a'"]?.b, undefined);

shouldBe(null?.["'a'"].b()["'c'"], undefined);

shouldThrowTypeError(
  () => (() => {})?.()(),
  "'(() => {})?.() is not a function'"
);

shouldBe((() => {})?.()?.(), undefined);

shouldBe(null?.()().a["'b'"], undefined);

const o0 = {
    a: {
      b() {
        return this._b.bind(this);
      },
      _b() {
        return this.__b;
      },
      __b: { c: 42 }
    }
  };

shouldBe(o0?.a?.["'b'"]?.()?.()?.c, 42);

shouldBe(o0?.i?.["'j'"]?.()?.()?.k, undefined);

shouldBe((o0.a?._b)?.().c, 42);

shouldBe((o0.a?._b)().c, 42);

shouldBe({ undefined: 3 }?.[null?.a], 3);

shouldBe((() => 3)?.(null?.a), 3);

const o1 = {
    count: 0,
    get x() {
      this.count++;
      return () => {};
    }
  };

o1.x?.y;

shouldBe(o1.count, 1);

o1.x?.["'y'"];

shouldBe(o1.count, 2);

o1.x?.();

shouldBe(o1.count, 3);

null?.(o1.x);

shouldBe(o1.count, 3);

shouldBe(delete undefined?.foo, true);

shouldBe(delete null?.foo, true);

shouldBe(delete undefined?.["'foo'"], true);

shouldBe(delete null?.["'foo'"], true);

shouldBe(delete undefined?.(), true);

shouldBe(delete null?.(), true);

const o2 = {
    x: 0,
    y: 0,
    z() {}
  };

shouldBe(delete o2?.x, true);

shouldBe(o2.x, undefined);

shouldBe(delete o2?.x, true);

shouldBe(delete o2?.["'y'"], true);

shouldBe(o2.y, undefined);

shouldBe(delete o2?.["'y'"], true);

shouldBe(delete o2.z?.(), true);

function greet(name) {
  return `hey, ${name},
  ${this.suffix ?? "'.'"}`;
}

shouldBe(eval?.("'greet(\"world\")'"), "'hey, world.'");

shouldBe(greet?.call({ suffix: "'!'" }, "'world'"), "'hey, world!'");

shouldBe(greet.call?.({ suffix: "'!'" }, "'world'"), "'hey, world!'");

shouldBe(null?.call({ suffix: "'!'" }, "'world'"), undefined);

shouldBe({}.call?.({ suffix: "'!'" }, "'world'"), undefined);

shouldBe(greet?.apply({ suffix: "'?'" }, ["'world'"]), "'hey, world?'");

shouldBe(greet.apply?.({ suffix: "'?'" }, ["'world'"]), "'hey, world?'");

shouldBe(null?.apply({ suffix: "'?'" }, ["'world'"]), undefined);

shouldBe({}.apply?.({ suffix: "'?'" }, ["'world'"]), undefined);

shouldBe(false ? 0.4 : 5, 5);

```

### Diagnostics

```javascript
✔ No errors
```

